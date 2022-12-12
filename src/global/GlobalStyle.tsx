import { createGlobalStyle } from "styled-components";
// import type { ThemeType } from "./Themes";

const GlobalStyle = createGlobalStyle`

  // style reset from https://www.youtube.com/shorts/2lyDv0wOQuQ
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Nunito Sans', sans-serif;
  }

  img, picture, svg, video {
    display: block;
    max-width: 100%;
  }

  body {
    /* width */
    ::-webkit-scrollbar {
      width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #EDECE9;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #D3D1CB;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #AEACA6;
    }
  }
`;

export default GlobalStyle;
