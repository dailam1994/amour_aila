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
import { useAppointmentHistory } from "../../../hooks/admin/appointment/useAppointment.history"

const AppointmentUser = () => {
   const { isLoading, isError, error, data, isFetching } = useAppointmentHistory()
   let result
   let resultDate

   // If statement to handle fetch data
   if (data) {
      // Filtering through the data using the reduce method for user ID
      result = data.reduce((unique, o) => {
         if (!unique.some((obj) => obj.userUserID === o.userUserID)) {
            unique.push(o)
         }

         return unique
      }, [])

      // Filtering through the data using the reduce method for booking data && user ID
      resultDate = data.reduce((unique, o) => {
         if (!unique.some((obj) => obj.booking.date === o.booking.date && obj.userUserID === o.userUserID)) {
            unique.push(o)
         }

         return unique
      }, [])
   }

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
         ) : data || result ? (
            result.map((item) => {
               return (
                  <Accordion key={item.bookingBookingID}>
                     <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                        <Typography variant="subtitle2" color="primary">
                           <strong>
                              {item.user.lastName}, {item.user.firstName}
                           </strong>
                        </Typography>
                     </AccordionSummary>
                     {resultDate.map((i) => {
                        if (item.userUserID === i.userUserID)
                           return (
                              <Accordion key={i.bookingBookingID}>
                                 <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header">
                                    <Typography variant="subtitle2" color="secondary">
                                       <em>{new Date(i.booking.date).toDateString().substring(0, 10)}</em>
                                    </Typography>
                                 </AccordionSummary>
                                 {data.map((time) => {
                                    if (i.userUserID === time.userUserID && i.booking.date === time.booking.date)
                                       return (
                                          <Accordion key={time.bookingBookingID}>
                                             <AccordionDetails sx={{ my: 0, py: 0 }}>
                                                <AccordionSummary
                                                   expandIcon={<ExpandMoreIcon />}
                                                   aria-controls="panel1a-content"
                                                   id="panel1a-header"
                                                   sx={{ my: 0, py: 0 }}>
                                                   <Typography variant="subtitle2">
                                                      <strong style={{ color: "rgb(50, 53, 101)" }}>
                                                         {new Date(time.booking.startTime)
                                                            .toLocaleTimeString()
                                                            .substring(0, 5) + " "}
                                                         -
                                                         {" " +
                                                            new Date(time.booking.endTime)
                                                               .toLocaleTimeString()
                                                               .substring(0, 5)}
                                                      </strong>
                                                   </Typography>
                                                </AccordionSummary>
                                             </AccordionDetails>
                                             <Grid container spacing={2}>
                                                <Grid item xs={7}>
                                                   <AccordionDetails>
                                                      <AccordionSummary
                                                         aria-controls="panel1a-content"
                                                         id="panel1a-header">
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
                                                               {time.booking.firstService == "true" ? (
                                                                  <strong style={{ color: "green" }}>Yes</strong>
                                                               ) : (
                                                                  <em style={{ color: "red" }}>nope</em>
                                                               )}
                                                            </em>
                                                            <em>
                                                               Service 2:{" "}
                                                               {time.booking.secondService == "true" ? (
                                                                  <strong style={{ color: "green" }}>Yes</strong>
                                                               ) : (
                                                                  <em style={{ color: "red" }}>nope</em>
                                                               )}
                                                            </em>
                                                            <em>
                                                               Service 3:{" "}
                                                               {time.booking.thirdService == "true" ? (
                                                                  <strong style={{ color: "green" }}>Yes</strong>
                                                               ) : (
                                                                  <em style={{ color: "red" }}>nope</em>
                                                               )}
                                                            </em>
                                                            <em>
                                                               Service 4:{" "}
                                                               {time.booking.fourthService == "true" ? (
                                                                  <strong style={{ color: "green" }}>Yes</strong>
                                                               ) : (
                                                                  <em style={{ color: "red" }}>nope</em>
                                                               )}
                                                            </em>
                                                            <em>
                                                               Service 5:{" "}
                                                               {time.booking.fifthService == "true" ? (
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
                                                   <Link to={`/appointment/delete/${time.bookingBookingID}`}>
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
                                 })}
                              </Accordion>
                           )
                     })}
                  </Accordion>
               )
            })
         ) : null}
      </>
   )
}

export default AppointmentUser
