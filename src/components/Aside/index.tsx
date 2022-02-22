import { Container, Header, LogoImg, MenuNavigator, MenuItemLink, TitleHeader, MenuItemBottom } from "./styles";
import logoImg from '../../assets/logo.svg';
import { MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp } from 'react-icons/md';
import { useAuth } from "../../hooks/auth";

export default function Aside () {
    const { logout } = useAuth();

    return (
        <Container>
            <Header>
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