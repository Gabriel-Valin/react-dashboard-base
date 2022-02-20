import { createContext, ReactNode, useContext, useState } from "react";

import dark from "../styles/themes/dark";
import light from "../styles/themes/light";

type ChildrenProvider = {
    children: ReactNode
}

interface IThemeContext {
    toggleTheme(): void
    theme: ITheme
}

interface ITheme {
    title: string

    colors: {
        primary: string
        secondary: string
        tertiary: string

        white: string
        black: string
        gray: string

        success: string
        info: string
        warning: string
    }
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext)
export const ThemeProvider = ({ children }: ChildrenProvider) => {
    const [theme, setTheme] = useState<ITheme>(dark)
    const toggleTheme = () => {
        if (theme.title === 'dark') {
            setTheme(light)
        } else {
            setTheme(dark)
        }
    }

    return (
        <ThemeContext.Provider value={{ toggleTheme, theme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext)

    return context
}