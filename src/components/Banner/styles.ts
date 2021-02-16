import styled from 'styled-components';
import BanneImge from '../../assets/images/banner.png';



export const Container = styled.div`
min-height: 780px;
background: url(${BanneImge}) no-repeat center; 
background-size: cover;
display: flex;
justify-content:center;


img{
    max-width: 450px;
    width: 100%;
    height: 250px;
    margin-top: 130px;
}
   

`


