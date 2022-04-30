import React from "react"
import {
   Accordion,
   AccordionDetails,
   AccordionSummary,
   Box,
   CircularProgress,
   Paper,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableRow,
   Typography,
} from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { useSessionData } from "../../../hooks/client/useClient.session"
import { useAppointmentUserData } from "../../../hooks/client/appointment/useAppointment.user"

const AppointmentUser = () => {
   let id

   const { data: sessionData } = useSessionData()

   // If statement to handle session data for user
   if (sessionData) {
      id = sessionData.user.userId
   }

   const { isLoading, isError, error, data, isFetching } = useAppointmentUserData(id)

   return (
      <>
         <Typography sx={{ m: "10px" }} variant="h4">
            <strong>My Appointments</strong>
         </Typography>
         <Box sx={{ m: "10px" }}>
            <TableContainer component={Paper} style={{ maxHeight: 373, overflow: "auto" }}>
               <Table aria-label="simple table">
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
                              <Typography style={{ color: "rgb(0,0,0)" }}>Error: {error.message}</Typography>
                           </TableCell>
                        </TableRow>
                     ) : data ? (
                        data.map((item) => {
                           return (
                              <React.Fragment key={item.booking.bookingID}>
                                 <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                    <TableCell
                                       component="th"
                                       scope="row"
                                       sx={{ my: 0, py: 0, px: "5px", textAlign: "center" }}>
                                       <Accordion>
                                          <AccordionSummary
                                             expandIcon={<ExpandMoreIcon />}
                                             aria-controls="panel1a-content"
                                             id="panel1a-header">
                                             <Typography variant="subtitle2" color="primary">
                                                {new Date().toDateString() ===
                                                new Date(item.booking.date).toDateString() ? (
                                                   <strong>{new Date(item.booking.date).toDateString()}</strong>
                                                ) : (
                                                   <>{new Date(item.booking.date).toDateString()}</>
                                                )}
                                             </Typography>
                                          </AccordionSummary>
                                          <AccordionDetails>
                                             <AccordionSummary
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                                sx={{ minHeight: 0, height: 0, my: 0, py: 0 }}>
                                                <Typography variant="subtitle1">
                                                   <strong>Booked</strong>
                                                   {": " +
                                                      new Date(item.booking.startTime)
                                                         .toLocaleTimeString()
                                                         .substring(0, 5) +
                                                      "-" +
                                                      new Date(item.booking.endTime)
                                                         .toLocaleTimeString()
                                                         .substring(0, 5)}
                                                </Typography>
                                             </AccordionSummary>
                                          </AccordionDetails>
                                          <AccordionDetails>
                                             <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                                                <Typography
                                                   variant="subtitle2"
                                                   color="secondary"
                                                   sx={{
                                                      display: "flex",
                                                      flexDirection: "column",
                                                      mt: "-20px",
                                                      p: 0,
                                                   }}
                                                   textAlign="left">
                                                   <em>
                                                      Service 1:{" "}
                                                      {item.booking.firstService == "true" ? (
                                                         <strong style={{ color: "green" }}>Yes</strong>
                                                      ) : (
                                                         <em style={{ color: "red" }}>nope</em>
                                                      )}
                                                   </em>
                                                   <em>
                                                      Service 2:{" "}
                                                      {item.booking.secondService == "true" ? (
                                                         <strong style={{ color: "green" }}>Yes</strong>
                                                      ) : (
                                                         <em style={{ color: "red" }}>nope</em>
                                                      )}
                                                   </em>
                                                   <em>
                                                      Service 3:{" "}
                                                      {item.booking.thirdService == "true" ? (
                                                         <strong style={{ color: "green" }}>Yes</strong>
                                                      ) : (
                                                         <em style={{ color: "red" }}>nope</em>
                                                      )}
                                                   </em>
                                                   <em>
                                                      Service 4:{" "}
                                                      {item.booking.fourthService == "true" ? (
                                                         <strong style={{ color: "green" }}>Yes</strong>
                                                      ) : (
                                                         <em style={{ color: "red" }}>nope</em>
                                                      )}
                                                   </em>
                                                   <em>
                                                      Service 5:{" "}
                                                      {item.booking.fifthService == "true" ? (
                                                         <strong style={{ color: "green" }}>Yes</strong>
                                                      ) : (
                                                         <em style={{ color: "red" }}>nope</em>
                                                      )}
                                                   </em>
                                                </Typography>
                                             </AccordionSummary>
                                          </AccordionDetails>
                                       </Accordion>
                                    </TableCell>
                                 </TableRow>
                              </React.Fragment>
                           )
                        })
                     ) : null}
                  </TableBody>
               </Table>
            </TableContainer>
         </Box>
      </>
   )
}

export default AppointmentUser
