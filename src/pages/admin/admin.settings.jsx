import React from "react"
import { Link } from "react-router-dom"
import { Container, MenuItem, Typography } from "@mui/material"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import GroupIcon from "@mui/icons-material/Group"
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness"

const AdminSettings = () => {
   return (
      <>
         <Typography sx={{ m: "10px" }} variant="h4">
            <strong>Settings</strong>
         </Typography>
         <Container sx={{ my: "50px" }}>
            <Link to="/user/all" style={{ margin: 0 }}>
               <MenuItem>
                  <GroupIcon color="primary" />
                  <Typography sx={{ ml: "20px" }} aligh="center" color="primary">
                     Account Management
                  </Typography>
                  <ArrowForwardIosIcon
                     fontSize="small"
                     color="primary"
                     style={{ position: "absolute", right: "10px" }}
                  />
               </MenuItem>
            </Link>
            <Link to="/display" style={{ margin: 0 }}>
               <MenuItem>
                  <SettingsBrightnessIcon color="primary" />
                  <Typography sx={{ ml: "20px" }} aligh="center" color="primary">
                     Display Mode
                  </Typography>
                  <ArrowForwardIosIcon
                     fontSize="small"
                     color="primary"
                     style={{ position: "absolute", right: "10px" }}
                  />
               </MenuItem>
            </Link>
         </Container>
      </>
   )
}

export default AdminSettings
