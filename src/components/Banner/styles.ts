import styled from 'styled-components';
import BanneImge from '../../assets/images/banner.png';



export const Container = styled.div`
height: 680px;
background: url(${BanneImge}) no-repeat center; 
background-size: cover;
display: flex;
justify-content:center;


img{
    max-width: 450px;
    height: 250px;
    margin-top: 100px;
}
   

`


