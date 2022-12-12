import styled from "styled-components";

export const Layout = styled.main`
  width: min(${({ theme }) => theme.sizes.lg}, 100% - 8px * 2);
  padding: 72px 0 0 0;
  margin: 0 auto;
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Form = styled.div`
  display: flex;
  gap: 32px;
  width: 100%;
  flex-wrap: wrap;

  & > div:nth-child(1) {
    flex-grow: 1;
  }

  & > div:nth-child(2) {
    width: 300px;

    @media (max-width: 720px) {
      flex-grow: 1;
    }
  }
`;

export const CardList = styled.div`
  display: flex;
  gap: 37px;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: flex-start;
  padding-bottom: 32px;

  @media (max-width: 720px) {
    justify-content: center;
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
