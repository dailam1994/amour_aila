import React from "react"
import { Typography, Container, Grid } from "@mui/material"

const GuestService = () => {
   return (
      <>
         <Container sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ m: "10px" }} variant="h4">
               <strong>Services</strong>
            </Typography>
            <Typography sx={{ my: "10px", mx: "30px", pb: "10px" }} style={{ color: "rgb(0,0,0)" }}>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
               dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
               ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
               fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
               mollit anim id est laborum.
            </Typography>
         </Container>
         <Grid container spacing={3} sx={{ py: "20px" }}>
            <Grid item xs={4} style={{ padding: "0px", margin: "0px" }}>
               <img
                  style={{ width: "100%", height: "100%" }}
                  src={"../assets/img/service-black-and-silver-box-mod.webp"}
                  alt="service-black-and-silver-box-mod"
                  height="auto"
                  width="auto"
               />
            </Grid>
            <Grid item xs={4} style={{ padding: "0px", margin: "0px" }}>
               <img
                  style={{ width: "100%", height: "100%" }}
                  src={"../assets/img/service-red-and-silver-bread-knife.webp"}
                  alt="service-red-and-silver-bread-knife"
                  height="auto"
                  width="auto"
               />
            </Grid>
            <Grid item xs={4} style={{ padding: "0px", margin: "0px" }}>
               <img
                  style={{ width: "100%", height: "100%" }}
                  src={"../assets/img/service-woman-in-white-tank-top-wearing-black-sunglasses.webp"}
                  alt="service-woman-in-white-tank-top-wearing-black-sunglasses"
                  height="auto"
                  width="auto"
               />
            </Grid>
         </Grid>
         <Typography sx={{ m: "10px" }} variant="h4">
            <strong>Packages</strong>
         </Typography>
         <ul style={{ margin: "10px", borderLeft: "8px solid rgb(50,53,101)" }}>
            <li>
               Service 1
               <ul>
                  <li>Item 1</li>
               </ul>
            </li>
            <li>
               Service 2
               <ul>
                  <li>Item 1</li>
                  <li>Item 2</li>
               </ul>
            </li>
            <li>
               Service 3
               <ul>
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
               </ul>
            </li>
            <li>
               Service 4
               <ul>
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                  <li>Item 4</li>
               </ul>
            </li>
         </ul>
      </>
   )
}

export default GuestService
