import React from "react"
import { Typography } from "@mui/material"
import { dayMode, nightMode } from "../display/display.mode"

const AdminHome = () => {
   // If Statement to handle storage colour
   if (localStorage.getItem("colour") == "rgb(0,0,0)") {
      nightMode()
   } else {
      dayMode()
   }

   return (
      <>
         <Typography sx={{ m: "10px" }} variant="h4">
            <strong>Welcome Aila,</strong>
         </Typography>
         <Typography sx={{ my: "10px", mx: "30px", pb: "10px" }} variant="subtitle1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
         </Typography>
      </>
   )
}

export default AdminHome
