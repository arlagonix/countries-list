import styled from "styled-components";

export const Layout = styled.main`
  width: min(${({ theme }) => theme.sizes.md}, 100% - 8px * 2);
  // 64px is nav height
  padding: calc(64px + 32px) 0 32px 0;
  margin: 0 auto;
  position: relative;
  min-height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const Header = styled.h2`
  font-size: 36px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.countryPage.header};
`;

export const Emoji = styled.span`
  font-family: "Noto Color Emoji";
  font-size: 48px;
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
  user-select: none;

  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const InfoBlock = styled.article`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const SubHeader = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.countryPage.header};
`;

export const FlagImage = styled.img``;

export const Table = styled.table`
  border: 1px solid ${({ theme }) => theme.colors.countryPage.tableBorder};
  border-radius: 4px;
  border-spacing: 0;
  background-color: ${({ theme }) => theme.colors.countryPage.tableBg};

  tr {
    padding: 16px;
    display: flex;
    align-items: center;
  }

  tr:not(:nth-last-child(1)) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.countryPage.tableBorder};
  }

  th {
    text-align: left;
    min-width: 240px;
    font-size: 16px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.countryPage.text};
  }

  td {
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.countryPage.text};
    width: 100%;
    justify-self: flex-start;
  }
`;

export const ChipContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const ImageContainer = styled.div`
  align-self: center;
`;
