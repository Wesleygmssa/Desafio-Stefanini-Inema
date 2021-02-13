import React from 'react';
import Banner from '../../components/Banner';
import Nav from '../../components/nav';
import { Container } from '../../styles/global';



const Home: React.FC = () => {

    return (
        <Container>
            <Nav />
            <Banner />
            <h2>Teste</h2>s
        </Container>
    )
}

export default Home; 
