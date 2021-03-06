import { createGlobalStyle } from 'styled-components';

export const theme = {
  green: '#2a9d8f',
  yellow: '#fff8de',
  blue: '#fafaff',
  red: '#e76f51',
  white: '#FFFFFF',
  orange: '#f4a261',
  black: '#170f33',
  lightPurple: '#d4dbff',
  darkPurple: '#7d90f5'
};

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:400,799');
  * {
    box-sizing: border-box;
  }
  html {
    position: relative;
  }
  body {
    height: 100vh;
    width: 100vw;
    padding: 0;
    margin: 0;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: 100;
    font-size: 1em;
  }

  @media (max-width: 768px) {
    font-size: 0.5em;
  }

  a {
    text-decoration: none;
  }
  ul {
    margin: 0 auto;
    list-style-type: none;
  }
`;
