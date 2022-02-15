import { Container, Header, LogoImg, MenuNavigator, MenuItemLink, TitleHeader } from "./styles";
import logoImg from '../../assets/logo.svg';
import { MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp } from 'react-icons/md';

export default function Aside () {
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
                <MenuItemLink href="#">
                    <MdExitToApp />
                    Sair
                </MenuItemLink>
            </MenuNavigator>
        </Container>
    )
}