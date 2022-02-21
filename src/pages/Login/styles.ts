import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content:center;

    background-color: ${props => props.theme.colors.primary};
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;

    margin-bottom: 30px;

    > h3 {
        color: ${props => props.theme.colors.white};
        margin-left: 7px;
    }

    > img {
        width: 50px;
        height: 50px;
    }
`;

export const Form = styled.form`
    width: 300px;
    height: 300px;

    padding: 30px;

    background-color: ${props => props.theme.colors.tertiary};
    border-radius: 10px;
`;

export const FormTitle = styled.h1`
    margin-bottom: 30px;

    &::after {
        content: '';
        display: block;
        width: 55px;
        border-bottom: 5px solid ${props => props.theme.colors.warning};
    }
`;