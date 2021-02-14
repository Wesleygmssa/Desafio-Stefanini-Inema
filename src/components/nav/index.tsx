import React from 'react';
import { Nav, Container } from './styles';



const Navbar: React.FC = () => {

    return (
        <>
            <Container>
                <Nav>
                    <ul>
                        <li>
                            <a href="/">INÍCIO</a>
                        </li>
                        <li>
                            <a href="#id_concurso">O CONCURSO</a>
                        </li>
                        <li>
                            <a href="#about">SOBRE</a>
                        </li>
                        <li>
                            <a href="#regra">REGRA</a>
                        </li>
                        <li>
                            <a href="#inscricao">INSCRIÇÃO</a>
                        </li>

                    </ul>
                </Nav>
            </Container>

        </>
    )
}

export default Navbar; 
