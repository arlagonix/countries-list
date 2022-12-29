import Svg from "../../global/Svg";
import { useTheme } from "styled-components";
import { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { CountryInfoContext } from ".";
import { Emoji, GoBack, Header, HeaderContainer } from "./index.styled";
import displayData from "../../utils/displayData";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function CountryPageHeader() {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const { countryInfo, placeholder, isLoading } = useContext(CountryInfoContext);

  const countryNameToDisplay = displayData(
    countryInfo?.name?.common,
    null,
    !("name" in countryInfo && "common" in countryInfo.name),
    placeholder,
    isLoading,
    <Skeleton width={200} />
  );

  const flagToDisplay = displayData(
    countryInfo?.flag,
    null,
    !("flag" in countryInfo),
    "",
    isLoading,
    <Skeleton width={48} />
  );

  console.log(location.key);

  return (
    <HeaderContainer>
      <GoBack
        data-test="go-back"
        onClick={() => {
          if (location.key !== "default") navigate(-1);
          else navigate("/");
          window.scroll(0, 0);
        }}
      >
        <Svg icon="arrowBack" width="48" height="48" fill={theme.colors.countryPage.header} />
      </GoBack>
      <Header>{countryNameToDisplay}</Header>
      <Emoji>{flagToDisplay}</Emoji>
    </HeaderContainer>
  );
}

export default CountryPageHeader;
