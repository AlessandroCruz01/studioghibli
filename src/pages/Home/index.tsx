import Button from '../../components/Button';

import Logo from '../../components/Logo';
import Section from '../../components/Section';
import SocialMidia from '../../components/SocialMidia';

import {BsPlay} from 'react-icons/bs'

import { Wallpaper, Botoes, Container, Content, Description, Subtitle, Title } from './styles';

const Home: React.FC = () => {


  return (
      <Container>
          <Content>
          
            <Logo/>  
            <SocialMidia/>

            <Wallpaper>
              <Section/> 
            </Wallpaper>
          
            <Subtitle>
              <h2>HAYAO MIYAZAKI</h2>
            </Subtitle>
            <Title>
              A VIAGEM <br/>
              DE CHIHIRO
            </Title>
            <Description>
              <span>
                Chihiro chega a um mundo mágico dominado por <br/>
                uma bruxa. Aqueles que a desobedecem são <br/>
                transformados em animais.
              </span>
            </Description>

            <Botoes>
              <Button 
                preenchido={true}  
                label={`ASSISTIR AGORA`} 
                key='Button filme' 
                icon={<BsPlay className='iconeBotao'/>}
              />
              
              <Button 
                preenchido={false} 
                label={`ASSISTIR O TRAILER`} 
                key='Button trailer' 
                className='trailer'
              />

            </Botoes>
          </Content>
          
      </Container>
  );
}

export default Home;