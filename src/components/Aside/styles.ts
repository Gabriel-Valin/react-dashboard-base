import styled from "styled-components";

export const Container = styled.div`
    grid-area: AS;
    background-color: ${props => props.theme.colors.secondary};
    padding-left: 20px;

    border-right: 1px solid ${props => props.theme.colors.gray};
`;

export const Header = styled.header`
    display: flex;
    align-items: center;

    height: 80px;
`;

export const LogoImg  = styled.img`
    height: 40px;
    width: 40px;
`;

export const TitleHeader = styled.h3`
    color: ${props => props.theme.colors.white};
    margin-left: 15px;
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