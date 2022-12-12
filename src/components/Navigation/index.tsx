import Svg from "../../global/Svg";
import { NavContainer, Nav, DarkMode, Header, DarkModeText } from "./index.styled";
import useEventListener from "../../hooks/useEventListener";
import { useState } from "react";

function Navigation() {
  const [isScrolledY, setIsScrolled] = useState(false);

  useEventListener("scroll", () => {
    setIsScrolled(window.scrollY > 10);
  });

  return (
    <NavContainer displayShadow={isScrolledY}>
      <Nav>
        <Header>Where is the world?</Header>
        <DarkMode>
          <Svg icon="moonStroked" width="24" height="24" />
          <DarkModeText>Dark Mode</DarkModeText>
        </DarkMode>
      </Nav>
    </NavContainer>
  );
}

export default Navigation;
