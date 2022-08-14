import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    
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

      ::-webkit-scrollbar {
        display: none;
      }
    }

    ::-webkit-scrollbar {
      display: none;
    }
`;

export default GlobalStyle;