import Select from "../../components/Select";
import useDebounce from "../../hooks/useDebounce";
import SearchField from "../../components/SearchField";
import { useQuery } from "@tanstack/react-query";
import { regionsList } from "./index.dicts";
import useLocalStorage from "../../hooks/useLocalStorage";
import type { IOption } from "../../components/Select/index.types";
import CountryCard, { SkeletonCountryCard } from "../../components/CountryCard";
import { useState, useEffect, useTransition } from "react";
import {
  Form,
  Layout,
  CardList,
  NothingFoundContainer,
  NothingFoundHeader,
  NothingFoundCaption,
} from "./index.styled";

async function fetchListOfCountries(region: IOption | null, searchCountry: string) {
  const baseURL = "https://restcountries.com/v3.1/";
  let endingURL = "all";
  if (region !== null) endingURL = `region/${region.optionValue}`;
  else if (searchCountry !== "") endingURL = `/name/${searchCountry.replace(" ", "%20")}`;
  const response = await fetch(baseURL + endingURL);
  if (!response.ok) {
    return new Promise((resolve) => resolve([]));
  }
  return response.json();
}

function CountriesList() {
  const [region, setRegion] = useLocalStorage<IOption | null>("region", null);
  const [searchCountry, setSearchCountry] = useLocalStorage<string>("searchCountry", "");
  const [isPending, startTransition] = useTransition();
  const [displayedData, setDisplayedData] = useState([]);

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
    queryFn: () => fetchListOfCountries(region, searchCountry),
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            countryName={item.name.common}
            population={item.population}
            region={item.region}
            capital={item.capital?.join(", ") ?? "-"}
            languages={Object.values(item.languages ?? {}).join(", ") ?? "-"}
            countryCode={item.cca3}
            flagURL={item.flags.svg}
          />
        ))
      );
    });
  }, [data]);

  return (
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
        <NothingFoundContainer data-test="nothing-found">
          <NothingFoundHeader>No Results</NothingFoundHeader>
          <NothingFoundCaption>Try to change search parameters</NothingFoundCaption>
        </NothingFoundContainer>
      )}
    </Layout>
  );
}

export default CountriesList;
