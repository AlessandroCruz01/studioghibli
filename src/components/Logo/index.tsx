import React from 'react';

import { Container } from './styles';
import SvgLogo from '../../assets/logo.svg'

const Logo: React.FC = () => {
  return <Container src={SvgLogo} alt='Logo da empresa Studio Ghbti'/>;
}

export default Logo;