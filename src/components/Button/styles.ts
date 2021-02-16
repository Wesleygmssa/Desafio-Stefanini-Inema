import styled from 'styled-components';

import { shade } from 'polished';

export const Container = styled.button`
    padding: 15px 30px;
    color: #fff;
    background: var(--nav-color);
    border: 0;
    position: relative;
    top: -20px;
      transition: 0.2s;

    &:hover{
        background: ${shade(0.2, '#1b546f')}
    }

    @media (max-width:1084px) {
        top: 10px;
  }
`;
