import Svg from "../../global/Svg";
import { useTheme } from "styled-components";
import { useQuery, useQueries } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { digitGroups } from "../../utils/digitGroups";
import { Image } from "antd";
import Chip from "../../components/Chip";
import {
  ChipContainer,
  Emoji,
  GoBack,
  HeaderContainer,
  Header,
  ImageContainer,
  InfoBlock,
  Layout,
  SubHeader,
  Table,
} from "./index.styled";
import {
  NothingFoundContainer,
  NothingFoundCaption,
  NothingFoundHeader,
} from "../CountriesList/index.styled";
import Skeleton from "react-loading-skeleton";

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

function CountryPage() {
  const theme = useTheme();
  const navigate = useNavigate();
  const { code: countryCode } = useParams();

  const { isLoading, data, isError, isPaused } = useQuery({
    queryKey: ["country", countryCode],
    queryFn: () => fetchCountry(countryCode),
  });

  const placeholder = "—";
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

  const commonName = countryInfo.name?.common ?? placeholder;
  const googleMapsURL =
    "maps" in countryInfo && "googleMaps" in countryInfo.maps ? countryInfo.maps?.googleMaps : "#";
  const openStreetMaps =
    "maps" in countryInfo && "openStreetMaps" in countryInfo.maps
      ? countryInfo.maps?.openStreetMaps
      : "#";

  const antDesignPreview = {
    mask: <Svg icon="eye" fill="rgba(255,255,255,0.75)" />,
  };

  return (
    <Layout>
      {(isError || isPaused || data?.length === 0) && (
        <NothingFoundContainer>
          <NothingFoundHeader>Unable to load country data</NothingFoundHeader>
          <NothingFoundCaption>Try to change the country code in URL</NothingFoundCaption>
          <NothingFoundCaption>Also there might be problems with your Internet</NothingFoundCaption>
        </NothingFoundContainer>
      )}
      {!isError && !isPaused && data?.length !== 0 && (
        <>
          <HeaderContainer>
            <GoBack
              onClick={() => {
                navigate(-1);
                window.scroll(0, 0);
              }}
            >
              <Svg icon="arrowBack" width="48" height="48" fill={theme.colors.countryPage.header} />
            </GoBack>
            <Header>{commonName}</Header>
            <Emoji>{countryInfo.flag ?? ""}</Emoji>
          </HeaderContainer>

          <InfoBlock>
            <SubHeader>General information</SubHeader>
            <Table>
              <tbody>
                <tr>
                  <th>Official name</th>
                  <td>{countryInfo.name?.official ?? placeholder}</td>
                </tr>
                <tr>
                  <th>Common name</th>
                  <td>{commonName}</td>
                </tr>
                <tr>
                  <th>Alternative spelling</th>
                  <td>
                    {"altSpellings" in countryInfo
                      ? countryInfo.altSpellings.join(", ")
                      : placeholder}
                  </td>
                </tr>
                <tr>
                  <th>Captial</th>
                  <td>{"capital" in countryInfo ? countryInfo.capital.join(", ") : placeholder}</td>
                </tr>
                <tr>
                  <th>Population</th>
                  <td>
                    {"population" in countryInfo
                      ? digitGroups(countryInfo.population)
                      : placeholder}
                  </td>
                </tr>
                <tr>
                  <th>Languages</th>
                  <td>
                    {"languages" in countryInfo
                      ? Object.values(countryInfo.languages).join(", ")
                      : placeholder}
                  </td>
                </tr>
                <tr>
                  <th>Currencies</th>
                  <td>
                    {"currencies" in countryInfo
                      ? Object.keys(countryInfo.currencies)
                          .map((currencyKey) => {
                            const name = countryInfo.currencies[currencyKey].name;
                            const symbol = countryInfo.currencies[currencyKey].symbol;
                            return `${name} (${symbol})`;
                          })
                          .join(", ")
                      : placeholder}
                  </td>
                </tr>
                <tr>
                  <th>Border countries</th>
                  <td>
                    <ChipContainer>
                      {userQueries !== undefined && userQueries.length !== 0
                        ? userQueries.map((borderCountry: any) => {
                            return borderCountry !== undefined &&
                              borderCountry.data !== undefined ? (
                              <Chip
                                key={borderCountry.data[0].cca3}
                                text={borderCountry.data[0].name.common}
                                iconType="link"
                                clickHandler={() => {
                                  navigate(`/${borderCountry.data[0].cca3}`);
                                  window.scroll(0, 0);
                                }}
                              />
                            ) : (
                              <Skeleton width={100} height={30} />
                            );
                          })
                        : placeholder}
                    </ChipContainer>
                  </td>
                </tr>
              </tbody>
            </Table>
          </InfoBlock>

          <InfoBlock>
            <SubHeader>Geography</SubHeader>
            <Table>
              <tbody>
                <tr>
                  <th>Continents</th>
                  <td>
                    {"continents" in countryInfo ? countryInfo.continents.join(", ") : placeholder}
                  </td>
                </tr>
                <tr>
                  <th>Region</th>
                  <td>{"region" in countryInfo ? countryInfo.region : placeholder}</td>
                </tr>
                <tr>
                  <th>Sub region</th>
                  <td>{"subregion" in countryInfo ? countryInfo.subregion : placeholder}</td>
                </tr>
                <tr>
                  <th>Area</th>
                  <td>{"area" in countryInfo ? digitGroups(countryInfo.area) : placeholder} km²</td>
                </tr>
                <tr>
                  <th>Landlocked</th>
                  <td>
                    {"landlocked" in countryInfo ? String(countryInfo.landlocked) : placeholder}
                  </td>
                </tr>

                <tr>
                  <th>Maps</th>
                  <td>
                    <ChipContainer>
                      <Chip text="Google Maps" iconType="link" href={googleMapsURL} />
                      <Chip text="Street Maps" iconType="link" href={openStreetMaps} />
                    </ChipContainer>
                  </td>
                </tr>
              </tbody>
            </Table>
          </InfoBlock>

          <InfoBlock>
            <SubHeader>Flag</SubHeader>
            {!("flags" in countryInfo) || Object.keys(countryInfo.flags).length === 0 ? (
              <p>The country doesn't have a flag</p>
            ) : (
              <ImageContainer>
                <Image
                  height={240}
                  src={"flags" in countryInfo ? countryInfo.flags?.svg : ""}
                  style={{ border: "1px solid black" }}
                  preview={antDesignPreview}
                  referrerPolicy="no-referrer"
                />
              </ImageContainer>
            )}
          </InfoBlock>

          <InfoBlock>
            <SubHeader>Coat of arms</SubHeader>
            {!("coatOfArms" in countryInfo) || Object.keys(countryInfo.coatOfArms).length === 0 ? (
              <p>The country doesn't have a coat of arms</p>
            ) : (
              <ImageContainer>
                <Image
                  height={240}
                  src={"coatOfArms" in countryInfo ? countryInfo.coatOfArms?.svg : ""}
                  preview={antDesignPreview}
                  referrerPolicy="no-referrer"
                />
              </ImageContainer>
            )}
          </InfoBlock>

          <InfoBlock>
            <SubHeader>Miscellaneous</SubHeader>
            <Table>
              <tbody>
                <tr>
                  <th>UN member</th>
                  <td>{"unMember" in countryInfo ? String(countryInfo.unMember) : placeholder}</td>
                </tr>
                <tr>
                  <th>Independent</th>
                  <td>
                    {"independent" in countryInfo ? String(countryInfo.independent) : placeholder}
                  </td>
                </tr>
                <tr>
                  <th>Timezone</th>
                  <td>
                    {"timezones" in countryInfo ? countryInfo.timezones.join(", ") : placeholder}
                  </td>
                </tr>
                <tr>
                  <th>Start of week</th>
                  <td>
                    {"startOfWeek" in countryInfo
                      ? countryInfo.startOfWeek.slice(0, 1).toUpperCase() +
                        countryInfo.startOfWeek.slice(1)
                      : placeholder}
                  </td>
                </tr>
                <tr>
                  <th>Top level domain</th>
                  <td>{"tld" in countryInfo ? countryInfo.tld.join(", ") : placeholder}</td>
                </tr>
                <tr>
                  <th>Postal code (format)</th>
                  <td>
                    {"postalCode" in countryInfo ? countryInfo.postalCode.format : placeholder}
                  </td>
                </tr>
              </tbody>
            </Table>
          </InfoBlock>
        </>
      )}
    </Layout>
  );
}

export default CountryPage;
