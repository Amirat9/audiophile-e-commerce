'use client';
import React, { useEffect, useRef } from 'react';
import CategoryMenu from '../oraganisms/CategoryMenu';
import { useMenu } from '@/context/MenuContext';
import { cn } from '@/lib/utils';
import { useModal } from '@/context/ModalContext';

const Menu = () => {
  const { isMenuOpen, menuTrigger } = useMenu();
  const { isModalOpen, modalTrigger } = useModal();
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      if (isMenuOpen && isModalOpen) {
        modalTrigger();
        menuTrigger();
      }
    }
  };

  useEffect(() => {
    if (isModalOpen && isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.classList.add('overflow-hidden');
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.classList.remove('overflow-hidden');
    };
  }, [isMenuOpen, isModalOpen]);
  return (
    <div
      ref={menuRef}
      className={cn(
        isMenuOpen
          ? 'bg-white z-50 px-6 pt-[86px] pb-[52px] fixed inset-0 top-[89px] w-full md:max-h-[340px] md:px-10 overflow-scroll lg:hidden'
          : 'hidden'
      )}>
      <CategoryMenu />
    </div>
  );
};

export default Menu;
