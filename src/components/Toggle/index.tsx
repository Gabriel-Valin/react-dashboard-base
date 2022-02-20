import { Container, ToggleLabel, ToggleSelector } from "./styles";

type ToggleTypeProps = {
    labelLeft: string
    labelRight: string
    checked: boolean
    onChange(): void
}

export default function Toggle ({ checked, labelLeft, labelRight, onChange }: ToggleTypeProps) {
    return (
        <Container>
            <ToggleLabel>{labelLeft}</ToggleLabel>
            <ToggleSelector checked={checked} onChange={onChange}  uncheckedIcon={false} checkedIcon={false}/>
            <ToggleLabel>{labelRight}</ToggleLabel>
        </Container>
    )
}