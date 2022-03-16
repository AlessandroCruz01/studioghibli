import styled, {css} from "styled-components";

interface Nav {
    isVisible: boolean
  }
  
  export const Container = styled.div<Nav>`
    position: absolute ;
    width: 50% ;
    height: 50% ;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
 


  
    backdrop-filter: blur(10%);
  
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    background: linear-gradient(to bottom right , #628E7570, #1A485570);

    border-radius: 50%;
  
  /* Opacidade */
    opacity: ${({isVisible}) => isVisible ? 1 : 0};
    pointer-events: none;
    transform: translateY(50px);
    transition: .5s;
  
  
    > svg {
      color: #fff;
      position: absolute;
      top: 1rem;
      right: 1rem;
      transform: rotate(45deg);
      transition: 0.7s;
    }
  
    > nav {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 2rem;
      transform: scale(0.7);
      transition: .7s;
    }
  
    ${({isVisible})=> isVisible && css`
  
      opacity: 1;
      pointer-events: auto ;
      transform: translateY(0);
  
      > svg {
        transform: rotate(0deg);
        cursor: pointer;
        :hover{
          color: #000;
        }
      }
  
      > nav {
        transform: scale(1);
      }
  
    `}
    
  `;