import { Container, Logo, Form, FormTitle } from "./styles";
import logoimg from '../../assets/logo.svg';
import Input from "../../components/Input";
import Button from "../../components/Button";
import { FormEvent, useState } from "react";
import { useAuth } from '../../hooks/auth'
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const navigate = useNavigate()
    const { login } = useAuth()

    const handleLogin = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        login(email, password)
        navigate('/dashboard')
    }

    return (
        <Container>
            <Logo>
                <img src={logoimg} alt="Minha carteira" />
                <h3>Minha Carteira</h3>
            </Logo>

            <Form onSubmit={(e) => handleLogin(e)}>
                <FormTitle>
                   Entrar
                </FormTitle>

                <Input onChange={(e) => setEmail(e.target.value)} required type="email" placeholder="exemplo@gmail.com"/>
                <Input onChange={(e) => setPassword(e.target.value)} required type="password" />

                <Button type="submit">Acessar</Button>
            </Form>
        </Container>
    );
}

export default Login;