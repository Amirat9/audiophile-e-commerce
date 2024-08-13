'use client';
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface ModalContextProps {
  isModalOpen: boolean;
  modalTrigger: () => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalTrigger = () => setIsModalOpen(!isModalOpen);

  return (
    <ModalContext.Provider value={{ isModalOpen, modalTrigger }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = (): ModalContextProps => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
