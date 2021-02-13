import React from 'react';
import { Container } from './styles';
import { Container_about } from './styles';



const About: React.FC = ({ children }) => {

    return (
        <>
            <Container >
                <Container_about>
                    {children}
                </Container_about>
            </Container>


        </>
    )
}

export default About; 
