import React from "react"
import { Link } from "react-router-dom"
import { Container, MenuItem, Typography } from "@mui/material"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import GroupIcon from "@mui/icons-material/Group"
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness"
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents"

const ClientSettings = () => {
   return (
      <>
         <Typography sx={{ m: "10px" }} variant="h4">
            <strong>Settings</strong>
         </Typography>
         <Container sx={{ my: "50px" }}>
            <Link to="/user/edit" style={{ margin: 0 }}>
               <MenuItem>
                  <GroupIcon color="primary" />
                  <Typography sx={{ ml: "20px" }} aligh="center" color="primary">
                     Manage Account
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
            <Link to="/acknowledgement" style={{ margin: 0 }}>
               <MenuItem>
                  <EmojiEventsIcon color="primary" />
                  <Typography sx={{ ml: "20px" }} aligh="center" color="primary">
                     Acknowledgements
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

export default ClientSettings
