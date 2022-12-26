import { useContext } from "react";
import { CountryInfoContext } from ".";
import { InfoBlock, SubHeader, Table } from "./index.styled";
import displayData from "../../utils/displayData";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Miscellaneous() {
  const { countryInfo, placeholder, isLoading } = useContext(CountryInfoContext);

  const unMemberToDisplay = displayData(
    countryInfo?.unMember,
    (isUNMember) => String(isUNMember),
    !("unMember" in countryInfo),
    placeholder,
    isLoading,
    <Skeleton width={80} />
  );

  const independentToDisplay = displayData(
    countryInfo?.independent,
    (isIndependent) => String(isIndependent),
    !("independent" in countryInfo),
    placeholder,
    isLoading,
    <Skeleton width={80} />
  );

  const timezonesToDisplay = displayData(
    countryInfo?.timezones,
    (timezonesList) => timezonesList.join(", "),
    !("timezones" in countryInfo),
    placeholder,
    isLoading,
    <Skeleton width={80} />
  );

  const startOfWeekToDisplay = displayData(
    countryInfo?.startOfWeek,
    (startOfWeek) => startOfWeek.slice(0, 1).toUpperCase() + startOfWeek.slice(1),
    !("startOfWeek" in countryInfo),
    placeholder,
    isLoading,
    <Skeleton width={80} />
  );

  const tldToDisplay = displayData(
    countryInfo?.tld,
    (tldList) => tldList.join(", "),
    !("tld" in countryInfo),
    placeholder,
    isLoading,
    <Skeleton width={80} />
  );

  const postalCodeFormatToDisplay = displayData(
    countryInfo?.postalCode?.format,
    null,
    !("postalCode" in countryInfo && "format" in countryInfo.postalCode),
    placeholder,
    isLoading,
    <Skeleton width={80} />
  );

  return (
    <InfoBlock>
      <SubHeader>Miscellaneous</SubHeader>
      <Table>
        <tbody>
          <tr>
            <th>UN member</th>
            <td>{unMemberToDisplay}</td>
          </tr>
          <tr>
            <th>Independent</th>
            <td>{independentToDisplay}</td>
          </tr>
          <tr>
            <th>Timezone</th>
            <td>{timezonesToDisplay}</td>
          </tr>
          <tr>
            <th>Start of week</th>
            <td>{startOfWeekToDisplay}</td>
          </tr>
          <tr>
            <th>Top level domain</th>
            <td>{tldToDisplay}</td>
          </tr>
          <tr>
            <th>Postal code (format)</th>
            <td>{postalCodeFormatToDisplay}</td>
          </tr>
        </tbody>
      </Table>
    </InfoBlock>
  );
}

export default Miscellaneous;
