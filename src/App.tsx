import GlobalStyles from "./styles/GlobalStyles"
import { ThemeProvider } from 'styled-components'
import AppRoutes from "./routes/app.routes"
import AuthRoutes from "./routes/auth.routes"
import { useTheme } from './hooks/theme'

function App() {
  const { theme } = useTheme()
  return (
   <ThemeProvider theme={theme}>
    <GlobalStyles />
    {/* <AppRoutes /> */}
    <AuthRoutes />
   </ThemeProvider>
  )
}

export default App
