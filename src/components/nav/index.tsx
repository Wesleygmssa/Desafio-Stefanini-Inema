import React from 'react';
import { Nav, Container } from './styles';



const Navbar: React.FC = () => {

    return (
        <>
            <Container>
                <Nav>
                    <ul>
                        <li>
                            <a href="//#region ">INÍCIO</a>
                        </li>
                        <li>
                            <a href="//#region ">O CONCURSO</a>
                        </li>
                        <li>
                            <a href="//#region ">SOBRE</a>
                        </li>
                        <li>
                            <a href="//#region ">REGRA</a>
                        </li>
                        <li>
                            <a href="//#region ">INSCRIÇÃO</a>
                        </li>

                    </ul>
                </Nav>
            </Container>

        </>
    )
}

export default Navbar; 
