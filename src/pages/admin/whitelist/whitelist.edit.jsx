import React, { useEffect } from "react"
import { useForm } from "react-hook-form"
import { Link, useParams } from "react-router-dom"
import { Alert, Box, Button, CircularProgress, Container, Stack, TextField, Typography } from "@mui/material"
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn"
import { errorInput, useStyles } from "../../guest/guest.login"
import { useSingleWhitelistData } from "../../../hooks/admin/whitelist/useWhitelist.single"
import { useEditWhitelist } from "../../../hooks/admin/whitelist/useWhitelist.edit"

const WhitelistEdit = () => {
   const classes = useStyles()
   const { id } = useParams()

   const { isLoading, isError, error, data, isFetching } = useSingleWhitelistData(id)

   // If statement to handle fetched data
   useEffect(() => {
      // Removing alert boxes upon submission request
      document.getElementById("whitelist-edit-error").style.display = "none"
   }, [data])

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm()

   const { mutate } = useEditWhitelist()

   // Function to handle form submission
   const onSubmit = (formData) => {
      // Reset alert displays
      document.getElementById("whitelist-edit-success").style.display = "none"
      document.getElementById("whitelist-edit-error").style.display = "none"

      // Adding additional data to formData Object
      formData.whitelistID = id
      mutate(formData)
   }

   return (
      <>
         <Stack sx={{ width: "100%" }}>
            <Alert id="whitelist-edit-error" severity="error" style={{ display: "none" }}>
               <strong id="whitelist-edit-error-message"></strong>
            </Alert>
            <Alert id="whitelist-edit-success" severity="success" style={{ display: "none" }}>
               <strong>Edit Successfully!</strong>
            </Alert>
         </Stack>
         <Typography sx={{ m: "10px" }} variant="h4">
            <strong>Edit IP Address</strong>
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
            <>
               <form
                  onSubmit={handleSubmit(onSubmit)}
                  style={{
                     display: "flex",
                     flexDirection: "column",
                     backgroundColor: "rgb(50,53,101)",
                     padding: "20px 10px",
                     margin: "10px 30px",
                     borderRadius: "10px",
                  }}>
                  <TextField
                     id="ip"
                     color="primary"
                     sx={{ m: "10px" }}
                     ref={register}
                     variant="outlined"
                     name="ip"
                     defaultValue={data.ip}
                     label="IP Address"
                     InputLabelProps={{ className: classes.input }}
                     InputProps={{
                        className: classes.input,
                     }}
                     {...register("ip", {
                        required: true,
                        pattern:
                           /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/i,
                     })}
                  />
                  {errors.ip && <span style={errorInput}>! Invalid Format Try 0.0.0.0 - 255.255.255.255 ...</span>}
                  <Box
                     sx={{
                        display: "flex",
                        justifyContent: "center",
                        mt: "10px",
                     }}>
                     <Button
                        variant="contained"
                        color="success"
                        type="submit"
                        sx={{ width: "50%" }}
                        style={{ textTransform: "none" }}>
                        Confirm
                     </Button>
                  </Box>
               </form>
            </>
         ) : null}
         <Link to="/whitelist/all">
            <Button sx={{ m: "10px", mb: "20px" }} variant="contained" color="primary">
               <KeyboardReturnIcon fontSize="small" sx={{ mr: "10px" }} />
               Back
            </Button>
         </Link>
      </>
   )
}

export default WhitelistEdit
