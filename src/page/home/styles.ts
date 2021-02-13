import styled from 'styled-components';



export const Form = styled.form`
display: flex;
flex-direction: column;
padding: 0 20px;


input{
    padding: 18px;
    border-radius: 10px;

    & + input{
        margin-top: 20px;
    }
}


button{
    width: 50%;
    margin: 20px auto 0 auto;
    background: #fff;
    color: var(--text-color);
    border-radius: 12px;
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
`
export const ContentInt = styled.div`
    min-width: 800px;
    height: 100%;
    margin: 0 auto;
    border-bottom: 1px solid #ddd;
    display: flex;
`;


export const BoxContent = styled.div`
flex: 1 1 350px;
    padding: 25px;
    display: flex;
    align-items: center;
    flex-direction: column;

    p{

        width: 400px;
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
`

export const Title = styled.h3`
color: var(--nav-color);
font-weight: 700;
color: var( --text-color);
font-size: 18px;


&:nth-child(1){
    padding-top: 30px;
}

`

export const Box = styled.div`
    padding: 20px 30px;
    width: 100%;
    margin: 0 auto;
    position: relative;
    top: -70px;
    background: var(--nav-color);
    
`;





