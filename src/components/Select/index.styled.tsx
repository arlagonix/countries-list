import type { IOption } from "./index.types";

import styled from "styled-components";

interface SelectContainerProps {
  isOptionsOpen: boolean;
}

export const SelectContainer = styled.div<SelectContainerProps>`
  position: relative;

  // Move label up when select options are visible
  ${(props) => {
    if (props.isOptionsOpen)
      return `
      & > p {
        color: ${props.theme.colors.input.focus};
        translate: 0 0;
        top: 6px;
      }
    `;
  }}
`;

interface SelectFieldrProps {
  selectValue: IOption | null;
}

export const SelectField = styled.button<SelectFieldrProps>`
  border: 1px solid ${({ theme }) => theme.colors.input.border};
  background: transparent;
  border-radius: 8px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  height: 64px;
  font-size: 16px;
  width: 100%;
  text-align: left;
  gap: 4px;
  transition: 0.3s;

  &:focus {
    border-color: ${({ theme }) => theme.colors.input.focus};
  }

  &:hover {
    cursor: pointer;
  }

  ${(props) => {
    if (props.selectValue !== null)
      return `
        border-color: ${props.theme.colors.input.focus}};
    `;
  }}
`;

interface LabelProps {
  selectValue: IOption | null;
}

export const Label = styled.p<LabelProps>`
  position: absolute;
  top: 50%;
  translate: 0 -50%;
  left: 16px;
  transition: 0.3s;
  pointer-events: none;
  color: ${({ theme }) => theme.colors.input.placeholder};

  ${(props) => {
    if (props.selectValue !== null)
      return `
        color: ${props.theme.colors.input.focus}};
        translate: 0 0;
        top: 6px;
    `;
  }}
`;

interface SelectTextProps {
  selectValue: IOption | null;
}

export const SelectText = styled.p<SelectTextProps>`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  user-select: none;

  ${(props) => {
    if (props.selectValue !== null)
      return `
        border-color: ${props.theme.colors.input.focus}};
        padding-top: 18px;
    `;
  }}
`;

export const OptionsList = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
  list-style: none;
  position: absolute;
  z-index: 10;
  width: 100%;
  max-height: calc(55px * 5 - 5px);
  overflow: auto;
  border-radius: 8px;
  box-shadow: 0 0 4px rgb(0 0 0 / 0.25);
  background: white;
  margin-top: 8px;

  // https://www.w3schools.com/howto/howto_css_custom_scrollbar.asp
  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.input.focus};
    border-radius: 4px;
  }
`;

export const ListOption = styled.li`
  padding: 8px 24px;
  min-height: 48px;
  display: flex;
  align-items: center;
  cursor: pointer;

  :active,
  :focus,
  :hover,
  [aria-selected="true"] {
    background: ${({ theme }) => theme.colors.input.focus};
    color: ${({ theme }) => theme.colors.input.bg};
  }
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
