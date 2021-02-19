import React from 'react';
import Toast from './Toast';
import { Container } from './styles';
import { ToastMessage } from '../../hooks/ToastContext';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastConatiner: React.FC<ToastContainerProps> = ({ messages }) => (

  <Container>
    {messages.map((message) => (
      <Toast key={message.id} message={message} />
    ))}

  </Container>
);

export default ToastConatiner;
