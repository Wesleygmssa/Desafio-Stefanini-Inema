import styled from 'styled-components';


export const Container = styled.div`
   
    background: var(--nav-color);

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
            }

            & + li {
                margin-left: 20px;
            }
            #id_concurso{

                transition: linear 2s forwards;
            }
        }
    }
`;