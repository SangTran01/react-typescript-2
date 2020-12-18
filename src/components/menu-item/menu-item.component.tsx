import React from 'react';
import './menu-item.style.scss';
import { Section } from '../../Section';

interface IProps {
  section: Section;
}

export const MenuItem: React.FC<IProps> = ({ section }) => {
  return (
    <div className='menu-item'>
      <div className='content'>
        <h1 className='title'>{section.title}</h1>
        <h1 className='title'>Shop Now</h1>
      </div>
    </div>
  );
};
