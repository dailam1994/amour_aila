import React from "react"
import {
   Box,
   Button,
   Container,
   Paper,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableRow,
   Typography,
} from "@mui/material"
import AppointmentToday from "./appointment.today"
import AppointmentUpcoming from "./appointment.upcoming"
import AppointmentHistory from "./appointment.history"
import AppointmentUser from "./appointment.user"

const AdminAppointment = () => {
   // Functions to handle Single Page Display of multiple components
   const handleToday = () => {
      document.getElementById("appointment-today").style.display = "block"
      document.getElementById("appointment-upcoming").style.display = "none"
      document.getElementById("appointment-history").style.display = "none"
   }

   const handleUpcoming = () => {
      document.getElementById("appointment-today").style.display = "none"
      document.getElementById("appointment-upcoming").style.display = "block"
      document.getElementById("appointment-history").style.display = "none"
   }

   const handleHistory = () => {
      document.getElementById("appointment-today").style.display = "none"
      document.getElementById("appointment-upcoming").style.display = "none"
      document.getElementById("appointment-history").style.display = "block"
      document.getElementById("appointment-date").style.display = "block"
      document.getElementById("appointment-user").style.display = "none"
   }

   const handleUser = () => {
      document.getElementById("appointment-today").style.display = "none"
      document.getElementById("appointment-upcoming").style.display = "none"
      document.getElementById("appointment-history").style.display = "block"
      document.getElementById("appointment-date").style.display = "none"
      document.getElementById("appointment-user").style.display = "block"
   }

   return (
      <>
         <Typography sx={{ m: "10px" }} variant="h4">
            <strong>All Appointments</strong>
         </Typography>
         <Box sx={{ m: "10px" }}>
            <Container sx={{ display: "flex", justifyContent: "space-between" }}>
               <Button variant="contained" color="success" onClick={handleToday}>
                  Today
               </Button>
               <Button variant="contained" color="info" onClick={handleUpcoming}>
                  Upcoming
               </Button>
               <Button variant="contained" color="secondary" onClick={handleHistory}>
                  History
               </Button>
            </Container>
            <TableContainer component={Paper} style={{ maxHeight: 445, overflow: "auto" }} sx={{ mt: 1 }}>
               <Table aria-label="simple table">
                  <TableBody>
                     <TableRow>
                        <TableCell id="appointment-today" style={{ display: "block" }}>
                           <AppointmentToday />
                        </TableCell>
                        <TableCell id="appointment-upcoming" style={{ display: "none" }}>
                           <AppointmentUpcoming />
                        </TableCell>
                        <TableCell id="appointment-history" style={{ display: "none" }}>
                           <Container sx={{ display: "flex", justifyContent: "space-around", mb: "10px" }}>
                              <Button
                                 size="small"
                                 variant="text"
                                 color="primary"
                                 onClick={handleHistory}
                                 sx={{ width: 1, textTransform: "none" }}>
                                 by Date
                              </Button>
                              <Button
                                 size="small"
                                 variant="text"
                                 color="warning"
                                 onClick={handleUser}
                                 sx={{ width: 1, textTransform: "none" }}>
                                 by User
                              </Button>
                           </Container>
                           <Box id="appointment-date" style={{ display: "none" }}>
                              <AppointmentHistory />
                           </Box>
                           <Box id="appointment-user" style={{ display: "none" }}>
                              <AppointmentUser />
                           </Box>
                        </TableCell>
                     </TableRow>
                  </TableBody>
               </Table>
            </TableContainer>
         </Box>
      </>
   )
}

export default AdminAppointment
