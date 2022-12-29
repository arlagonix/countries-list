import Svg from "../../global/Svg";
import { Label, StyledSearchField, Content, EraseInput } from "./index.styled";
import { useTheme } from "styled-components";

interface SearchFieldProps {
  /** Input placeholder */
  label: string;
  /** Controlled value for the input */
  inputValue: string;
  /** Change handler that allows to control the input */
  changeHandler: any;
}

function SearchField({ label, inputValue, changeHandler }: SearchFieldProps) {
  const theme = useTheme();
  return (
    <StyledSearchField>
      <Content
        data-test="search-field"
        type="text"
        value={inputValue}
        onChange={(e) => changeHandler(e.target.value)}
      />
      <Label>{label}</Label>
      {inputValue.length !== 0 && (
        <EraseInput data-test="clear-search-field" onClick={() => changeHandler("")}>
          <Svg icon="cross" width="18" height="18" fill={theme.colors.input.icon} />
        </EraseInput>
      )}
      <Svg icon="search" width="16" height="16" fill={theme.colors.input.icon} />
    </StyledSearchField>
  );
}

export default SearchField;
