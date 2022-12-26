import Svg from "../../global/Svg";
import { useRef } from "react";
import { useTheme } from "styled-components";
import { useNavigate } from "react-router-dom";
import { digitGroups } from "../../utils/digitGroups";
import {
  HR,
  Header,
  Property,
  StyledImage,
  PropertyName,
  PropertyValue,
  HeaderContainer,
  StyledCountryCard,
  PropertiesContainer,
} from "./index.styled";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface CountryCardProps {
  /** Emoji of the country flag */
  flagEmoji: string;
  /** Common name of the country */
  countryName: string;
  /** Number of people living in the country */
  population: number;
  /** Region in which the country is located in */
  region: string;
  /** Capital of the country */
  capital: string;
  /** Official languages of the country */
  languages: string;
  /** Country code, used for routing */
  countryCode: string;
  /** SVG Flag URL */
  flagURL: string;
}

function CountryCard({
  flagEmoji,
  countryName,
  population,
  region,
  capital,
  languages,
  countryCode,
  flagURL,
}: CountryCardProps) {
  const theme = useTheme();
  const iconColor = theme.colors.countryCard.icon;
  const nodeRef = useRef(null);
  const navigate = useNavigate();
  return (
    <StyledCountryCard
      ref={nodeRef}
      onClick={() => {
        navigate(`/${countryCode}`);
        window.scroll(0, 0);
      }}
    >
      <StyledImage
        src={flagURL}
        referrerPolicy="no-referrer"
        alt={`${countryName} flag`}
        draggable="false"
      />
      <HR />
      <HeaderContainer>
        <Header>{countryName}</Header>
      </HeaderContainer>
      <HR />
      <PropertiesContainer>
        <Property>
          <Svg icon="people" width="24" height="24" fill={iconColor} />
          <PropertyName>Population</PropertyName>
          <PropertyValue>{digitGroups(population)}</PropertyValue>
        </Property>
        <Property>
          <Svg icon="map" width="24" height="24" fill={iconColor} />
          <PropertyName>Region</PropertyName>
          <PropertyValue>{region}</PropertyValue>
        </Property>
        <Property>
          <Svg icon="building" width="24" height="24" fill={iconColor} />
          <PropertyName>Capital</PropertyName>
          <PropertyValue>{capital}</PropertyValue>
        </Property>
        <Property>
          <Svg icon="languages" width="24" height="24" fill={iconColor} />
          <PropertyName>Languages</PropertyName>
          <PropertyValue>{languages}</PropertyValue>
        </Property>
      </PropertiesContainer>
    </StyledCountryCard>
  );
}

export function SkeletonCountryCard() {
  const theme = useTheme();
  const iconColor = theme.colors.countryCard.icon;
  return (
    <StyledCountryCard>
      <Skeleton width="100%" height="180px" borderRadius="0" />
      <HR />
      <HeaderContainer>
        <Header>
          <Skeleton />
        </Header>
      </HeaderContainer>
      <HR />
      <PropertiesContainer>
        <Property>
          <Svg icon="people" width="24" height="24" fill={iconColor} />
          <PropertyName>Population</PropertyName>
          <PropertyValue>
            <Skeleton width={100} />
          </PropertyValue>
        </Property>
        <Property>
          <Svg icon="map" width="24" height="24" fill={iconColor} />
          <PropertyName>Region</PropertyName>
          <PropertyValue>
            <Skeleton width={60} />
          </PropertyValue>
        </Property>
        <Property>
          <Svg icon="building" width="24" height="24" fill={iconColor} />
          <PropertyName>Capital</PropertyName>
          <PropertyValue>
            <Skeleton width={80} />
          </PropertyValue>
        </Property>
        <Property>
          <Svg icon="languages" width="24" height="24" fill={iconColor} />
          <PropertyName>Languages</PropertyName>
          <PropertyValue>
            <Skeleton width={120} />
          </PropertyValue>
        </Property>
      </PropertiesContainer>
    </StyledCountryCard>
  );
}

export default CountryCard;
