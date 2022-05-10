import React from "react"
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import {
   Accordion,
   AccordionDetails,
   AccordionSummary,
   Alert,
   Box,
   Button,
   CircularProgress,
   Container,
   TextField,
   Typography,
   Stack,
} from "@mui/material"
import { errorInput, useStyles } from "../../guest/guest.login"
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { useLogAllData } from "../../../hooks/admin/log/useLog.all"
import { useAddBlockip } from "../../../hooks/admin/blockip/useBlockip.add"

const LogAll = () => {
   const classes = useStyles()
   let log
   let logAction
   const { isLoading, isError, error, data, isFetching } = useLogAllData()

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm()

   const { mutate } = useAddBlockip()

   if (data) {
      if (document.getElementById("ip-add-error")) {
         // Removing alert boxes upon submission request
         document.getElementById("ip-add-error").style.display = "none"
      }

      // Filtering through the data using the reduce method for user ID
      log = data.reduce((unique, o) => {
         if (!unique.some((obj) => obj.ip === o.ip)) {
            unique.push(o)
         }

         return unique
      }, [])

      // Filtering through the data using the reduce method for booking data && user ID
      logAction = data.reduce((unique, o) => {
         if (!unique.some((obj) => obj.action === o.action && obj.ip === o.ip)) {
            unique.push(o)
         }

         return unique
      }, [])
   }

   // Function to handle form submission
   const onSubmit = (formData) => {
      // Reset alert displays
      document.getElementById("ip-add-success").style.display = "none"
      document.getElementById("ip-add-error").style.display = "none"

      mutate(formData)
   }

   return (
      <>
         <Stack sx={{ width: "100%" }}>
            <Alert id="ip-add-error" severity="error" style={{ display: "none" }}>
               <strong id="ip-add-error-message"></strong>
            </Alert>
            <Alert id="ip-add-success" severity="success" style={{ display: "none" }}>
               <strong>IP Blocked Successfully!</strong>
            </Alert>
         </Stack>
         <Typography sx={{ m: "10px" }} variant="h4">
            <strong>System Logs</strong>
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
                  color="warning"
                  type="submit"
                  sx={{ width: "50%" }}
                  style={{ textTransform: "none" }}>
                  Block
               </Button>
            </Box>
         </form>
         <Box
            sx={{
               display: "flex",
               justifyContent: "space-around",
               mt: "10px",
               mx: "10px",
            }}>
            <Link style={{ width: "100%" }} to={`/blockip/delete`}>
               <Button
                  sx={{ width: "100%" }}
                  variant="contained"
                  color="info"
                  type="submit"
                  style={{ textTransform: "none" }}>
                  Unblock
               </Button>
            </Link>
            <Link style={{ width: "100%" }} to={`/log/delete`}>
               <Button
                  variant="contained"
                  color="error"
                  type="submit"
                  sx={{ width: "100%" }}
                  style={{ textTransform: "none" }}>
                  Clear Logs
               </Button>
            </Link>
         </Box>
         <Box sx={{ m: "10px" }} style={{ maxHeight: 450, overflow: "auto" }}>
            {isLoading || isFetching ? (
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
            ) : data || log ? (
               log.map((item) => {
                  return (
                     <Accordion key={item.loggingID}>
                        <AccordionSummary
                           expandIcon={<ExpandMoreIcon />}
                           aria-controls="panel1a-content"
                           id="panel1a-header">
                           <Typography variant="subtitle2" color="primary">
                              IP Address: <strong style={{ color: "rgb(0,0,0)" }}>{item.ip}</strong>
                           </Typography>
                        </AccordionSummary>
                        {logAction.map((i) => {
                           if (item.ip === i.ip)
                              return (
                                 <Accordion key={i.loggingID}>
                                    <AccordionSummary
                                       expandIcon={<ExpandMoreIcon />}
                                       aria-controls="panel1a-content"
                                       id="panel1a-header">
                                       <Typography variant="caption" color="secondary">
                                          Method Performed: <strong style={{ color: "rgb(0,0,0)" }}>{i.action}</strong>
                                       </Typography>
                                    </AccordionSummary>
                                    {data.map((user) => {
                                       if (i.ip === user.ip && i.action === user.action)
                                          return (
                                             <Accordion key={user.loggingID}>
                                                <AccordionDetails sx={{ my: 1, py: 1 }}>
                                                   <Typography variant="subtitle2">
                                                      <em style={{ color: "rgb(50, 53, 101)" }}>
                                                         {new Date(user.timestamp).toUTCString()}
                                                      </em>
                                                   </Typography>
                                                   <Typography variant="subtitle2" color="primary">
                                                      Username:{" "}
                                                      <strong style={{ color: "#d32f2f" }}>{user.username}</strong>
                                                   </Typography>
                                                </AccordionDetails>
                                             </Accordion>
                                          )
                                    })}
                                 </Accordion>
                              )
                        })}
                     </Accordion>
                  )
               })
            ) : null}
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

export default LogAll
