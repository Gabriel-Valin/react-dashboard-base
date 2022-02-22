import styled from "styled-components";

export const Container = styled.div`
    width: 48%;
    color: ${props => props.theme.colors.white};

    height: 260px;
    background-color: ${props  => props.theme.colors.tertiary};

    border-radius: 10px;

    margin: 10px 0;
    padding: 30px 20px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > header img {
        height: 35px;
        width: auto;
    }

    > header p {
        font-size: 18px;
    }

    @media(max-width: 770px) {
        width: 100%;
        height: auto;
    }
`;