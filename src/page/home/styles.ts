import styled from 'styled-components';



export const Content = styled.div`
display: flex;
background: #ffffff;
position: relative;
top: -80px;
max-width: 70%;
min-height: 900px;
margin: 0 auto;
`
export const ContentInt = styled.div`
    min-width: 800px;
    height: 100%;
    margin: 0 auto;
    border-bottom: 1px solid #ddd;
    display: flex;
    flex-wrap:wrap;
`;


export const BoxContent = styled.div`
flex: 1 1 400px;
    padding: 25px;
    display: flex;
    align-items: center;
    flex-direction: column;

    p{

        width: 400px;
        color: #CCC;
        padding-top: 30px;

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
`

export const Title = styled.h3`
color: var(--nav-color);
font-weight: 700;
color: var( --text-color);


&:nth-child(1){
    padding-top: 30px;
}

`

export const Box = styled.div`
    padding: 20px 30px;
    width: 80%;
    margin: 0 auto;
    position: relative;
    top: -80px;
    background: var(--nav-color);
    
`;





