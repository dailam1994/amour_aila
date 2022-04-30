import React from "react"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import AuthRoute from "./components/auth.route"

// Mui Font Themeing
const theme = createTheme({
   typography: {
      fontFamily: "Rubik",
   },
})

function App() {
   return (
      <div className="App">
         <ThemeProvider theme={theme}>
            <AuthRoute />
         </ThemeProvider>
      </div>
   )
}

export default App
