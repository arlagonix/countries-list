import styled from "styled-components";

export const StyledCountryCard = styled.article`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.countryCard.bg};
  border: 1px solid ${({ theme }) => theme.colors.countryCard.border};
  transition: 0.3s;
  cursor: pointer;
  overflow: hidden;

  :hover {
    /* scale: 1.025; */
    box-shadow: ${({ theme }) => theme.shadows.standard};

    h2 {
      color: ${({ theme }) => theme.colors.countryCard.hover};
    }
  }
`;

export const StyledImage = styled.img`
  display: block;
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px;
  cursor: pointer;
  transition: 0.3s;
`;

export const Header = styled.h2`
  color: ${({ theme }) => theme.colors.countryCard.text};
  font-size: 24px;
  font-weight: 700;
  line-height: 100%;
  width: 100%;

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const Emoji = styled.span`
  font-family: "Noto Color Emoji";
  font-size: 36px;
  line-height: 100%;
`;

export const HR = styled.hr`
  background-color: ${({ theme }) => theme.colors.countryCard.border};
  height: 1px;
  border: none;
`;

export const PropertiesContainer = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Property = styled.p`
  display: flex;
  gap: 16px;

  & svg {
    flex-shrink: 0;
  }
`;

export const PropertyName = styled.span`
  flex: 1;
  color: ${({ theme }) => theme.colors.countryCard.propertyName};
  font-size: 16px;
  font-weight: 600;
`;

export const PropertyValue = styled.span`
  color: ${({ theme }) => theme.colors.countryCard.text};
  font-size: 16px;
  font-weight: 700;
  text-align: right;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
