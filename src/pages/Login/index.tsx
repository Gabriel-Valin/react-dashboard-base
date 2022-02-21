import { Container, Logo, Form, FormTitle } from "./styles";
import logoimg from '../../assets/logo.svg';
import Input from "../../components/Input";
import Button from "../../components/Button";

function Login() {
    return (
        <Container>
            <Logo>
                <img src={logoimg} alt="Minha carteira" />
                <h3>Minha Carteira</h3>
            </Logo>

            <Form onSubmit={() => {}}>
                <FormTitle>
                   Entrar
                </FormTitle>

                <Input required type="email" placeholder="exemplo@gmail.com"/>
                <Input required type="password" />

                <Button type="submit">Acessar</Button>
            </Form>
        </Container>
    );
}

export default Login;