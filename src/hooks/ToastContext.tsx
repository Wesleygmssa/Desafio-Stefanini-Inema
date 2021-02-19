import React, {
  createContext, useContext, useCallback, useState,
} from 'react';
import { v4 as uuid } from 'uuid';
import ToastContainer from '../components/ToastContainer';

export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}

interface ToastContextData {
  addToast(message: Omit<ToastMessage, 'id'>): void;
  removeToast(id: string): void;
}

// 00 -  Variavel global
const ToastContext = createContext<ToastContextData>({} as ToastContextData);

// 01 -  Component de toast
const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]); // um array de mensagem

  // 02 - Metodos extitente no toast

  // funções do toast
  const addToast = useCallback(({ type, title, description }: Omit<ToastMessage, 'id'>) => {
    const id = uuid();

    const toast = {
      id,
      type,
      title,
      description,

    };

    setMessages((oldMessages) => [...oldMessages, toast]);
    // setMessages([...messages, toast]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setMessages((state) => state.filter((message) => message.id !== id));
  }, []);

  return (
    // pegando componente enviando global com todos os methodos
    <ToastContext.Provider value={{ addToast, removeToast }}>

      <ToastContainer messages={messages} />
      { children}
    </ToastContext.Provider>
  );
};

// hooks para chamar variavel global no components
function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}

export { ToastProvider, useToast };
