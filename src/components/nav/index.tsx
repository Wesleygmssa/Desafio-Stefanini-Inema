import React from 'react';
import { Nav, Container } from './styles';
import { Link } from 'react-scroll';



const Navbar: React.FC = () => {

    return (
        <Container>
            <Nav>
                <ul>
                    <li>
                        <Link to="inital" smooth={true} duration={1000}>INÍCIO</Link>
                    </li>
                    <li>
                        <Link to="id_concurso" smooth={true} duration={1000}>O CONCURSO</Link>
                    </li>
                    <li>
                        <Link to="about" smooth={true} duration={1000}>SOBRE</Link>
                    </li>
                    <li>
                        <Link to="regra" smooth={true} duration={1000}>REGRA</Link>
                    </li>
                    <li>
                        <Link to="inscricao" smooth={true} duration={1000}>INSCRIÇÃO</Link>
                    </li>

                </ul>
            </Nav>
        </Container>
    )
}

export default Navbar; 
