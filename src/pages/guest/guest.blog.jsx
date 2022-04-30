import React from "react"
import { Typography, Container, Grid } from "@mui/material"

const GuestBlog = () => {
   return (
      <>
         <Container sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ m: "10px" }} variant="h4">
               <strong>Blog</strong>
            </Typography>
         </Container>
         <Grid container spacing={2} sx={{ my: "10px" }} style={{ borderLeft: "21px solid rgb(50,53,101)" }}>
            <Grid
               item
               xs={6}
               sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
               style={{ padding: "0px" }}>
               <Typography sx={{ m: "10px" }} variant="h4">
                  <strong>
                     Mrs. <br /> Aila
                  </strong>
               </Typography>
            </Grid>
            <Grid item xs={6} style={{ padding: "0px" }}>
               <img
                  sx={{ display: "flex", justifyContent: "center" }}
                  style={{ width: "100%" }}
                  src={"../assets/img/blog-side-view-of-a-woman-in-portrait-photography.webp"}
                  alt="blog-side-view-of-a-woman-in-portrait-photography"
                  height="auto"
                  width="auto"
               />
            </Grid>
         </Grid>
         <Typography sx={{ my: "10px", mx: "30px", pb: "10px" }} style={{ color: "rgb(0,0,0)" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
         </Typography>
      </>
   )
}

export default GuestBlog
