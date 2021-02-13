import React from 'react';
import { Container } from './styles';
import ImageBanner from '../../assets/images/banner.png';



const Banner: React.FC = () => {

    return (
        <>
            <Container>
                <img src={ImageBanner} alt="" />
            </Container>

        </>
    )
}

export default Banner; 
