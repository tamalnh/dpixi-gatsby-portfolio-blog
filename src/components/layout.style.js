import { createGlobalStyle } from 'styled-components'; 

 

const GlobalStyle = createGlobalStyle`

::selection {
    background: #333333;
    color: #ffffff;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  *:focus {
    outline: none;
  }

html{
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
}

body,html {
    margin: 0px;
}
body {
  font-size: 16px;
  line-height: 28px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Poppins', sans-serif;
  color: ${props => props.theme.TextColor};
  overflow-x: hidden !important;
  font-weight: 400;
  margin: 0;
  padding: 0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: 'Poppins', sans-serif;
    color: ${props => props.theme.PrimaryColor}; 
    margin: 0;
}

p{
    margin: 0 0 15px 0;
}

a{
    text-decoration: none;
    color: ${props => props.theme.PrimaryColor};

    &:hover{
        color: ${props => props.theme.SecondaryColor};
    }
  }
  img{
    max-width: 100%;
  } 
`


export default GlobalStyle;
