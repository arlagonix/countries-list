import Svg from "../../global/Svg";
import { Label, StyledSearchField, Content, EraseInput } from "./index.styled";
import { useTheme } from "styled-components";

interface SearchFieldProps {
  /** Input placeholder */
  label: string;
  inputValue: string;
  changeHandler: any;
}

function SearchField({ label, inputValue, changeHandler }: SearchFieldProps) {
  const theme = useTheme();
  return (
    <StyledSearchField>
      <Content type="text" value={inputValue} onChange={(e) => changeHandler(e.target.value)} />
      <Label>{label}</Label>
      {inputValue.length !== 0 && (
        <EraseInput onClick={() => changeHandler("")}>
          <Svg icon="cross" width="18" height="18" fill={theme.colors.input.icon} />
        </EraseInput>
      )}
      {/* <Svg icon="search" width="14" height="14" /> */}
    </StyledSearchField>
  );
}

export default SearchField;
