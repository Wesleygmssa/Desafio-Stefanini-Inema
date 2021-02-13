import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Banner from '../../components/Banner';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import Modal from '../../components/Modal';
import Nav from '../../components/nav';
import { Container } from '../../styles/global';
import { Content, Title, ContentInt, BoxContent, Box, Form } from './styles';





//animação
const apperFromCenter = keyframes`
from{
  opacity: 0;
  transform: translateX(50px);
}
to{
  opacity: 1;
  transform: translateX(0px);
}
`;

export const AnimationContainer = styled.div`
position: absolute;
top: 50%;
width: 500px;
min-height: 500px;
background: var(--nav-color);
 display: flex;  
 justify-content: center;
 flex-direction: column;
 padding: 10px 20px;
 animation: ${apperFromCenter} 1s; //executando animação
 -webkit-box-shadow: -1px 6px 15px 2px rgba(0,0,0,0.75);
 -moz-box-shadow: -1px 6px 15px 2px rgba(0,0,0,0.75);
  box-shadow: -1px 6px 15px 2px rgba(0,0,0,0.75);
;
`;

const ConteudoUm = () => {
    return <div></div>;
}
const ConteudoDois = () => {
    return (
        <AnimationContainer>
            <Form action="">
                <input type="text" placeholder="Nome do colaborador" />
                <input type="text" placeholder="Nome da foto" />
                <input type="text" placeholder="Local da foto" />
                <input type="date" placeholder="Data de registro" />
                <input type="file" placeholder="Data de registro" />
                <Button type="submit">Enviar</Button>
            </Form>
        </AnimationContainer>
    )
}


const Home: React.FC = () => {

    const [togleConteudos, setTogleConteudos] = useState(false);

    const handleTogle = () => {
        // setTogleConteudos(prev => !prev);
        setTogleConteudos(!togleConteudos);
    }


    return (
        <>
            <Modal />
            <Container>
                <Nav />
                <Banner />
                <Content>
                    <ContentInt>
                        <BoxContent>
                            <Title>
                                O CONCURSO
                            </Title>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Blanditiis quae dolor ad minus vero hic ullam, praesentium perferendis
                            repudiandae rem iure! Consectetur quibusdam architecto vitae? Accusantium
                            amet necessitatibus possimus ipsa!
                                </p>
                        </BoxContent>
                        <BoxContent>
                            <Box>
                                <Title> EXPOSIÇÃO DE FOTOS</Title>
                                <span>20 á 24/03/2017 na <br />
                                divisórias da Ouvidoria <br />
                                (em frente ao elevador)
                                </span>
                                <Title> APRESENTAÇÃO </Title>
                                <span>20/03/2017 das 16:30h <br />
                                ás 17:30h.
                                </span>
                            </Box>
                            <Button onClick={handleTogle}>FAÇA SUA INSCRIÇÃO</Button>
                            {togleConteudos ? <ConteudoDois /> : <ConteudoUm />}
                        </BoxContent>
                    </ContentInt>
                </Content>

            </Container>
            <Footer />
        </>
    )
}

export default Home; 
