import styled from "styled-components";

export const Layout = styled.main`
  width: min(${({ theme }) => theme.sizes.md}, 100% - 8px * 2);
  padding: calc(64px + 32px) 0 32px 0; // // 64px is nav height
  margin: 0 auto;
  position: relative;
  min-height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (max-width: ${({ theme }) => theme.sizes.sm}) {
    padding-top: 64px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const Header = styled.h2`
  font-size: 36px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.countryPage.header};
  flex-grow: 1;

  @media (max-width: ${({ theme }) => theme.sizes.sm}) {
    font-size: 24px;
  }
`;

export const Emoji = styled.span`
  font-family: "Noto Color Emoji";
  font-size: 48px;

  @media (max-width: ${({ theme }) => theme.sizes.sm}) {
    font-size: 36px;
  }
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

  @media (max-width: 900px) {
    position: initial;
    translate: 0;
  }

  @media (max-width: ${({ theme }) => theme.sizes.sm}) {
    width: 36px;
    height: 36px;
    & > svg {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
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

  @media (max-width: ${({ theme }) => theme.sizes.sm}) {
    font-size: 20px;
  }
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

    @media (max-width: ${({ theme }) => theme.sizes.sm}) {
      display: flex;
      flex-direction: column;
      gap: 16px;
      align-items: flex-start;
    }
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
