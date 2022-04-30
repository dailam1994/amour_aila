import React from "react"
import { Link } from "react-router-dom"
import { Box, Typography } from "@mui/material"
import IconButton from "@mui/material/IconButton"
import InstagramIcon from "@mui/icons-material/Instagram"
import TwitterIcon from "@mui/icons-material/Twitter"
import FacebookIcon from "@mui/icons-material/Facebook"
import YouTubeIcon from "@mui/icons-material/YouTube"

const Footer = () => {
   return (
      <footer className="footer-basic">
         <Box className="social" style={{ padding: "10px 35px" }}>
            <a href="https://m.instagram.com/">
               <IconButton aria-label="instagram">
                  <InstagramIcon fontSize="medium" style={{ color: "rgb(255,255,2555)" }} />
               </IconButton>
            </a>
            <a href="https://m.youtube.com/">
               <IconButton aria-label="instagram">
                  <YouTubeIcon fontSize="medium" style={{ color: "rgb(255,255,255)" }} />
               </IconButton>
            </a>
            <a href="https://m.twitter.com/">
               <IconButton aria-label="instagram">
                  <TwitterIcon fontSize="medium" style={{ color: "rgb(255,255,255)" }} />
               </IconButton>
            </a>
            <a href="https://m.facebook.com/">
               <IconButton aria-label="instagram">
                  <FacebookIcon fontSize="medium" style={{ color: "rgb(255,255,255)" }} />
               </IconButton>
            </a>
         </Box>
         <Box id="internal-links">
            <Link to="/">Home</Link>
            <Link to="schedule/all">Work Schedule</Link>
            <Link to="/appointment">Appointment</Link>
         </Box>
         <Typography className="copyright" variant="caption" display="block" align="center">
            AmourAila © 2022
         </Typography>
      </footer>
   )
}

export default Footer
