import styled from "styled-components";

type ContainerTypeProps = {
    color: string
}

export const Container = styled.div<ContainerTypeProps>`
    width: 32%;
    height: 150px;

    margin: 10px 0;
    border-radius: 10px;
    padding: 10px 20px;

    background-color: ${props => props.color};
    color: ${props => props.theme.colors.white};

    position: relative;
    overflow: hidden;

    > img {
        height: 110%;
        position: absolute;
        top: -10px;
        right: -30px;
        opacity .3;
    }

    > span {
        font-size: 18px;
        font-weight: 500;
    }

    > small {
        font-size: 12px;
        position: absolute;
        bottom: 10px;
    }

    @media(max-width: 770px) {
        > span {
            font-size: 14px;
        }

        > h1 {
            word-wrap: break-word;
            font-size: 22px;
        }
    }

    @media(max-width: 420px) {
        width: 100%;
    }
`;