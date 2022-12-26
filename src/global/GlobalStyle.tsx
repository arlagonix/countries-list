import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  // style reset from https://www.youtube.com/shorts/2lyDv0wOQuQ
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Nunito Sans', sans-serif;
  }

  // Can't use it because Ant design Image component messes up if img has display: block
  /* img, picture, svg, video {
    display: block;
    max-width: 100%;
  } */

  // https://stackoverflow.com/questions/1417934/how-to-prevent-scrollbar-from-repositioning-web-page
  html {
    overflow-x: hidden;
    margin-right: calc(-1 * (100vw - 100%));
  }

  body {
    background-color: ${({ theme }) => theme.colors.pageBg};
    transition: .3s;
  }
`;

export default GlobalStyle;
