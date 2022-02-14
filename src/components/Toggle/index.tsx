import { Container, ToggleLabel, ToggleSelector } from "./styles";

export default function Toggle () {
    return (
        <Container>
            <ToggleLabel>Light</ToggleLabel>
            <ToggleSelector checked onChange={() => console.log('change')}  uncheckedIcon={false} checkedIcon={false}/>
            <ToggleLabel>Dark</ToggleLabel>
        </Container>
    )
}