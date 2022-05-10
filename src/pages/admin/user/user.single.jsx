import React, { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { Alert, Box, Button, Card, CardContent, CircularProgress, Container, Typography, Stack } from "@mui/material"
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn"
import { useUserData } from "../../../hooks/admin/user/useUser.single"

const UserSingle = () => {
   const { id } = useParams()
   const { isLoading, isError, error, data, isFetching } = useUserData(id)

   // If statement to handle fetched data
   useEffect(() => {
      if (data) {
         // Removing alert boxes upon submission request
         document.getElementById("user-single-error").style.display = "none"
      }
   }, [data])

   return (
      <>
         <Stack sx={{ width: "100%" }}>
            <Alert id="user-single-error" severity="error" style={{ display: "none" }}>
               <strong id="user-single-error-message"></strong>
            </Alert>
         </Stack>
         <Typography sx={{ m: "10px" }} variant="h4">
            <strong>Client</strong>
         </Typography>
         {isLoading || isFetching ? (
            <Box sx={{ display: "flex", justifyContent: "center", m: 2 }}>
               <CircularProgress color="secondary" />
            </Box>
         ) : isError ? (
            <Container sx={{ display: "flex", justifyContent: "center" }}>
               <Typography style={{ color: "white" }}>Error: {error.message}</Typography>
            </Container>
         ) : data ? (
            <Card key={data.userID} sx={{ m: "10px" }}>
               <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                     UserID: {data.userID}
                  </Typography>
                  <Typography variant="h5" component="div">
                     {data.firstName} {data.lastName}
                  </Typography>
                  <Typography variant="body2" color="primary">
                     {new Date(data.dateOfBirth).toLocaleDateString()}
                  </Typography>
                  <Typography variant="body2" color="secondary">
                     Username: {data.username}
                  </Typography>
                  <Typography variant="body2" color="secondary">
                     Email: {data.email}
                  </Typography>
               </CardContent>
               <Link to="/user/all">
                  <Button sx={{ m: "10px", mb: "20px" }} variant="contained" color="primary">
                     <KeyboardReturnIcon fontSize="small" sx={{ mr: "10px" }} />
                     Back
                  </Button>
               </Link>
            </Card>
         ) : null}
      </>
   )
}

export default UserSingle
