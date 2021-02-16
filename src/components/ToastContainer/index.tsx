import React from 'react';
import { Container } from './styles';
import Toast from './Toast';

import { ToastMessage } from '../../hooks/ToastContext';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => (
  <Container>

    {/* A mensagem de toast só será iniciada se tiver mensagem no array */}
    {messages.map((message) => (
      <Toast key={message.id} message={message} />
    ))}

  </Container>
);

export default ToastContainer;
