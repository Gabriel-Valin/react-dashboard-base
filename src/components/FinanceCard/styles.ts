import styled from "styled-components";

type ContainerTypeProps = {
    color: string
}

type TagTypeProps = {
    color: string
}

export const Container = styled.li<ContainerTypeProps>`
    background-color: ${props => props.color};
    list-style: none;

    border-radius: 5px;

    margin: 10px 0;
    padding: 12px 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    cursor: pointer;
    transition: all .3s;

    position: relative;

    &:hover {
        opacity: .7;
        transform: translateX(10px);
    }

    > div {
        color: ${props => props.theme.colors.white};
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        padding-left: 10px;
    }

    > h3 {
        color: ${props => props.theme.colors.white};
    }
`;

export const Tag = styled.div<TagTypeProps>`
    width: 10px;
    height: 60%;
    position: absolute;
    left: 0;

    background-color: ${props => props.color}
`;