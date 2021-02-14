import styled from 'styled-components';


export const Container = styled.div`
   
    background: var(--nav-color);
    position: fixed;
    width: 100%;
    z-index: 10;

`


export const Nav = styled.nav`
    max-width: 80%;
    margin: 0 auto;
    display: flex;
    height: 10vh;
    align-items: center;
    
 

    ul{
        display: flex;
        justify-content: flex-start;
        
        

        li{
            list-style: none;
            a{
                text-decoration: none;
            color: var( --text-color);
            cursor: pointer;
            }

            & + li {
                margin-left: 20px;
            }
           
        }
    }
`;