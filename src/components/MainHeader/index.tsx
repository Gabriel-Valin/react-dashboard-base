import { useMemo, useState } from "react";
import emojis from "../../utils/emojis";
import { Container, Welcome, Username, Profile, Toggle } from "./styles";
import { useTheme } from "../../hooks/theme";

export default function MainHeader () {
    const { toggleTheme, theme } = useTheme()

    const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false)

    const handleChangeTheme = () => {
        setDarkTheme(!darkTheme);
        toggleTheme();
    }

    const sortEmoji = useMemo(() => {
        const index = Math.floor(Math.random() * emojis.length)
        return emojis[index]
    }, [])

    return (
        <Container>
            <Toggle checked={darkTheme} labelLeft="Light" labelRight="Dark" onChange={handleChangeTheme}/>
            <Profile>
                <Welcome>Ola, {sortEmoji} </Welcome>
                <Username>Gabriel Valin</Username>
            </Profile>
        </Container>
    )
}