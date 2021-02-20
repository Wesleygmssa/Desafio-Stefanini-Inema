import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  inputError: boolean;
}

export const Container = styled.div<ContainerProps>`
         background: #fff;
        border-radius: 10px;
        border: 4px solid #fff;
        color: #666360;
        padding: 16px;
        width: 100%;
        display: flex;
        align-items: center;

        & + div{
            margin-top: 8px;
           }
           ${(props) => props.inputError && css`
           border-color: #c53030;
        `}

        ${(props) => props.isFilled && css`
           border-color: #2d8ab7;
        `}

        ${(props) => props.isFocused && css`
           border-color: #2d8ab7;
        `}



input{
      flex:1;
      background: transparent;
      border: 0;
      color: #232129;
      &::placeholder{
            color: #666360;
           }


}
`;

export const Error = styled.div``;
