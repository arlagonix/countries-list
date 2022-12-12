import { type ThemeType } from "./global/Themes";
import "styled-components";

// Helps to use intellisense for theme
declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
