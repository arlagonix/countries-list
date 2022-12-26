import Chip from "../../components/Chip";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { digitGroups } from "../../utils/digitGroups";
import { CountryInfoContext } from ".";
import { ChipContainer, InfoBlock, SubHeader, Table } from "./index.styled";
import displayData from "../../utils/displayData";

interface GeneralInformationProps {
  /** Border countries API data */
  userQueries: any;
}

function GeneralInformation({ userQueries }: GeneralInformationProps) {
  const navigate = useNavigate();
  const { countryInfo, placeholder, isLoading } = useContext(CountryInfoContext);

  const officialNameToDisplay = displayData(
    countryInfo?.name?.common,
    null,
    !("name" in countryInfo && "common" in countryInfo.name),
    placeholder,
    isLoading,
    <Skeleton width={120} />
  );

  const commonNameToDisplay = displayData(
    countryInfo?.name?.common,
    null,
    !("name" in countryInfo && "common" in countryInfo.name),
    placeholder,
    isLoading,
    <Skeleton width={120} />
  );

  const alternativeSpellingToDisplay = displayData(
    countryInfo?.altSpellings,
    (spellingsList) => spellingsList.join(", "),
    !("altSpellings" in countryInfo),
    placeholder,
    isLoading,
    <Skeleton width={160} />
  );

  const capitalToDisplay = displayData(
    countryInfo?.capital,
    (capitalsList) => capitalsList.join(", "),
    !("capital" in countryInfo),
    placeholder,
    isLoading,
    <Skeleton width={100} />
  );

  const populationToDisplay = displayData(
    countryInfo?.population,
    (populationValue) => digitGroups(populationValue),
    !("population" in countryInfo),
    placeholder,
    isLoading,
    <Skeleton width={170} />
  );

  const languagesToDisplay = displayData(
    countryInfo?.languages,
    (languagesList) => Object.values(languagesList).join(", "),
    !("languages" in countryInfo),
    placeholder,
    isLoading,
    <Skeleton width={120} />
  );

  const currenciesToDisplay = displayData(
    countryInfo?.currencies,
    (currenciesList) =>
      Object.keys(currenciesList)
        .map((currencyKey: any) => {
          const name = currenciesList[currencyKey].name;
          const symbol = currenciesList[currencyKey].symbol;
          return `${name} (${symbol})`;
        })
        .join(", "),
    !("currencies" in countryInfo),
    placeholder,
    isLoading,
    <Skeleton width={150} />
  );

  const borderCountriesToDisplay = displayData(
    userQueries,
    (borderCountriesList) =>
      borderCountriesList.map((borderCountry: any, index: number) => {
        return borderCountry !== undefined && borderCountry.data !== undefined ? (
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
          <Skeleton width={100} height={30} key={index} />
        );
      }),
    !(userQueries !== undefined && userQueries.length !== 0),
    placeholder,
    isLoading,
    <Skeleton width={150} />
  );

  return (
    <InfoBlock>
      <SubHeader>General information</SubHeader>
      <Table>
        <tbody>
          <tr>
            <th>Official name</th>
            <td>{officialNameToDisplay}</td>
          </tr>
          <tr>
            <th>Common name</th>
            <td>{commonNameToDisplay}</td>
          </tr>
          <tr>
            <th>Alternative spelling</th>
            <td>{alternativeSpellingToDisplay}</td>
          </tr>
          <tr>
            <th>Captial</th>
            <td>{capitalToDisplay}</td>
          </tr>
          <tr>
            <th>Population</th>
            <td>{populationToDisplay}</td>
          </tr>
          <tr>
            <th>Languages</th>
            <td>{languagesToDisplay}</td>
          </tr>
          <tr>
            <th>Currencies</th>
            <td>{currenciesToDisplay}</td>
          </tr>
          <tr>
            <th>Border countries</th>
            <td>
              <ChipContainer>{borderCountriesToDisplay}</ChipContainer>
            </td>
          </tr>
        </tbody>
      </Table>
    </InfoBlock>
  );
}

export default GeneralInformation;
