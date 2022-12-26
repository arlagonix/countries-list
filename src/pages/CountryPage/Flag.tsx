import Svg from "../../global/Svg";
import { Image } from "antd";
import { useContext } from "react";
import { CountryInfoContext } from ".";
import { ImageContainer, InfoBlock, StyledParagraph, SubHeader } from "./index.styled";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import displayData from "../../utils/displayData";

const antDesignPreview = {
  mask: <Svg icon="eye" fill="rgba(255,255,255,0.75)" />,
};

function Flag() {
  const { countryInfo, isLoading } = useContext(CountryInfoContext);

  const flagToDisplay = displayData(
    countryInfo?.flags?.svg,
    (flagSvgUrl) => (
      <ImageContainer>
        <Image
          height={240}
          src={flagSvgUrl}
          style={{ border: "1px solid black" }}
          preview={antDesignPreview}
          referrerPolicy="no-referrer"
        />
      </ImageContainer>
    ),
    !(
      "flags" in countryInfo &&
      Object.keys(countryInfo.flags).length !== 0 &&
      "svg" in countryInfo.flags
    ),
    <StyledParagraph>The country doesn't have a coat of arms</StyledParagraph>,
    isLoading,
    <Skeleton height={240} />
  );

  return (
    <InfoBlock>
      <SubHeader>Flag</SubHeader>
      {flagToDisplay}
    </InfoBlock>
  );
}

export default Flag;
