import { shade } from 'polished';
import styled from 'styled-components';

export const ModalInt = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 5px;

    svg{
        position: absolute;
        right: 8px;
        top: 70px;
        color: #c53030;
        cursor: pointer;
    }

`;

export const Form = styled.form`
display: flex;
flex-direction: column;
padding: 0 20px;
width: 80%;
padding: 60px 60px;
margin-top: 30px;
background: var(--nav-color);
border-radius: 5px;



input{
    padding: 18px;
    border-radius: 10px;

    & + input{
        margin-top: 20px;
    }
}

label{
    color: #fff;
    span{
        margin-left: 10px;
    }
}


button{
    width: 50%;
    margin: 20px auto 0 auto;
    background: #fff;
    color: var(--text-color);
    border-radius: 12px;
    transition: 0.2s;

    &:hover{
        background: ${shade(0.2, '#fff')}
    }

}

`;

export const Content = styled.div`
display: flex;
flex-direction: column;
background: #ffffff;
position: relative;
top: -80px;
max-width: 70%;
min-height: 900px;
margin: 0 auto;
`;

export const ContentInt = styled.div`
    max-width: 800px;
    height: 100%;
    margin: 0 auto;
    border-bottom: 1px solid #ddd;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const BoxContent = styled.div`
    padding: 25px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;

    p{

        max-width:400px;
        width: 100%;
        color: #CCC;
        padding-top: 30px;
        color: var(--text-second);

    }

     span{
        display: inline-block;
        color: #CCC;
        padding-top: 10px;
        padding-bottom: 40px;


    }

    h3{
        margin-top: 0;
    }
`;

export const Title = styled.h3`
padding: 20px 0;
color: var(--nav-color);
font-weight: 700;
color: var( --text-color);
font-size: 18px;
text-align: center;


&:nth-child(1){
    padding-top: 30px;
}

`;

export const Box = styled.div`
    padding: 20px 30px;
    width: 100%;
    margin: 0 auto;
    position: relative;
    top: -70px;
    background: var(--nav-color);

    @media (max-width:1084px) {
        top: 0px;
  }

`;
