import React, { useEffect } from "react"
import { Typography, Box, Container, Grid } from "@mui/material"

const GuestAbout = () => {
   return (
      <>
         <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ m: "10px" }} variant="h4">
               <strong>About US</strong>
            </Typography>
            <img
               sx={{ m: 0, width: 1, display: "flex", alignItems: "center" }}
               src={"../assets/img/about-selective-focus-half-face-closeup-photography-of-female-s-green-eyes.webp"}
               alt="about-selective-focus-half-face-closeup-photography-of-female-s-green-eyes"
               height="auto"
               width="auto"
            />
         </Box>
         <Container sx={{ display: "flex", flexDirection: "column", borderLeft: "8px solid rgb(50,53,101)" }}>
            <Typography sx={{ my: "10px", mx: "30px", pb: "10px" }} style={{ color: "rgb(0,0,0)" }}>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
               dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
               ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
               fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
               mollit anim id est laborum.
            </Typography>
         </Container>
         <Grid container spacing={2} sx={{ pb: "5px" }}>
            <Grid item xs={6} style={{ padding: "0px" }}>
               <img
                  style={{ width: "100%" }}
                  src={"../assets/img/about-close-up-shot-of-pretty-woman-applying-mascara.webp"}
                  alt="about-close-up-shot-of-pretty-woman-applying-mascara"
                  height="auto"
                  width="auto"
               />
            </Grid>
            <Grid item xs={6} style={{ padding: "0px" }}>
               <img
                  style={{ width: "100%" }}
                  src={"../assets/img/about-woman-in-black-long-sleeve-shirt-lying-on-bed.webp"}
                  alt="about-woman-in-black-long-sleeve-shirt-lying-on-bed"
                  height="auto"
                  width="auto"
               />
            </Grid>
         </Grid>
      </>
   )
}

export default GuestAbout
