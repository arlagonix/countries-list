import Svg from "../../global/Svg";
import useEventListener from "../../hooks/useEventListener";
import { useState } from "react";
import { useTheme } from "styled-components";
import { useNavigate } from "react-router-dom";
import { NavContainer, Nav, DarkMode, Header, DarkModeText } from "./index.styled";

interface NavigationProps {
  /** Function that toggles dark mode on and off */
  themeToggleHandler: () => void;
}

function Navigation({ themeToggleHandler }: NavigationProps) {
  const theme = useTheme();
  const [isScrolledY, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEventListener("scroll", () => {
    setIsScrolled(window.scrollY > 10);
  });

  return (
    <NavContainer displayShadow={isScrolledY}>
      <Nav>
        <Header onClick={() => navigate("/")}>Where is the world?</Header>
        <DarkMode onClick={themeToggleHandler}>
          <Svg icon="moonStroked" width="24" height="24" fill={theme.colors.nav.text} />
          <DarkModeText>Dark Mode</DarkModeText>
        </DarkMode>
      </Nav>
    </NavContainer>
  );
}

export default Navigation;
