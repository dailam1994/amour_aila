import React from "react"
import { Link } from "react-router-dom"
import {
   Accordion,
   AccordionDetails,
   AccordionSummary,
   Box,
   Button,
   CircularProgress,
   Container,
   Grid,
   Typography,
} from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { useAppointmentToday } from "../../../hooks/admin/appointment/useAppointment.today"

const AppointmentToday = () => {
   const { isLoading, isError, error, data, isFetching } = useAppointmentToday()
   console.log(data)

   return (
      <>
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
         ) : data ? (
            data.map((item) => {
               return (
                  <Accordion key={item.bookingBookingID}>
                     <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                        <Typography variant="subtitle2" color="primary">
                           <strong>
                              {new Date(item.booking.startTime).toLocaleTimeString().substring(0, 5) + " "}-
                              {" " + new Date(item.booking.endTime).toLocaleTimeString().substring(0, 5)}
                           </strong>
                        </Typography>
                     </AccordionSummary>
                     <Grid container spacing={2}>
                        <Grid item xs={7}>
                           <AccordionDetails>
                              <AccordionSummary
                                 aria-controls="panel1a-content"
                                 id="panel1a-header"
                                 sx={{ minHeight: 0, height: 0, my: 0, py: 0 }}>
                                 <Typography variant="subtitle1">
                                    <strong style={{ color: "rgb(50, 53, 101)" }}>
                                       {item.user.lastName}, {item.user.firstName}
                                    </strong>
                                 </Typography>
                              </AccordionSummary>
                           </AccordionDetails>
                           <AccordionDetails>
                              <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                                 <Typography
                                    variant="subtitle2"
                                    sx={{
                                       display: "flex",
                                       flexDirection: "column",
                                       mt: "-10px",
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
                        </Grid>
                        <Grid
                           item
                           xs={5}
                           sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center",
                           }}>
                           <Link to={`/appointment/edit/${item.booking.bookingID}`}>
                              <Button
                                 size="small"
                                 variant="contained"
                                 color="warning"
                                 sx={{ m: 1, width: "100px" }}
                                 style={{ textTransform: "none" }}>
                                 Edit
                              </Button>
                           </Link>
                           <Link to={`/appointment/delete/${item.bookingBookingID}`}>
                              <Button
                                 size="small"
                                 variant="contained"
                                 color="error"
                                 sx={{ m: 1, width: "100px" }}
                                 style={{ textTransform: "none" }}>
                                 Delete
                              </Button>
                           </Link>
                        </Grid>
                     </Grid>
                  </Accordion>
               )
            })
         ) : null}
      </>
   )
}

export default AppointmentToday
