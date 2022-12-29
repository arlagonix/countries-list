import Svg from "../../global/Svg";
import OutsideClickHandler from "react-outside-click-handler";
import { useTheme } from "styled-components";
import { EraseInput } from "./index.styled";
import { CSSTransition } from "react-transition-group";
import { useState, useRef } from "react";
import type { SelectProps, IOption } from "./index.types";
import "./styles.css";
import {
  Label,
  SelectText,
  ListOption,
  SelectField,
  OptionsList,
  SelectContainer,
} from "./index.styled";

// Component code is based on:
// https://codepen.io/tcomdev/pen/WNXeqoG

const Select = ({ label, optionsList, value, changeHandler }: SelectProps) => {
  const selectRef = useRef<HTMLButtonElement>(null);
  const theme = useTheme();
  const nodeRef = useRef(null);

  const [isOptionsOpen, setIsOptionsOpen] = useState<boolean>(false);
  const toggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };
  const setSelectedThenCloseDropdown = (option: IOption) => {
    changeHandler(option);
    setIsOptionsOpen(false);
  };

  return (
    // Helps to properly track clicks outside of select
    <OutsideClickHandler
      onOutsideClick={() => {
        setIsOptionsOpen(false);
      }}
    >
      <SelectContainer isOptionsOpen={isOptionsOpen} style={{ position: "relative" }}>
        <SelectField
          data-test="select-region"
          selectValue={value}
          type="button"
          onClick={toggleOptions}
          ref={selectRef}
        >
          <SelectText data-test="selected-value" selectValue={value}>
            {value === null ? "" : value.textDisplayed}
          </SelectText>{" "}
          {value !== null && (
            <EraseInput
              data-test="clear-select-region"
              onClick={(e) => {
                changeHandler(null);
                e.stopPropagation();
                selectRef.current?.blur();
              }}
            >
              <Svg icon="cross" width="18" height="18" fill={theme.colors.input.icon} />
            </EraseInput>
          )}
          <Svg icon="chevrons" width="24" height="24" fill={theme.colors.input.icon} />
        </SelectField>

        <Label selectValue={value}>{label}</Label>

        {/* Display options list */}
        <CSSTransition
          in={isOptionsOpen}
          nodeRef={nodeRef}
          timeout={300}
          classNames="options-list"
          unmountOnExit
        >
          <OptionsList data-test="select-region-options" ref={nodeRef} tabIndex={-1}>
            {optionsList.map((option: IOption) => (
              <ListOption
                key={option.id}
                aria-selected={value === null ? false : value.id === option.id}
                tabIndex={0}
                onClick={() => {
                  selectRef.current?.focus();
                  setSelectedThenCloseDropdown(option);
                }}
              >
                {option.textDisplayed}
              </ListOption>
            ))}
          </OptionsList>
        </CSSTransition>
      </SelectContainer>
    </OutsideClickHandler>
  );
};

export default Select;
