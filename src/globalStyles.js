import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @font-face{
        font-family: "Poppins";
        src: url("https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap");
    }

  body {
    margin: 0;
    padding: 0;
    font-family: "Poppins", Helvetica, Sans-Serif;
  }
  html, body{
      font-family: Poppins;
  }
`;

export const theme = {
    colors: {
        primary: 'hsl(180, 66%, 49%)',
        primary2: 'hsl(257, 27%, 26%)',
        secondary: 'hsl(0, 87%, 67%)',
        grayBg: 'hsl(0, 0%, 94%)',
        gray: 'hsl(0, 0%, 75%)',
        darkGray: 'hsl(257, 7%, 63%)',
        darkBlue: 'hsl(255, 11%, 22%)',
        darkViolet: 'hsl(260, 8%, 14%)'
    },
    fonts: {
        size: 18,
        family: 'Poppins',
        bold: 500,
        darkBold: 700
    }
}

export default GlobalStyle;