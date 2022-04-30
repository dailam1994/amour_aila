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
   Paper,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableRow,
   Typography,
} from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { useScheduleViewData } from "../../../hooks/admin/schedule/useSchedule.view"
import { useBookingsData } from "../../../hooks/client/booking/useBooking.all"

const BookingAvailability = () => {
   const {
      isLoading: scheduleIsLoading,
      isError: scheduleIsError,
      error: scheduleError,
      data: scheduleData,
      isFetching: scheduleIsFetching,
   } = useScheduleViewData()

   const {
      isLoading: bookingIsLoading,
      isFetching: bookingIsFetching,
      isError: bookingIsError,
      error: bookingError,
      data: bookingData,
   } = useBookingsData()

   return (
      <>
         <Typography sx={{ m: "10px" }} variant="h4">
            <strong>ALL Schedules</strong>
         </Typography>
         <Box sx={{ m: "10px" }}>
            <TableContainer component={Paper} style={{ maxHeight: 373, overflow: "auto" }}>
               <Table aria-label="simple table">
                  <TableBody>
                     {scheduleIsLoading || scheduleIsFetching ? (
                        <TableRow sx={{ display: "flex", justifyContent: "center" }}>
                           <TableCell>
                              <CircularProgress color="secondary" />
                           </TableCell>
                        </TableRow>
                     ) : scheduleIsError ? (
                        <TableRow sx={{ display: "flex", justifyContent: "center" }}>
                           <TableCell>
                              <Typography style={{ color: "rgb(0,0,0)" }}>Error: {scheduleError.message}</Typography>
                           </TableCell>
                        </TableRow>
                     ) : scheduleData ? (
                        scheduleData.map((scheduleItem) => {
                           return (
                              <TableRow
                                 sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                 key={scheduleItem.availabilityID}>
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
                                             new Date(scheduleItem.date).toDateString() ? (
                                                <>
                                                   <strong>
                                                      <em>
                                                         {new Date(scheduleItem.startTime)
                                                            .toLocaleTimeString()
                                                            .substring(0, 5) +
                                                            "-" +
                                                            new Date(scheduleItem.endTime)
                                                               .toLocaleTimeString()
                                                               .substring(0, 5)}
                                                      </em>
                                                      {" | " + new Date(scheduleItem.date).toDateString()}
                                                   </strong>
                                                </>
                                             ) : (
                                                <>
                                                   <em>
                                                      {new Date(scheduleItem.startTime)
                                                         .toLocaleTimeString()
                                                         .substring(0, 5) +
                                                         "-" +
                                                         new Date(scheduleItem.endTime)
                                                            .toLocaleTimeString()
                                                            .substring(0, 5)}
                                                   </em>
                                                   {" | " + new Date(scheduleItem.date).toDateString()}
                                                </>
                                             )}
                                          </Typography>
                                       </AccordionSummary>
                                       {bookingIsLoading || bookingIsFetching ? (
                                          <Container sx={{ my: "10px", display: "flex", justifyContent: "center" }}>
                                             <Box>
                                                <CircularProgress color="secondary" />
                                             </Box>
                                          </Container>
                                       ) : bookingIsError ? (
                                          <Container sx={{ display: "flex", justifyContent: "center" }}>
                                             <Box>
                                                <Typography style={{ color: "rgb(0,0,0)" }}>
                                                   Error {bookingError.message}
                                                </Typography>
                                             </Box>
                                          </Container>
                                       ) : bookingData ? (
                                          bookingData.map((bookingItem) => {
                                             if (
                                                new Date(scheduleItem.date).toDateString() ===
                                                new Date(bookingItem.date).toDateString()
                                             ) {
                                                return (
                                                   <React.Fragment key={bookingItem.bookingID}>
                                                      <AccordionDetails>
                                                         <AccordionSummary
                                                            aria-controls="panel1a-content"
                                                            id="panel1a-header"
                                                            sx={{ minHeight: 0, height: 0, my: 0, py: 0 }}>
                                                            <Typography variant="subtitle2" color="secondary">
                                                               {new Date(scheduleItem.date).toDateString() ===
                                                               new Date(bookingItem.date).toDateString() ? (
                                                                  <>
                                                                     <strong>Booked</strong>
                                                                     {": " +
                                                                        new Date(bookingItem.startTime)
                                                                           .toLocaleTimeString()
                                                                           .substring(0, 5) +
                                                                        "-" +
                                                                        new Date(bookingItem.endTime)
                                                                           .toLocaleTimeString()
                                                                           .substring(0, 5)}
                                                                  </>
                                                               ) : null}
                                                            </Typography>
                                                         </AccordionSummary>
                                                      </AccordionDetails>
                                                   </React.Fragment>
                                                )
                                             }
                                          })
                                       ) : null}
                                       <Link
                                          style={{ display: "flex", justifyContent: "flex-end" }}
                                          to={`/booking/availability/${
                                             new Date(scheduleItem.date).toDateString() +
                                             " " +
                                             new Date(scheduleItem.startTime).toLocaleTimeString().substring(0, 5) +
                                             "-" +
                                             new Date(scheduleItem.endTime).toLocaleTimeString().substring(0, 5)
                                          }`}>
                                          <Button size="small" variant="contained" color="success">
                                             Book
                                          </Button>
                                       </Link>
                                    </Accordion>
                                 </TableCell>
                              </TableRow>
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

export default BookingAvailability
