import styled from "styled-components";

export const FooterContainer = styled.div`
  height: 64px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.footer.bg};
  box-shadow: ${({ theme }) => theme.shadows.standard};
`;

export const StyledFooter = styled.footer`
  color: ${({ theme }) => theme.colors.footer.text};
  font-weight: 300;
  font-size: 16px;
`;
