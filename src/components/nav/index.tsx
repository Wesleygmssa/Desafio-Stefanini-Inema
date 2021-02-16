import React from 'react';
import { Link } from 'react-scroll';
import { Nav, Container } from './styles';

const Navbar: React.FC = () => (
  <Container>
    <Nav>
      <ul>
        <li>
          <Link to="inital" smooth duration={1000}>INÍCIO</Link>
        </li>
        <li>
          <Link to="id_concurso" smooth duration={1000}>O CONCURSO</Link>
        </li>
        <li>
          <Link to="about" smooth duration={1000}>SOBRE</Link>
        </li>
        <li>
          <Link to="regra" smooth duration={1000}>REGRA</Link>
        </li>
        <li>
          <Link to="inscricao" smooth duration={1000}>INSCRIÇÃO</Link>
        </li>

      </ul>
    </Nav>
  </Container>
);

export default Navbar;
