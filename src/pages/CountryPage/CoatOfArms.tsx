import Svg from "../../global/Svg";
import { Image } from "antd";
import { useContext } from "react";
import { CountryInfoContext } from ".";
import { ImageContainer, InfoBlock, SubHeader, StyledParagraph } from "./index.styled";
import displayData from "../../utils/displayData";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const antDesignPreview = {
  mask: <Svg icon="eye" fill="rgba(255,255,255,0.75)" />,
};

function CoatOfArms() {
  const { countryInfo, isLoading } = useContext(CountryInfoContext);

  const coatOfArmsToDisplay = displayData(
    countryInfo?.coatOfArms?.svg,
    (coatOfArmsSvgUrl) => (
      <ImageContainer>
        <Image
          height={240}
          src={coatOfArmsSvgUrl}
          preview={antDesignPreview}
          referrerPolicy="no-referrer"
        />
      </ImageContainer>
    ),
    !("coatOfArms" in countryInfo && "svg" in countryInfo.coatOfArms),
    <StyledParagraph>The country doesn't have a coat of arms</StyledParagraph>,
    isLoading,
    <Skeleton height={240} />
  );

  return (
    <InfoBlock>
      <SubHeader>Coat of arms</SubHeader>
      {coatOfArmsToDisplay}
    </InfoBlock>
  );
}

export default CoatOfArms;
