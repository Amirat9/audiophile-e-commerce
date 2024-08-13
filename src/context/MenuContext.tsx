'use client';
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface MenuContextProps {
  isMenuOpen: boolean;
  menuTrigger: () => void;
}

const MenuContext = createContext<MenuContextProps | undefined>(undefined);

export const MenuProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuTrigger = () => setIsMenuOpen(!isMenuOpen);

  return (
    <MenuContext.Provider value={{ isMenuOpen, menuTrigger }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = (): MenuContextProps => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
};
