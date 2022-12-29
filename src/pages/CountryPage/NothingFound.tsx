import {
  NothingFoundCaption,
  NothingFoundContainer,
  NothingFoundHeader,
} from "../CountriesList/index.styled";

function NothingFound() {
  return (
    <NothingFoundContainer data-test="country-not-found">
      <NothingFoundHeader>Unable to load country data</NothingFoundHeader>
      <NothingFoundCaption>Try to change the country code in URL</NothingFoundCaption>
      <NothingFoundCaption>Also there might be problems with your Internet</NothingFoundCaption>
    </NothingFoundContainer>
  );
}

export default NothingFound;
