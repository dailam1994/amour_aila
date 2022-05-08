import React from "react"
import { Link } from "react-router-dom"
import { Button, Container, Typography } from "@mui/material"
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn"

const ClientTutorial = () => {
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
               src={"../assets/img/client-nav.webp"}
               alt="client-nav"
               height="auto"
               width="auto"
            />
         </Container>
         <Typography sx={{ my: "10px", mx: "30px", pb: "10px" }} variant="subtitle2">
            Clicking onto the hamburger menu on the top-right corner allows access to other features of the application
            including Records and Settings.
         </Typography>
         <Typography sx={{ m: "10px" }} variant="h6">
            <strong>Client Settings</strong>
         </Typography>
         <Container>
            <img
               sx={{ display: "flex", justifyContent: "center" }}
               style={{ width: "100%" }}
               src={"../assets/img/client-settings.webp"}
               alt="client-settings"
               height="auto"
               width="auto"
            />
         </Container>
         <Typography sx={{ my: "10px", mx: "30px", pb: "10px" }} variant="subtitle2">
            Navigating to the Settings page allows access to their User Account and Display Mode.
         </Typography>
         <Container>
            <img
               sx={{ display: "flex", justifyContent: "center" }}
               style={{ width: "100%" }}
               src={"../assets/img/client-user-account.webp"}
               alt="client-user-account"
               height="auto"
               width="auto"
            />
         </Container>
         <Typography sx={{ my: "10px", mx: "30px", pb: "10px" }} variant="subtitle2">
            A Client may view and edit their account details.
         </Typography>
         <Typography sx={{ m: "10px" }} variant="h6">
            <strong>Client Records</strong>
         </Typography>
         <Container>
            <img
               sx={{ display: "flex", justifyContent: "center" }}
               style={{ width: "100%" }}
               src={"../assets/img/client-records.webp"}
               alt="client-records"
               height="auto"
               width="auto"
            />
         </Container>
         <Typography sx={{ my: "10px", mx: "30px", pb: "10px" }} variant="subtitle2">
            A Client may view, create and edit records in the system.
         </Typography>
         <Container>
            <img
               sx={{ display: "flex", justifyContent: "center" }}
               style={{ width: "100%" }}
               src={"../assets/img/client-record-create.webp"}
               alt="client-record-create"
               height="auto"
               width="auto"
            />
         </Container>
         <Typography sx={{ my: "10px", mx: "30px", pb: "10px" }} variant="subtitle2">
            This updates their record data to view and edit.
         </Typography>
         <Container>
            <img
               sx={{ display: "flex", justifyContent: "center" }}
               style={{ width: "100%" }}
               src={"../assets/img/client-record-with-data.webp"}
               alt="client-record-with-data"
               height="auto"
               width="auto"
            />
         </Container>
         <Link to="/">
            <Button sx={{ m: "10px", mb: "20px" }} variant="contained" color="primary">
               <KeyboardReturnIcon fontSize="small" sx={{ mr: "10px" }} />
               Back
            </Button>
         </Link>
      </>
   )
}

export default ClientTutorial
