import { Container } from "./styles";

export default function Content ({ children }: any) {
    return (
        <Container>
            {children}
        </Container>
    )
}