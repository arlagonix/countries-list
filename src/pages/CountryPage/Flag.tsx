import Svg from "../../global/Svg";
import { Image } from "antd";
import { useContext } from "react";
import { CountryInfoContext } from ".";
import { ImageContainer, InfoBlock, SubHeader } from "./index.styled";

const antDesignPreview = {
  mask: <Svg icon="eye" fill="rgba(255,255,255,0.75)" />,
};

function Flag() {
  const { countryInfo } = useContext(CountryInfoContext);
  return (
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
  );
}

export default Flag;
