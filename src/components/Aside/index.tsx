import { Container, Header, LogoImg, MenuNavigator, MenuItemLink, TitleHeader, MenuItemBottom, ToggleMenu } from "./styles";
import logoImg from '../../assets/logo.svg';
import { MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp, MdClose, MdMenu } from 'react-icons/md';
import { useAuth } from "../../hooks/auth";
import { useState } from "react";

export default function Aside () {
    const { logout } = useAuth();
    const [toggleMenuOpened, setToggleMenuOpened] = useState<boolean>(false)
    const handleToggleMenu = () => setToggleMenuOpened(!toggleMenuOpened)

    return (
        <Container menuIsOpen={toggleMenuOpened}>
            <Header>
                <ToggleMenu onClick={handleToggleMenu}>
                    { toggleMenuOpened ? <MdClose /> : <MdMenu />  }
                </ToggleMenu>

                <LogoImg src={logoImg} alt="Logo Application" />
                <TitleHeader>
                    Minha Carteira
                </TitleHeader>
            </Header>
            <MenuNavigator>
                <MenuItemLink href="/dashboard">
                    <MdDashboard />
                    Dashboard
                </MenuItemLink>
                <MenuItemLink href="/listagem/balanco-saidas">
                    <MdArrowDownward />
                    Saidas
                </MenuItemLink>
                <MenuItemLink href="/listagem/balanco-entradas">
                    <MdArrowUpward />
                    Entradas
                </MenuItemLink>
                <MenuItemBottom onClick={logout}>
                    <MdExitToApp />
                    Sair
                </MenuItemBottom>
            </MenuNavigator>
        </Container>
    )
}