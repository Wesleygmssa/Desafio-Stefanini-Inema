import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';
import { Container, Toast } from './styles';

const ToastConatiner: React.FC = () => (
  <Container>
    <Toast hasDescription>
      <FiAlertCircle size={18} />
      <div>
        <strong>Aconteu um error</strong>
        <p>Não foi possível fazer login na aplicação</p>
      </div>

      <button type="button">
        <FiXCircle size={18} />
      </button>
    </Toast>

    <Toast type="success" hasDescription={false}>
      <FiAlertCircle size={18} />
      <div>
        <strong>Aconteu um error</strong>
      </div>

      <button type="button">
        <FiXCircle size={18} />
      </button>
    </Toast>

    <Toast type="error" hasDescription>
      <FiAlertCircle size={18} />
      <div>
        <strong>Aconteu um error</strong>
        <p>Não foi possível fazer login na aplicação</p>
      </div>

      <button type="button">
        <FiXCircle size={18} />
      </button>
    </Toast>
  </Container>
);

export default ToastConatiner;
