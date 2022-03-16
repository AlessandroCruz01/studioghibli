import React from 'react';

import { Container } from './styles';

import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import twitter from '../../assets/twitter.svg'
import youtube from '../../assets/youtube.svg'

const SocialMidia: React.FC = () => {
  return (
      <Container>

          <a href="#"><img src={facebook} alt="logo do facebook" id='facebook'/></a>
          <a href="#"><img src={instagram} alt="logo do instagram" id='instagram'/></a>
          <a href="#"><img src={twitter} alt="logo do twitter" id='twitter'/></a>
          <a href="#"><img src={youtube} alt="logo do youtube" id='youtube'/></a>

      </Container>
  );
}

export default SocialMidia;