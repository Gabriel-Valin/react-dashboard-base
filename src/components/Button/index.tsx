import { ButtonHTMLAttributes, InputHTMLAttributes, ReactNode } from 'react';
import { Container } from './style'

interface ButtonTypeProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
}

function Button({ children, ...rest }: ButtonTypeProps) {
    return (
        <Container {...rest}>
            {children}
        </Container>
    );
}

export default Button;