import Chip from "../../components/Chip";
import { useContext } from "react";
import { digitGroups } from "../../utils/digitGroups";
import { CountryInfoContext } from ".";
import { ChipContainer, InfoBlock, SubHeader, Table } from "./index.styled";
import displayData from "../../utils/displayData";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Geography() {
  const { countryInfo, placeholder, isLoading } = useContext(CountryInfoContext);

  const continentsToDisplay = displayData(
    countryInfo?.continents,
    (continentsList) => continentsList.join(", "),
    !("continents" in countryInfo),
    placeholder,
    isLoading,
    <Skeleton width={80} />
  );

  const regionToDisplay = displayData(
    countryInfo?.region,
    null,
    !("region" in countryInfo),
    placeholder,
    isLoading,
    <Skeleton width={80} />
  );

  const subregionToDisplay = displayData(
    countryInfo?.subregion,
    null,
    !("subregion" in countryInfo),
    placeholder,
    isLoading,
    <Skeleton width={80} />
  );

  const areaToDisplay = displayData(
    countryInfo?.area,
    (areaValue) => `${digitGroups(areaValue)} km²`,
    !("area" in countryInfo),
    placeholder,
    isLoading,
    <Skeleton width={120} />
  );

  const landLockedToDisplay = displayData(
    countryInfo?.landlocked,
    (isLandLocked) => String(isLandLocked),
    !("landlocked" in countryInfo),
    placeholder,
    isLoading,
    <Skeleton width={40} />
  );

  const googleMapsToDisplay = displayData(
    countryInfo?.maps?.googleMaps,
    (googleMapsURL) => <Chip text="Google Maps" iconType="link" href={googleMapsURL} />,
    !("maps" in countryInfo && "googleMaps" in countryInfo.maps),
    "",
    isLoading,
    <Skeleton width={60} />
  );

  const streetMapsToDisplay = displayData(
    countryInfo?.maps?.openStreetMaps,
    (streetMapsURL) => <Chip text="Street Maps" iconType="link" href={streetMapsURL} />,
    !("maps" in countryInfo && "openStreetMaps" in countryInfo.maps),
    "",
    isLoading,
    <Skeleton width={60} />
  );

  return (
    <InfoBlock>
      <SubHeader>Geography</SubHeader>
      <Table>
        <tbody>
          <tr>
            <th>Continents</th>
            <td>{continentsToDisplay}</td>
          </tr>
          <tr>
            <th>Region</th>
            <td>{regionToDisplay}</td>
          </tr>
          <tr>
            <th>Sub region</th>
            <td>{subregionToDisplay}</td>
          </tr>
          <tr>
            <th>Area</th>
            <td>{areaToDisplay}</td>
          </tr>
          <tr>
            <th>Landlocked</th>
            <td>{landLockedToDisplay}</td>
          </tr>
          <tr>
            <th>Maps</th>
            <td>
              <ChipContainer>
                {googleMapsToDisplay !== "" && streetMapsToDisplay !== "" ? (
                  <>
                    {googleMapsToDisplay}
                    {streetMapsToDisplay}
                  </>
                ) : (
                  placeholder
                )}
              </ChipContainer>
            </td>
          </tr>
        </tbody>
      </Table>
    </InfoBlock>
  );
}

export default Geography;
