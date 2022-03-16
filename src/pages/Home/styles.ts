import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(to bottom right , #628E75, #1A4855);

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    height: 90%;
    width: 85%;

    align-items: center;

    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: auto auto auto auto 20%;
    grid-template-areas:
        'Logo Social'
        'Subtitle Section'
        'Titulo Section'
        'Desc Section'
        'Buttons Section'
    ;

    @media(max-width: 680px){
        width: 90%;
        height: 100%;
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: 10% 30% 5% 12% 20% auto;
        grid-template-areas: 
            'Logo Social'
            'Section Section'
            'Subtitle Subtitle'
            'Titulo Titulo'
            'Desc Desc'
            'Buttons Buttons'
        ;
    }

`;

export const Wallpaper = styled.div`
    grid-area: Section;

    display: flex;
    align-items: center;
    justify-content: center;

`;

export const Subtitle = styled.span`
    grid-area: Subtitle;

    display: flex;
    flex-direction: column-reverse ;
    
    width: 100%;
    height: 100%;

    >h2{
        font-family:'Poppins', sans-serif;
        font-weight: 700;
        font-size: 1.25rem;
        color: #f9f9f9;
        
    }

    @media(max-width: 680px){
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

`;

export const Title = styled.div`
    grid-area: Titulo;
    font-weight: 900;
    font-family:'Poppins', sans-serif;
    font-size: 4.25rem;
    color: #f9f9f9;
 
    @media(max-width: 680px){
        font-size: 3.4rem ;
    }
`;

export const Description = styled.div`
    grid-area: Desc;
    display: flex;
    flex-direction: column ;
    flex-wrap: nowrap;
    margin-top: 10%;

    
    width: 100%;
    height: 100%;

    > span{
        
        align-items: center;

        font-weight: 400;
        font-family:'Poppins', sans-serif;
        font-size: 1rem;
        color: #f9f9f9;
        line-height: 180%;
    }

    @media(max-width: 680px){
        > span {
           font-size: 0.875rem;
        }
    }

`;

export const Botoes = styled.div`
    grid-area: Buttons;

    width: 100%;
    height: 100%;

    display: flex;
    flex-wrap: nowrap; 

    margin-top: 5%;

    .iconeBotao{
        font-size: 25px;
        margin-right: 1%;
        transform: skew(20deg);
    }

    @media(max-width: 680px){
        .trailer{
            display: none;
        }
    }
    
`;

export const Video = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;


`;