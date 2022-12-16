import { useContext } from "react";
import { CountryInfoContext } from ".";
import { InfoBlock, SubHeader, Table } from "./index.styled";

function Miscellaneous() {
  const { countryInfo, placeholder } = useContext(CountryInfoContext);
  return (
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
            <td>{"independent" in countryInfo ? String(countryInfo.independent) : placeholder}</td>
          </tr>
          <tr>
            <th>Timezone</th>
            <td>{"timezones" in countryInfo ? countryInfo.timezones.join(", ") : placeholder}</td>
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
            <td>{"postalCode" in countryInfo ? countryInfo.postalCode.format : placeholder}</td>
          </tr>
        </tbody>
      </Table>
    </InfoBlock>
  );
}

export default Miscellaneous;
