import GlobalStyles from "./styles/GlobalStyles"
import { ThemeProvider } from 'styled-components'
import { useTheme } from './hooks/theme'
import AppRoutes from "./routes/app.routes"

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
