import React from 'react';
import { FaUserCircle } from 'react-icons/fa'

import { Container, ProfileLink } from './styles';

import Logo from '../../../public/assets/facebook-logo.svg';

export default function topBar() {
  return (
    <>
      <Container>
        <img src={Logo} alt="Fakebook"/>
        <ProfileLink href="#">
          Meu perfil
          <FaUserCircle />
        </ProfileLink>
      </Container>
    </>
  );
}
