import styled from "styled-components";

export const NavContainer = styled.div<any>`
  height: 64px;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.nav.bg};
  transition: 0.3s;

  ${(props) => {
    if (props.displayShadow)
      return `
      box-shadow: ${props.theme.shadows.standard};
    `;
  }}
`;

export const Nav = styled.nav`
  max-width: ${({ theme }) => theme.sizes.lg};
  width: min(${({ theme }) => theme.sizes.lg}, 100% - 8px * 2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
`;

export const Header = styled.h1`
  color: ${(props) => props.theme.colors.nav.text};
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;

  :hover {
    color: ${(props) => props.theme.colors.nav.hover};
  }
`;

export const DarkMode = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  :hover {
    color: ${(props) => props.theme.colors.nav.hover};
  }
`;

export const DarkModeText = styled.span`
  color: ${(props) => props.theme.colors.nav.text};
  font-size: 16px;
  font-weight: 700;

  @media (max-width: 400px) {
    display: none;
  }
`;
