import React from 'react';
import Navbar from './Navbar';
import Divider from '../ui/Divider';
import CategoryTitle from '../ui/CategoryTitle';

const CategoryHeader = () => {
  return (
    <header className='bg-black'>
      <div className='container'>
        <Navbar />
        <Divider />
        <CategoryTitle />
      </div>
    </header>
  );
};

export default CategoryHeader;
