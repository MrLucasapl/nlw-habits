import React from 'react'
import logoImage from '../../assets/logo.svg';
import { Plus } from 'phosphor-react';
import { HeaderStyled } from './styled';

const Header = () => {
  return (
    <HeaderStyled>
        <div className='box-header'>
            <img src={logoImage} alt="logo" />
            <button type='button'>
              <Plus size={25} style={{paddingRight: '10px'}}/>
              Novo Hábito
            </button>
        </div>
    </HeaderStyled>
  )
}

export default Header;