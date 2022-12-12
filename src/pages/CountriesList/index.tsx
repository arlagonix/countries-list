import { useState, useEffect, useMemo, useDeferredValue, useTransition } from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import {
  Form,
  Layout,
  CardList,
  NothingFoundContainer,
  NothingFoundHeader,
  NothingFoundCaption,
} from "./index.styled";
import CountryCard, { SkeletonCountryCard } from "../../components/CountryCard";
import SearchField from "../../components/SearchField";
import Select from "../../components/Select";
import type { IOption } from "../../components/Select/index.types";
import { useQuery } from "@tanstack/react-query";
import useDebounce from "../../hooks/useDebounce";
import { regionsList } from "./index.dicts";

function CountriesList() {
  const [region, setRegion] = useState<IOption | null>(null);
  const [searchCountry, setSearchCountry] = useState<string>("");
  const [isPending, startTransition] = useTransition();
  const [displayedData, setDisplayedData] = useState([]);
  const memoNavigation = useMemo(() => <Navigation />, []);
  const memoFooter = useMemo(() => <Footer />, []);

  // There are 2 different endpoints in REST countries API: for filtering by names, for filtering by regions
  // Thus I decided to empty 1 filter when another filter is changed and vice versa
  const searchCountryChangeHandler = (newValue: string) => {
    setSearchCountry(newValue);
    setRegion(null);
  };

  const regionChangeHandler = (newValue: IOption | null) => {
    setRegion(newValue);
    setSearchCountry("");
  };

  const SkeletonCountryCardList = [...Array(12)]
    .fill(0)
    .map((item, index) => <SkeletonCountryCard key={index} />);

  const { isLoading, data, refetch } = useQuery({
    queryKey: ["countriesList"],
    queryFn: async () => {
      const baseURL = "https://restcountries.com/v3.1/";
      let endingURL = "all";
      if (region !== null) endingURL = `region/${region.optionValue}`;
      else if (searchCountry !== "") endingURL = `/name/${searchCountry.replace(" ", "%20")}`;
      const response = await fetch(baseURL + endingURL);
      if (!response.ok) {
        return new Promise((resolve) => resolve([]));
      }
      return response.json();
    },
  });

  useEffect(() => {
    refetch();
  }, [region]);

  useDebounce(() => refetch(), 300, [searchCountry]);

  useEffect(() => {
    startTransition(() => {
      if (data === undefined) {
        return;
      }
      setDisplayedData(
        data.map((item: any) => (
          <CountryCard
            key={item.cca3}
            flagEmoji={item.flag}
            countryName={item.name.common}
            population={item.population}
            region={item.region}
            capital={item.capital?.join(", ") ?? "-"}
            languages={Object.values(item.languages ?? {}).join(", ") ?? "-"}
          />
        ))
      );
    });
  }, [data]);

  return (
    <>
      {memoNavigation}
      <Layout>
        <Form>
          <SearchField
            label="Search for a country"
            inputValue={searchCountry}
            changeHandler={searchCountryChangeHandler}
          />
          <Select
            label="Select region"
            optionsList={regionsList}
            value={region}
            changeHandler={regionChangeHandler}
          />
        </Form>
        <CardList>{isPending || isLoading ? SkeletonCountryCardList : displayedData}</CardList>
        {!isPending && data !== undefined && data.length === 0 && (
          <NothingFoundContainer>
            <NothingFoundHeader>No Results</NothingFoundHeader>
            <NothingFoundCaption>Try to change search parameters</NothingFoundCaption>
          </NothingFoundContainer>
        )}
      </Layout>
      {memoFooter}
    </>
  );
}

export default CountriesList;
