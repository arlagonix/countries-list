import Svg from "../../global/Svg";
import useEventListener from "../../hooks/useEventListener";
import { useState } from "react";
import { useTheme } from "styled-components";
import { useNavigate } from "react-router-dom";
import { NavContainer, Nav, DarkMode, Header, DarkModeText } from "./index.styled";

interface NavigationProps {
  /** Function that toggles dark mode on and off */
  themeToggleHandler: () => void;
  /** True if it's dark mode */
  isDarkMode: boolean;
}

function Navigation({ themeToggleHandler, isDarkMode }: NavigationProps) {
  const theme = useTheme();
  const [isScrolledY, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const currentModeText = isDarkMode ? "Light" : "Dark";
  const currentModeIcon = isDarkMode ? "light" : "moonStroked";

  useEventListener("scroll", () => {
    setIsScrolled(window.scrollY > 10);
  });

  return (
    <NavContainer displayShadow={isScrolledY}>
      <Nav>
        <Header onClick={() => navigate("/")}>Where is the world?</Header>
        <DarkMode data-test="theme-toggler" onClick={themeToggleHandler}>
          <Svg icon={currentModeIcon} width="24" height="24" fill={theme.colors.nav.text} />
          <DarkModeText>{currentModeText} Mode</DarkModeText>
        </DarkMode>
      </Nav>
    </NavContainer>
  );
}

export default Navigation;
