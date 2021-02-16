import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`

    background: var(--nav-color);
    position: fixed;
    width: 100%;
    z-index: 10;

`;

export const Nav = styled.nav`
    max-width: 80%;
    width: 100%;
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
                width: 100%;
                text-decoration: none;
            color: var( --text-color);
            cursor: pointer;
                transition: 0.2s;
            &:hover{
            color: ${shade(0.3, '#1b546f')}
                 }
            }

            & + li {

                 margin-left: 20px;
                }

        }
    }
`;
