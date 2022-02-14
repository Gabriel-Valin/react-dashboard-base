import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;

    margin-bottom: 25px;

`;

export const Title = styled.div`
    > h1 {
            color: ${props => props.theme.colors.white};
    }

    &::after {
        content: '';
        display: block;
        width: 55px;
        border-bottom: 3px solid ${props => props.theme.colors.warning}
    }
`;

export const Controllers = styled.div`

`;