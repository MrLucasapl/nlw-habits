import styled from 'styled-component';

export const HeaderStyled = styled.div`
    .box-header {
        width: 100%;
        padding-top: 70px;
        padding-bottom: 70px;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    img { 
        width: 11%;
        object-fit: cover;
    }

    button {
        padding: 1%;
        display: flex;
        color: #ffff;
        cursor: pointer;
        border-radius: 5px;
        align-items: center;
        background-color: #09090A;
        border: 2px solid #4c1d95;
    }

    button:hover {
        border: 2px solid #8b5cf6;
    }

`;