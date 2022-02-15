import GlobalStyles from "./styles/GlobalStyles"
import { ThemeProvider } from 'styled-components'
import dark from "./styles/themes/dark"
import AppRoutes from "./routes/app.routes"

function App() {
  return (
   <ThemeProvider theme={dark}>
    <GlobalStyles />
    <AppRoutes />
   </ThemeProvider>
  )
}

export default App
