import { useRef } from "react";
import Svg from "../../global/Svg";
import {
  HR,
  Emoji,
  Header,
  Property,
  PropertyName,
  PropertyValue,
  HeaderContainer,
  StyledCountryCard,
  PropertiesContainer,
} from "./index.styled";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useTheme } from "styled-components";
import "./styles.css";

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
}

function digitGroups(num: number): string {
  const strNum = num.toString();
  let res = strNum.match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g);
  if (res !== null) return res.join(" ");
  return "0";
}

function CountryCard({
  flagEmoji,
  countryName,
  population,
  region,
  capital,
  languages,
}: CountryCardProps) {
  const theme = useTheme();
  const iconColor = theme.colors.countryCard.icon;
  const nodeRef = useRef(null);
  return (
    <StyledCountryCard ref={nodeRef}>
      <HeaderContainer>
        <Header>{countryName}</Header>
        <Emoji>{flagEmoji}</Emoji>
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
      <HeaderContainer>
        <Emoji>
          <Skeleton width={36} />
        </Emoji>
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
