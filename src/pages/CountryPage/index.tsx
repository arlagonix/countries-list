import Flag from "./Flag";
import React from "react";
import Geography from "./Geography";
import { Layout } from "./index.styled";
import CoatOfArms from "./CoatOfArms";
import { useParams } from "react-router-dom";
import NothingFound from "./NothingFound";
import Miscellaneous from "./Miscellaneous";
import CountryPageHeader from "./CountryPageHeader";
import GeneralInformation from "./GeneralInformation";
import { useQuery, useQueries } from "@tanstack/react-query";

async function fetchCountry(countryCode: string | undefined) {
  const URL = `https://restcountries.com/v3.1/alpha/${countryCode}`;
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      console.log(response);
      return new Promise((resolve) => resolve([]));
    }
    return response.json();
  } catch (error) {
    console.log(error);
    return new Promise((resolve) => resolve([]));
  }
}

export const CountryInfoContext = React.createContext<any>(null);

function CountryPage() {
  const placeholder = "—";
  const { code: countryCode } = useParams();
  const { isLoading, data, isError, isPaused } = useQuery({
    queryKey: ["country", countryCode],
    queryFn: () => fetchCountry(countryCode),
  });
  const countryInfo = isLoading || data?.length === 0 ? {} : data[0];
  const userQueries = useQueries({
    queries: (countryInfo.borders ?? []).map((borderCountry: string) => {
      return {
        queryKey: ["country", borderCountry],
        queryFn: () => fetchCountry(borderCountry),
        enabled: !!data,
      };
    }),
  });

  return (
    <Layout>
      {!isError && !isPaused && data?.length !== 0 ? (
        <CountryInfoContext.Provider value={{ countryInfo, placeholder }}>
          <CountryPageHeader />
          <GeneralInformation userQueries={userQueries} />
          <Geography />
          <Flag />
          <CoatOfArms />
          <Miscellaneous />
        </CountryInfoContext.Provider>
      ) : (
        <NothingFound />
      )}
    </Layout>
  );
}

export default CountryPage;
