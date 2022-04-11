import React from 'react'
import './App.css'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import GuestLayout from './components/guest/guest.layout'
// import AdminLayout from './components/admin/admin.layout'

const theme = createTheme({
  typography: {
    fontFamily: 'Rubik'
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        {/* <AdminLayout /> */}
        <GuestLayout />
      </ThemeProvider>
    </div >
  )
}

export default App
