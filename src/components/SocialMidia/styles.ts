import styled from "styled-components";

export const Container = styled.div`
    grid-area: Social;

    display: flex;
    align-items: center;
    justify-content: right;
    flex-direction: row;

    margin-right: 5%;
   
    > a {
        margin: 3%;
        cursor: pointer;

        img {
            width: 24px;
            height: 24px;
        }
    }

`;