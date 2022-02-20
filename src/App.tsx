import GlobalStyles from "./styles/GlobalStyles"
import { ThemeProvider } from 'styled-components'
import dark from "./styles/themes/dark"
import AppRoutes from "./routes/app.routes"
import { useTheme } from './hooks/theme'

function App() {
  const { theme } = useTheme()
  return (
   <ThemeProvider theme={theme}>
    <GlobalStyles />
    <AppRoutes />
   </ThemeProvider>
  )
}

export default App
