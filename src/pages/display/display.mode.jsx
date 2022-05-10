import React from "react"
import { Link } from "react-router-dom"
import { Box, Button, Typography } from "@mui/material"
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn"
import NightsStayIcon from "@mui/icons-material/NightsStay"
import Brightness4Icon from "@mui/icons-material/Brightness4"

// Function for handling Night Mode
export const nightMode = () => {
   // If Statement to handle sessionStorage Colour
   if (localStorage.getItem("colour")) {
      localStorage.setItem("colour", "rgb(0,0,0)")
      document.body.style.backgroundColor = localStorage.getItem("colour")
      document.body.style.color = "rgb(255,255,255)"
   } else {
      document.body.style.backgroundColor = "rgb(0,0,0)"
      localStorage.setItem("colour", "rgb(0,0,0)")
   }
}

// Function for handling Day Mode
export const dayMode = () => {
   if (localStorage.getItem("colour")) {
      localStorage.setItem("colour", "rgb(255,255,255)")
      document.body.style.backgroundColor = localStorage.getItem("colour")
      document.body.style.color = "rgb(0,0,0)"
   } else {
      document.body.style.backgroundColor = "rgb(255,255,255)"
      localStorage.setItem("colour", "rgb(255,255,255)")
   }
}

const DisplayMode = () => {
   // If Statement to handle storage colour
   if (localStorage.getItem("colour") == "rgb(0,0,0)") {
      nightMode()
   } else {
      dayMode()
   }

   return (
      <>
         <Typography sx={{ m: "10px" }} variant="h4">
            <strong>Display Settings</strong>
         </Typography>
         <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-around", m: 3 }}>
            <Box>
               <Button
                  sx={{ width: 1, backgroundColor: "rgb(255,255,255)", color: "rgb(0,0,0)" }}
                  variant="contained"
                  color="primary"
                  style={{ textTransform: "none" }}
                  onClick={dayMode}>
                  <Brightness4Icon sx={{ color: "rgb(0,0,0)" }} />
                  Day Mode
               </Button>
            </Box>
            <Box>
               <Button
                  sx={{ width: 1, backgroundColor: "rgb(0,0,0)", border: "1px solid rgb(255,255,255)" }}
                  variant="contained"
                  style={{ textTransform: "none" }}
                  onClick={nightMode}>
                  <NightsStayIcon sx={{ color: "rgb(255,255,255)" }} />
                  Night Mode
               </Button>
            </Box>
         </Box>
         <Link to="/settings">
            <Button sx={{ m: "10px", mb: "20px" }} variant="contained" color="primary">
               <KeyboardReturnIcon fontSize="small" sx={{ mr: "10px" }} />
               Back
            </Button>
         </Link>
      </>
   )
}

export default DisplayMode
