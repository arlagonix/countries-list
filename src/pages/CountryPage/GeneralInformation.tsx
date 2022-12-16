import Chip from "../../components/Chip";
import Skeleton from "react-loading-skeleton";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { digitGroups } from "../../utils/digitGroups";
import { CountryInfoContext } from ".";
import { ChipContainer, InfoBlock, SubHeader, Table } from "./index.styled";

interface GeneralInformationProps {
  userQueries: any;
}

function GeneralInformation({ userQueries }: GeneralInformationProps) {
  const navigate = useNavigate();
  const { countryInfo, placeholder } = useContext(CountryInfoContext);
  return (
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
            <td>{countryInfo.name?.common ?? placeholder}</td>
          </tr>
          <tr>
            <th>Alternative spelling</th>
            <td>
              {"altSpellings" in countryInfo ? countryInfo.altSpellings.join(", ") : placeholder}
            </td>
          </tr>
          <tr>
            <th>Captial</th>
            <td>{"capital" in countryInfo ? countryInfo.capital.join(", ") : placeholder}</td>
          </tr>
          <tr>
            <th>Population</th>
            <td>
              {"population" in countryInfo ? digitGroups(countryInfo.population) : placeholder}
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
                  ? userQueries.map((borderCountry: any, index: number) => {
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
                    })
                  : placeholder}
              </ChipContainer>
            </td>
          </tr>
        </tbody>
      </Table>
    </InfoBlock>
  );
}

export default GeneralInformation;
