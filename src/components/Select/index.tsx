import type { SelectProps, IOption } from "./index.types";
import { useState, useRef, useEffect } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { EraseInput } from "./index.styled";
import Svg from "../../global/Svg";
import {
  Label,
  SelectText,
  ListOption,
  SelectField,
  OptionsList,
  SelectContainer,
} from "./index.styled";

import { CSSTransition } from "react-transition-group";
import "./styles.css";

// Component code is based on:
// https://codepen.io/tcomdev/pen/WNXeqoG

const Select = ({ label, optionsList, value, changeHandler }: SelectProps) => {
  const selectRef = useRef<HTMLButtonElement>(null);

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
        <SelectField selectValue={value} type="button" onClick={toggleOptions} ref={selectRef}>
          <SelectText selectValue={value}>{value === null ? "" : value.textDisplayed}</SelectText>{" "}
          {/* Show clear button only when there is some value */}
          {value !== null && (
            <EraseInput
              onClick={(e) => {
                changeHandler(null);
                e.stopPropagation();
                selectRef.current?.blur();
              }}
            >
              <Svg icon="cross" width="18" height="18" />
            </EraseInput>
          )}
          {/* Decorative icon that shows it's a select input */}
          <Svg icon="chevrons" width="24" height="24" />
        </SelectField>

        {/* Label must be placed under SelectField! Otherwise css ~ selector won't work */}
        <Label selectValue={value}>{label}</Label>

        {/* Display options list */}
        <CSSTransition
          in={isOptionsOpen}
          nodeRef={nodeRef}
          timeout={300}
          classNames="options-list"
          unmountOnExit
        >
          <OptionsList ref={nodeRef} tabIndex={-1}>
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
