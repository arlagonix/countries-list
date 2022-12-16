import styled from "styled-components";

export const Layout = styled.main`
  width: min(${({ theme }) => theme.sizes.lg}, 100% - 8px * 2);
  padding: calc(64px + 32px) 0 0 0; // 64px is nav height
  margin: 0 auto;
  position: relative;
  min-height: calc(100vh - 64px); // 64px is footer height
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (max-width: ${({ theme }) => theme.sizes.sm}) {
    padding-top: 64px;
    gap: 16px;
  }
`;

export const Form = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 32px;
  width: 100%;

  & > div:nth-child(1) {
    grid-column: span 9;

    @media (max-width: 1024px) {
      grid-column: span 6;
    }

    @media (max-width: ${({ theme }) => theme.sizes.sm}) {
      grid-column: span 12;
    }
  }

  & > div:nth-child(2) {
    grid-column: span 3;

    @media (max-width: 1024px) {
      grid-column: span 6;
    }

    @media (max-width: ${({ theme }) => theme.sizes.sm}) {
      grid-column: span 12;
    }
  }

  @media (max-width: ${({ theme }) => theme.sizes.md}) {
    gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.sizes.sm}) {
    gap: 8px;
  }
`;

export const CardList = styled.div`
  display: grid;
  gap: 32px;
  padding-bottom: 32px;
  grid-template-columns: repeat(12, 1fr);

  & > * {
    grid-column: span 3;

    @media (max-width: 1200px) {
      grid-column: span 4;
    }

    @media (max-width: 900px) {
      grid-column: span 6;
    }

    @media (max-width: ${({ theme }) => theme.sizes.sm}) {
      grid-column: span 12;
    }
  }

  @media (max-width: ${({ theme }) => theme.sizes.md}) {
    gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.sizes.sm}) {
    gap: 8px;
  }
`;

export const NothingFoundContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  pointer-events: none;
  width: 100%;
`;

export const NothingFoundHeader = styled.h2`
  font-size: 48px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.nothingFound.header};
`;

export const NothingFoundCaption = styled.p`
  font-size: 24px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.nothingFound.caption};
`;
