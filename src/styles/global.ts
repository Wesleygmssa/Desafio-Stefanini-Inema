import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

 :root {
    --nav-color: #1b546f;
    --text-color: #2d8ab7;
    --title-color: #34CB79;
    --background-color: #1B232E;
  }


    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    body{
        -webkit-font-smoothing: antialiased;
    }
    body , input , button{
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
    }
    h1,h2,h3,h4,h5,h6, strong{
        font-weight: 500;
    }
    button{
        cursor: pointer;
    }
`;
