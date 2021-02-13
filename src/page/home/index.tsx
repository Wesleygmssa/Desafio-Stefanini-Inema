import { FormHandles } from '@unform/core';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Modal from 'react-modal';
import styled, { keyframes } from 'styled-components';
import About from '../../components/About';
import Banner from '../../components/Banner';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
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
top: 19%;
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



const Home: React.FC = () => {


    const [nome, setNome] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);


    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        console.log(nome)
    }, [nome])


    const ConteudoUm = () => {
        return <div></div>;
    }

    const ConteudoDois = useCallback(() => {
        return (
            <AnimationContainer>
                <Form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="nome"
                        placeholder="Nome do colaborador"
                        value={nome}
                        onChange={(e) => { setNome(e.target.value) }}
                    />
                    <input type="text" name="nome_foto" placeholder="Nome da foto" />
                    <input type="text" name="local_foto" placeholder="Local da foto" />
                    <input type="date" name="data_foto" placeholder="Data de registro" />
                    <input type="file" name="img_base64" placeholder="Data de registro" />
                    <Button type="submit">Enviar</Button>
                </Form>
            </AnimationContainer>
        )
    }, [handleSubmit, nome])

    const [togleConteudos, setTogleConteudos] = useState(false);

    const handleTogle = useCallback(() => {
        // setTogleConteudos(prev => !prev);
        setTogleConteudos(!togleConteudos);
    }, [])

    return (
        <>
            <Container>
                <Nav />
                <Banner />
                <Content >
                    <ContentInt id="id_concurso">
                        <BoxContent>
                            <Title >
                                O CONCURSO
                            </Title>
                            <p>Concurso de fotografia para todos os técnicos do Inema para exposição de fotos que retratem a temática água
                            (os desafios e as belezas encontradas em campo) pelos colaboradores.
                            Além de uma apresentação cultural com um artista de rua (poesia, musica, cordel) que aborde a temática água.
                         </p>
                        </BoxContent>
                        <BoxContent>
                            <Box >
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
                            <Button onClick={() => { setModalIsOpen(true) }}>FAÇA SUA INSCRIÇÃO</Button>
                            <Modal isOpen={modalIsOpen}>
                                <h1>Teste</h1>
                                <button onClick={() => { setModalIsOpen(false) }}>Frchar</button>
                            </Modal>
                        </BoxContent>
                    </ContentInt>
                    <About >

                        <h1>SOBRE</h1>
                        <p>
                            Objetivos</p>

                        <p>Promover a seleção de 100 fotografias produzidas por colaboradores do Inema em comemoração ao dia da água,
                        que será elaborado um mural de fotos denominado de “Varal das Águas”.</p>

                        <p>Dos participante</p>

                        <p>Poderão participar do Concurso Fotográfico 2017: Todos os colaboradores do Instituto do Meio Ambiente e Recursos Hídricos -
                        INEMA e Secretaria do Meio Ambiente -SEMA.</p>

                        <p>Das especificações das fotografias participantes</p>

                        <p>As fotografias devem abordar somente o tema OS DESAFIOS E AS BELEZAS RETRATADAS EM CAMPO REFERENTE À SITUAÇÃO HIDRICA,
                        devendo ser obrigatoriamente a foto ser tirada em inspeção em campo a serviço do Inema.</p>

                        <p>Premiação final do concurso</p>

                        <p>As 05 (cinco) primeiras fotografia que for mais votada nas redes sociais (Facebook e Instagram) do Inema, receberá como prêmio.

                        </p>
                    </About>
                    <About>

                        <h1>REGRAS</h1>

                        <p> Todas as fotos que retrate da temática água (tais como situação de secas ou excedentes hídricos,
                    as belezas e os desafios de se trabalhar com os recursos hídricos etc.) serão bem vindas.</p>
                        <p> • As fotos devem ser originais e sem alterações.</p>
                        <p>• As fotos devem expor os ambientes visitados em inspeções técnicas realizadas durante inspeções pelo INEMA.</p>
                        <p>• Fotografias que incluam pessoas serão desclassificadas.</p>
                        <p> • As fotos devem ser enviadas com um formulário de inscrição preenchido.</p>
                        <p>• As fotografias do concurso se tornarão publicas.</p>
                        <p>• O fotógrafo da foto que receber mais votos ganhará um prêmio simbólico.</p>
                        <p>• Cada pessoa só poderá cadastrar uma única foto.</p>
                        <p>• A votação será por meio das redes sociais do INEMA.</p>
                        <p> • As vagas serão limitadas apenas 50.</p>

                        <p>A foto vencedora irá ganhar um kit de brinde (Agenda, caneta, livro).</p>
                    </About>

                </Content>
            </Container>
            <Footer />
        </>
    )
}

export default Home; 
