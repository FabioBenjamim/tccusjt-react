import React from 'react';
import './App.css';
import { fallDown as Menu } from 'react-burger-menu';

export default props => {
  return (
    <Menu>
      <div>
        <img className='iconUser' src="https://cdn0.iconfinder.com/data/icons/star-wars-3/154/droid-helmet-soldier-star-wars-512.png" />
        <a className="menu-item" href="/">
          Nome
        </a>
      </div>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/laravel">
        Minha Conta
      </a>

      <a className="menu-item" href="/angular">
        Meus Investimentos
      </a>

      <a className="menu-item" href="/react">
        Sair
      </a>
    </Menu>
  );
};