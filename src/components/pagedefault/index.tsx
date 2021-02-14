import React from 'react';
import Banner from '../Banner';
import Footer from '../Footer';
import { Nav } from '../nav/styles';
import { Container } from './styels';


const PageDefault: React.FC = ({ children }) => {

    return (
        <>
            <Container>
                <Nav />
                <Banner />
                {children}
                <Footer />
            </Container>

        </>
    )
}

export default PageDefault; 
