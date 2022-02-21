import { createContext, ReactNode, useContext, useState } from "react"

type AuthTypeProps = {
    isLogged: boolean
    login(email: string, password: string): void
    logout(): void
}

type AuthProviderChildren = {
    children: ReactNode
}

const AuthContext = createContext<AuthTypeProps>({} as AuthTypeProps);
export const AuthProvider = ({ children }: AuthProviderChildren) => {
    const [isLogged, setIsLogged] = useState<boolean>(() => {
        const loginValid = localStorage.getItem('@minha-carteira:logged')
        return !!loginValid;
    })

    const login = (email: string, password: string) => {
        if (email === 'gabrielvalin@mail.com' && password === '123456') {
            localStorage.setItem('@minha-carteira:logged', 'true')
            setIsLogged(true)

        } else {
            alert('Senha ou usuarios invalidos')
        }
    }

    const logout = () => {
        localStorage.removeItem('@minha-carteira:logged')
        setIsLogged(false)
    }

    return (
        <AuthContext.Provider value={{ isLogged, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)

    return context
}