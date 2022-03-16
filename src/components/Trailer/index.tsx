import React, { useEffect } from 'react';


import { Container } from './styles';

import { IoClose } from "react-icons/io5";

interface YoutubeProps{
    visible: boolean
    setVisible: Function
}

const Trailer: React.FC<YoutubeProps> = ({visible, setVisible}) => {

      // Travar o scroll em mobile
    useEffect(() => {
        document.body.style.overflowY = visible ?  'hidden' : 'auto';
    }, [visible])

      
  return (
      <Container isVisible={visible}>
        <IoClose size={45} onClick={() => setVisible(false)}/>
        <iframe 
            src="https://www.youtube.com/embed/SgZI655GgHk?controls=0" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        >  
        </iframe>
      </Container>
  );
}

export default Trailer;
