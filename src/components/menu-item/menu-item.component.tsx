import React from 'react';
import './menu-item.style.scss';
import { Section } from '../../Section';

interface IProps {
  section: Section;
}

export const MenuItem: React.FC<IProps> = ({ section }) => {
  return (
    <div className={`menu-item ${section.size}`}>
      <div
        className='background-image'
        style={{ backgroundImage: `url(${section.imageUrl})` }}
      />
      <div className='content'>
        <h1 className='title'>{section.title.toUpperCase()}</h1>
        <h1 className='subtitle'>Shop Now</h1>
      </div>
    </div>
  );
};
