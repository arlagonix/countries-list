import styled from "styled-components";

export const StyledSearchField = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  height: 64px;
  border: 1px solid ${({ theme }) => theme.colors.input.border};
  background-color: ${({ theme }) => theme.colors.input.bg};
  border-radius: 8px;
  padding-right: 16px;

  input:focus ~ p,
  input:not([value=""]) ~ p {
    color: ${({ theme }) => theme.colors.input.focus};
    translate: 0 0;
    top: 6px;
  }

  input:focus,
  input:not([value=""]) {
    padding-top: 20px;
  }

  :has(input:focus),
  :has(input:not([value=""])) {
    border-color: ${({ theme }) => theme.colors.input.focus};
  }
`;

export const Label = styled.p`
  position: absolute;
  top: 50%;
  translate: 0 -50%;
  left: 16px;
  color: ${({ theme }) => theme.colors.input.placeholder};
  font-size: 16px;
  pointer-events: none;
  transition: 0.3s;
`;

export const Content = styled.input`
  flex-grow: 1;
  align-self: stretch;
  border: none;
  outline: none;
  background: transparent;
  padding-left: 16px;
  transition: 0.3s;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.input.text};
`;

export const EraseInput = styled.div`
  cursor: pointer;
  padding: 8px;
  transition: 0.3s;
  border-radius: 50%;

  :hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;
