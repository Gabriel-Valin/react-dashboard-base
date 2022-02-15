import styled from "styled-components";

type TitleContainerTypeProps = {
    lineColor: string
}

export const Container = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;

    margin-bottom: 25px;

`;

export const Title = styled.div<TitleContainerTypeProps>`
    > h1 {
            color: ${props => props.theme.colors.white};
    }

    &::after {
        content: '';
        display: block;
        width: 55px;
        border-bottom: 3px solid ${props => props.lineColor}
    }
`;

export const Controllers = styled.div`
    display: flex;
    align-items: center;
`;