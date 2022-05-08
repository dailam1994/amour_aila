import React from "react"
import { Link } from "react-router-dom"
import { Button, Container, Typography } from "@mui/material"
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn"

const AdminTutorial = () => {
   return (
      <>
         <Typography sx={{ m: "10px" }} variant="h4">
            <strong>Help Tutorial,</strong>
         </Typography>
         <Typography sx={{ m: "10px" }} variant="h6">
            <strong>Navigating the Application</strong>
         </Typography>
         <Container>
            <img
               sx={{ display: "flex", justifyContent: "center" }}
               style={{ width: "100%" }}
               src={"../assets/img/admin-nav.webp"}
               alt="admin-nav"
               height="auto"
               width="auto"
            />
         </Container>
         <Typography sx={{ my: "10px", mx: "30px", pb: "10px" }} variant="subtitle2">
            Clicking onto the hamburger menu on the top-right corner allows access to other features of the application
            including Records and Settings.
         </Typography>
         <Typography sx={{ m: "10px" }} variant="h6">
            <strong>Admin Settings</strong>
         </Typography>
         <Container>
            <img
               sx={{ display: "flex", justifyContent: "center" }}
               style={{ width: "100%" }}
               src={"../assets/img/admin-settings.webp"}
               alt="admin-settings"
               height="auto"
               width="auto"
            />
         </Container>
         <Typography sx={{ my: "10px", mx: "30px", pb: "10px" }} variant="subtitle2">
            Navigating to the Settings page allows access to User Account Management and Display Mode.
         </Typography>
         <Container>
            <img
               sx={{ display: "flex", justifyContent: "center" }}
               style={{ width: "100%" }}
               src={"../assets/img/admin-user-account-all.webp"}
               alt="admin-user-account-all"
               height="auto"
               width="auto"
            />
         </Container>
         <Typography sx={{ my: "10px", mx: "30px", pb: "10px" }} variant="subtitle2">
            Admin is allowed access to every individual user account on the system and may view, edit and delete them.
         </Typography>
         <Container>
            <img
               sx={{ display: "flex", justifyContent: "center" }}
               style={{ width: "100%" }}
               src={"../assets/img/admin-user-account-single.webp"}
               alt="admin-user-account-single"
               height="auto"
               width="auto"
            />
         </Container>
         <Typography sx={{ m: "10px" }} variant="h6">
            <strong>Admin Records</strong>
         </Typography>
         <Container>
            <img
               sx={{ display: "flex", justifyContent: "center" }}
               style={{ width: "100%" }}
               src={"../assets/img/admin-record-all.webp"}
               alt="admin-record-all"
               height="auto"
               width="auto"
            />
         </Container>
         <Typography sx={{ my: "10px", mx: "30px", pb: "10px" }} variant="subtitle2">
            Admin may view, edit and delete ALL Client User Records in the system.
         </Typography>
         <Link to="/">
            <Button sx={{ m: "10px", mb: "20px" }} variant="contained" color="primary">
               <KeyboardReturnIcon fontSize="small" sx={{ mr: "10px" }} />
               Back
            </Button>
         </Link>
      </>
   )
}

export default AdminTutorial
