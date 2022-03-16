import React from 'react';

import Image from '../../assets/image.svg'
import { Container } from './styles';

const Section: React.FC = () => {
  return <Container src={Image} alt='Dois Fantasminhas' />;
}

export default Section;