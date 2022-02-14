import { Container, Title, Controllers } from "./styles";

export default function ContentHeader () {
    return (
        <Container>
            <Title>
                <h1>Title</h1>
            </Title>
            <Controllers>
                <button>Mock Button</button>
                <button>Mock Button</button>
            </Controllers>
        </Container>
    )
}