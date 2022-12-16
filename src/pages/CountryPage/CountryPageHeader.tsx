import Svg from "../../global/Svg";
import { useTheme } from "styled-components";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CountryInfoContext } from ".";
import { Emoji, GoBack, Header, HeaderContainer } from "./index.styled";

function CountryPageHeader() {
  const theme = useTheme();
  const navigate = useNavigate();
  const { countryInfo, placeholder } = useContext(CountryInfoContext);

  return (
    <HeaderContainer>
      <GoBack
        onClick={() => {
          navigate(-1);
          window.scroll(0, 0);
        }}
      >
        <Svg icon="arrowBack" width="48" height="48" fill={theme.colors.countryPage.header} />
      </GoBack>
      <Header>{countryInfo.name?.common ?? placeholder}</Header>
      <Emoji>{countryInfo.flag ?? ""}</Emoji>
    </HeaderContainer>
  );
}

export default CountryPageHeader;
