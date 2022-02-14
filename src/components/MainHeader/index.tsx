import { useMemo } from "react";
import emojis from "../../utils/emojis";
import { Container, Welcome, Username, Profile } from "./styles";

export default function MainHeader () {
    const sortEmoji = useMemo(() => {
        const index = Math.floor(Math.random() * emojis.length)
        return emojis[index]
    }, [])

    return (
        <Container>
            <h1>toggle</h1>
            <Profile>
                <Welcome>Ola, {sortEmoji} </Welcome>
                <Username>Gabriel Valin</Username>
            </Profile>
        </Container>
    )
}