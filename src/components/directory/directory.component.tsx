import React from 'react';
import './directory.style.scss';
import { Section } from '../../Section';
import { MenuItem } from '../menu-item/menu-item.component';

interface IState {
  sections: Section[];
}

export class Directory extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      sections: [
        new Section(
          'hats',
          'https://i.ibb.co/cvpntL1/hats.png',
          1,
          'shop/hats'
        ),
        new Section(
          'jackets',
          'https://i.ibb.co/px2tCc3/jackets.png',
          2,
          'shop/jackets'
        ),
        new Section(
          'sneakers',
          'https://i.ibb.co/0jqHpnp/sneakers.png',
          3,
          'shop/sneakers'
        ),
        new Section(
          'womens',
          'https://i.ibb.co/GCCdy8t/womens.png',
          4,
          'shop/womens',
          'large'
        ),
        new Section(
          'mens',
          'https://i.ibb.co/R70vBrQ/men.png',
          5,
          'shop/mens',
          'large'
        ),
      ],
    };
  }

  render = () => {
    return (
      <div className='directory-menu'>
        {this.state.sections.map((x) => {
          return <MenuItem key={x.id} section={x} />;
        })}
      </div>
    );
  };
}
