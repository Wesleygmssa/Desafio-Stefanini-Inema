import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
        background: #232119;
        border-radius: 10px;
        border: 2px solid #232129;
        color: #666360;
        padding: 16px;
        width: 100%;
        display: flex;
        align-items: center;
        & + div{
            margin-top: 8px;
           }
           ${(props) => props.isFilled && css`
           color: #ff9000;
        `}
        ${(props) => props.isErrored && css`
           border-color:  #c53030;
        `}

        ${(props) => props.isFocused && css`
           color: #ff9000;
           border-color:  #ff9000;
        `}

         `;
