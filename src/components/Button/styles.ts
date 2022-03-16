import styled, { css } from "styled-components";

interface ContainerProps{
    preenchido: boolean | true
}

export const Container = styled.button<ContainerProps>`
    grid-area: Buttons;

    border: none;

    width: 225px;
    height: 45px;
    font-size: 16px;

    text-align: center;
    
    transform: skew(-20deg);

    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-style: normal;
    color: #f9f9f9;

    margin-right: 10px;

    border: solid 2px #658E76;
    background-color: #00000000;

    cursor: pointer;

    ${({preenchido}) => preenchido && css`
        background-color: #658E76;
    `}

    > div{
        display: flex;
        align-items: center;
        justify-content: center;
        >span {
            transform: skew(20deg);
        }
    }

    :hover{
        transition: .5s;
        opacity: 60%;
    }

`;