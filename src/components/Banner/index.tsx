import React from 'react';
import { Container } from './styles';
import LogoImg from '../../assets/images/logo.png';

const Banner: React.FC = () => (
  <Container>
    <img src={LogoImg} alt="" />
  </Container>
);

export default Banner;
