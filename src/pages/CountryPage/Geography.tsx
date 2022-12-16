import Chip from "../../components/Chip";
import { useContext } from "react";
import { digitGroups } from "../../utils/digitGroups";
import { CountryInfoContext } from ".";
import { ChipContainer, InfoBlock, SubHeader, Table } from "./index.styled";

function Geography() {
  const { countryInfo, placeholder } = useContext(CountryInfoContext);
  const googleMapsURL =
    "maps" in countryInfo && "googleMaps" in countryInfo.maps ? countryInfo.maps?.googleMaps : "#";
  const openStreetMaps =
    "maps" in countryInfo && "openStreetMaps" in countryInfo.maps
      ? countryInfo.maps?.openStreetMaps
      : "#";
  return (
    <InfoBlock>
      <SubHeader>Geography</SubHeader>
      <Table>
        <tbody>
          <tr>
            <th>Continents</th>
            <td>{"continents" in countryInfo ? countryInfo.continents.join(", ") : placeholder}</td>
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
            <td>{"landlocked" in countryInfo ? String(countryInfo.landlocked) : placeholder}</td>
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
  );
}

export default Geography;
