import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  
  //import google font
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
  
    *, h1,h2,h3,h4,h5,h6 {
      margin: 0;
      padding: 0;
    }

    h1,h2,h3,h4,h5,h6 {
      display: block;
    }
    
    a {
      text-decoration: none;
      color: inherit;
      font-size: 20px;
    }
    
    body {
      margin: 0;
      padding: 0;
      overflow-x: hidden;
      font-family: 'Lato', sans-serif;

      ::-webkit-scrollbar {
        display: none;
      }
    }

    ::-webkit-scrollbar {
      display: none;
    }
`;

export default GlobalStyle;