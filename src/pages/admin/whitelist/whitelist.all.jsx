import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import {
   Alert,
   Box,
   Button,
   CircularProgress,
   Container,
   Paper,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
   TextField,
   Typography,
   Stack,
} from "@mui/material"
import { errorInput, useStyles } from "../../guest/guest.login"
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn"
import { useWhitelistAllData } from "../../../hooks/admin/whitelist/useWhitelist.all"
import { useAddWhitelist } from "../../../hooks/admin/whitelist/useWhitelist.add"

const WhitelistAll = () => {
   const classes = useStyles()
   const { isLoading, isError, error, data, isFetching } = useWhitelistAllData()

   useEffect(() => {
      if (data) {
         if (document.getElementById("whitelist-all-error")) {
            // Removing alert boxes upon submission request
            document.getElementById("whitelist-all-error").style.display = "none"
         }
      }
   }, [data])

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm()

   const { mutate } = useAddWhitelist()

   // Function to handle form submission
   const onSubmit = (formData) => {
      // Reset alert displays
      document.getElementById("whitelist-add-success").style.display = "none"
      document.getElementById("whitelist-add-error").style.display = "none"

      mutate(formData)
   }

   return (
      <>
         <Stack sx={{ width: "100%" }}>
            <Alert id="whitelist-add-error" severity="error" style={{ display: "none" }}>
               <strong id="whitelist-add-error-message"></strong>
            </Alert>
            <Alert id="whitelist-all-error" severity="error" style={{ display: "none" }}>
               <strong id="whitelist-all-error-message"></strong>
            </Alert>
            <Alert id="whitelist-add-success" severity="success" style={{ display: "none" }}>
               <strong>Whitelisted Successfully!</strong>
            </Alert>
         </Stack>
         <Typography sx={{ m: "10px" }} variant="h4">
            <strong>White List</strong>
         </Typography>
         <form
            onSubmit={handleSubmit(onSubmit)}
            style={{
               display: "flex",
               flexDirection: "column",
               backgroundColor: "rgb(50,53,101)",
               padding: "20px 10px",
               margin: "10px 10px",
               borderRadius: "10px",
            }}>
            <TextField
               id="ip"
               sx={{ m: "10px" }}
               variant="outlined"
               name="ip"
               label="IPv4 Address"
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
                  color="info"
                  type="submit"
                  sx={{ width: "50%" }}
                  style={{ textTransform: "none" }}>
                  Confirm
               </Button>
            </Box>
         </form>
         <Box
            sx={{
               display: "flex",
               justifyContent: "center",
               mt: "10px",
               mx: "10px",
            }}>
            <Link style={{ width: "50%" }} to={"/whitelist/delete"}>
               <Button
                  sx={{ width: "100%" }}
                  variant="contained"
                  color="error"
                  type="submit"
                  style={{ textTransform: "none" }}>
                  Remove
               </Button>
            </Link>
         </Box>
         <Typography color="primary" sx={{ m: "10px" }} variant="subtitle1">
            <strong>IPv4 Addresses</strong>
         </Typography>
         <Box sx={{ display: "flex", flexWrap: "wrap", m: "10px" }} style={{ maxHeight: 450, overflow: "auto" }}>
            <TableContainer component={Paper} style={{ maxHeight: 373, overflow: "auto" }}>
               <Table aria-label="simple table">
                  <TableHead>
                     <TableRow>
                        <TableCell style={{ color: "rgb(0,0,0)" }}>
                           <strong>Clients</strong>
                        </TableCell>
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     {isLoading || isFetching ? (
                        <TableRow sx={{ display: "flex", justifyContent: "center" }}>
                           <TableCell>
                              <CircularProgress color="secondary" />
                           </TableCell>
                        </TableRow>
                     ) : isError ? (
                        <TableRow sx={{ display: "flex", justifyContent: "center" }}>
                           <TableCell>
                              <Typography style={{ color: "rgb(0,0,0)" }}>Error {error.message}</Typography>
                           </TableCell>
                        </TableRow>
                     ) : data ? (
                        data.map((item) => {
                           return (
                              <TableRow
                                 sx={{
                                    "&:last-child td, &:last-child th": {
                                       border: 0,
                                    },
                                 }}
                                 key={item.whitelistID}>
                                 <TableCell
                                    component="th"
                                    scope="row"
                                    sx={{
                                       my: 0,
                                       py: 0,
                                       px: "5px",
                                       textAlign: "center",
                                    }}>
                                    <Typography sx={{ m: "10px" }} variant="caption" key={item.ip}>
                                       <strong>{item.ip}</strong>
                                    </Typography>
                                 </TableCell>
                                 <TableCell
                                    component="th"
                                    scope="row"
                                    sx={{
                                       display: "flex",
                                       justifyContent: "flex-end",
                                       pr: "5px",
                                       my: 0,
                                       py: 0,
                                    }}>
                                    <Link to={`/whitelist/edit/${item.whitelistID}`}>
                                       <Button
                                          size="small"
                                          variant="contained"
                                          color="warning"
                                          style={{ textTransform: "none" }}>
                                          Edit
                                       </Button>
                                    </Link>
                                 </TableCell>
                              </TableRow>
                           )
                        })
                     ) : null}
                  </TableBody>
               </Table>
            </TableContainer>
            {/* {isLoading || isFetching ? (
               <Container sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
                  <Box>
                     <CircularProgress color="secondary" />
                  </Box>
               </Container>
            ) : isError ? (
               <Container sx={{ display: "flex", justifyContent: "center" }}>
                  <Box>
                     <Typography style={{ color: "rgb(0,0,0)" }}>Error: {error.message}</Typography>
                  </Box>
               </Container>
            ) : 
            ) : null} */}
         </Box>
         <Link to="/settings">
            <Button sx={{ m: "10px", mb: "20px" }} variant="contained" color="primary">
               <KeyboardReturnIcon fontSize="small" sx={{ mr: "10px" }} />
               Back
            </Button>
         </Link>
      </>
   )
}

export default WhitelistAll
