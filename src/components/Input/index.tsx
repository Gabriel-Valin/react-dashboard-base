import { InputHTMLAttributes } from 'react';
import { Container } from './style'

interface InputTypeProps extends InputHTMLAttributes<HTMLInputElement> {

}

function Input({ ...rest }: InputTypeProps) {
    return (
        <Container {...rest}>

        </Container>
    );
}

export default Input;