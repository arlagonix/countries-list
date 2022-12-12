import styled from "styled-components";

export const Layout = styled.main`
  width: min(${({ theme }) => theme.sizes.md}, 100% - 8px * 2);
  padding: 72px 0 0 0;
  margin: 0 auto;
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  position: relative;
`;

export const Header = styled.h2`
  font-size: 36px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.countryPage.header};
`;

export const Emoji = styled.span`
  font-family: "Noto Color Emoji";
  font-size: 36px;
`;

export const GoBack = styled.div`
  position: absolute;
  left: calc(-16px - 48px - 4px);
  top: 50%;
  translate: 0 -50%;
  border-radius: 50%;
  cursor: pointer;
  padding: 4px;
  transition: background-color 0.3s;

  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
