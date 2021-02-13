import React from 'react';
import Banner from '../../components/Banner';
import Nav from '../../components/nav';
import { Container } from '../../styles/global';
import { Content, Title, ContentInt, BoxContent, Box } from './styles';


const Home: React.FC = () => {

    return (
        <Container>
            <Nav />
            <Banner />
            <Content>
                <ContentInt>
                    <ContentInt>
                        <BoxContent>
                            <Title>
                                O CONCURSO
                            </Title>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Blanditiis quae dolor ad minus vero hic ullam, praesentium perferendis
                            repudiandae rem iure! Consectetur quibusdam architecto vitae? Accusantium
                                amet necessitatibus possimus ipsa!</p>
                        </BoxContent>
                        <BoxContent>
                            <Box>
                                <Title>
                                    EXPOSIÇÃO DE FOTOS
                            </Title>
                                <span>20 á 24/03/2017 na
                                divisórias da Ouvidoria <br />
                                (em frente ao elevador)
                                </span>
                                <Title>
                                    APRESENTAÇÃO
                            </Title>
                                <span>20/03/2017 das 16:30h <br />
                                ás 17:30h.
                                </span>
                            </Box>
                        </BoxContent>
                    </ContentInt>
                </ContentInt>
            </Content>
        </Container>
    )
}

export default Home; 
