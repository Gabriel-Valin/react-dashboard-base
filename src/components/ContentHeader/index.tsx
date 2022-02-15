import { ReactNode } from "react";
import { Container, Title, Controllers } from "./styles";

type ContentHeaderPropsType = {
    title: string
    lineColor: string
    children: ReactNode
}

export default function ContentHeader ({ title, lineColor, children }: ContentHeaderPropsType) {
    return (
        <Container>
            <Title lineColor={lineColor}>
                <h1>{title}</h1>
            </Title>
            <Controllers>
                {children}
            </Controllers>
        </Container>
    )
}