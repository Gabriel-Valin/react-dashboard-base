import styled from "styled-components";

export const Container = styled.div`
    grid-area: CT;
    background-color: ${props => props.theme.colors.primary};

    padding: 20px;

    height: calc(100vh - 80px);
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors.tertiary};
        border-radius: 10px;
    }

    ::-webkit-scrollbar-track {
        background-color: ${props => props.theme.colors.secondary};
    }
`;