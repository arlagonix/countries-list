import Svg from "../../global/Svg";
import { Image } from "antd";
import { useContext } from "react";
import { CountryInfoContext } from ".";
import { ImageContainer, InfoBlock, SubHeader } from "./index.styled";

const antDesignPreview = {
  mask: <Svg icon="eye" fill="rgba(255,255,255,0.75)" />,
};

function CoatOfArms() {
  const { countryInfo } = useContext(CountryInfoContext);
  return (
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
  );
}

export default CoatOfArms;
