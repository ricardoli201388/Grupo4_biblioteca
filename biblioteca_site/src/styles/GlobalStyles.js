import { createGlobalStyle } from "styled-components";
import poppins from "../fonts/poppins.txt"

export default createGlobalStyle`
  
  @font-face {
    font-family: 'poppins';
    src: url(${poppins}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 30px;
    background: white;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  html {
    scroll-behavior: smooth;
    @media (prefers-reduced-motion: reduce) {
      scroll-behavior: auto;
    }
  }
`;