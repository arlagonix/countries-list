import Svg from "../../global/Svg";
import { IconTypes } from "../../global/Svg";
import { useTheme } from "styled-components";
import { StyledChip, StyledAnchor } from "./index.styled";

interface ChipProps {
  /** Text displayed inside of a chip */
  text: string;
  /** Icon displayed right from the text */
  iconType?: IconTypes;
  /** Link to external source (href for the anchor tag)  */
  href?: string;
  /** Function that handles clicks */
  clickHandler?: () => void;
}

function Chip({ text, iconType, href, clickHandler }: ChipProps) {
  const theme = useTheme();
  const chipContent = (
    <StyledChip data-test="chip" onClick={clickHandler}>
      <p>{text}</p>
      {iconType !== undefined && (
        <Svg icon={iconType} width="16" height="16" fill={theme.colors.chip.text} />
      )}
    </StyledChip>
  );
  return (
    <>
      {href !== undefined ? (
        <StyledAnchor href={href} target="blank">
          {chipContent}
        </StyledAnchor>
      ) : (
        <>{chipContent}</>
      )}
    </>
  );
}

export default Chip;
