import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

 :root {
    --nav-color: #1b546f;
    --text-color: #2d8ab7;
    --title-color: #34CB79;
    --text-second: #7a7a7a;
    --background-color: #faefde;
  }


    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    html{
        scroll-behavior: smooth;  
    }
    body, #root{
        -webkit-font-smoothing: antialiased;
        width: 100%;
        height: 100%;
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


export const Container = styled.div`
  width:100%;;
  min-height: 1600px;
  background: #fff;
  margin: 0px auto;
  background: var(--background-color);
`;