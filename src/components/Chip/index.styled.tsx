import styled from "styled-components";

export const StyledChip = styled.div`
  display: inline-block;
  padding: 4px 12px;
  border-radius: 4px;
  display: flex;
  gap: 4px;
  align-items: center;
  color: ${({ theme }) => theme.colors.chip.text};
  background-color: ${({ theme }) => theme.colors.chip.bg};
  text-decoration: none;
  transition: 0.3s;
  cursor: pointer;

  :hover {
    outline: 1px solid ${({ theme }) => theme.colors.chip.text};
  }
`;

export const StyledAnchor = styled.a`
  text-decoration: none;
`;
