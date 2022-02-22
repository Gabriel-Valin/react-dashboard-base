import styled, { css } from "styled-components";

type AsideTypeProps = {
    menuIsOpen: boolean
}

export const Container = styled.div<AsideTypeProps>`
    grid-area: AS;
    background-color: ${props => props.theme.colors.secondary};
    padding-left: 20px;

    border-right: 1px solid ${props => props.theme.colors.gray};

    position: relative;

    @media(max-width: 600px) {
        padding-left: 8px;
        position: fixed;
        z-index: 2;
        width: 170px;

        height: ${props => props.menuIsOpen ? '100vh' : '80px'};
        overflow: hidden;

        ${props => !props.menuIsOpen && css`
            border: none;
            border-bottom: 1px solid ${props => props.theme.colors.gray};
        `};
    }
`;

export const Header = styled.header`
    display: flex;
    align-items: center;

    height: 80px;
`;

export const LogoImg  = styled.img`
    height: 40px;
    width: 40px;

    @media(max-width: 600px) {
        display: none;
    }
`;

export const TitleHeader = styled.h3`
    color: ${props => props.theme.colors.white};
    margin-left: 15px;

    @media(max-width: 600px) {
        display: none;
        width: 100px;
        font-size: 15px;
        margin-left: 5px;
    }
`;

export const MenuNavigator  = styled.nav`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
`;

export const MenuItemBottom = styled.button`
    font-size: 16px;
    display: flex;
    align-items: center;
    color: ${props => props.theme.colors.info};

    background: none;
    margin: 10px 0;

    transition: opacity .3s;

    &:hover {
        opacity: .7;
    }
    
    > svg {
        margin-right: 5px;
    }
`;

export const MenuItemLink = styled.a`
    display: flex;
    align-items: center;
    color: ${props => props.theme.colors.info};
    text-decoration: none;

    margin: 10px 0;

    transition: opacity .3s;

    &:hover {
        opacity: .7;
    }
    
    > svg {
        margin-right: 5px;
    }
`;

export const ToggleMenu = styled.button`
    width: 40px;
    height: 40px;

    border-radius: 5px;
    font-size: 22px;
    background-color: ${props => props.theme.colors.warning};
    transition: opacity .3s;

    &:hover {
        opacity: .7;
    }

    display: none;

    @media (max-width: 600px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;