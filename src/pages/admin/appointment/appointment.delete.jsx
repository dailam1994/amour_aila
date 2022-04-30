import React, { useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Alert, Box, Button, CircularProgress, Modal, Typography, Stack } from "@mui/material"
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn"
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"
import { useAppointmentBookingData } from "../../../hooks/admin/appointment/useAppointment.booking"
import { useDeleteAppointment } from "../../../hooks/admin/appointment/useAppointment.delete"

// Custom styling
const style = {
   position: "absolute",
   top: "40%",
   left: "50%",
   transform: "translate(-50%, -50%)",
   width: "70%",
   bgcolor: "background.paper",
   border: "2px solid #000",
   boxShadow: 24,
   p: 4,
}

const AppointmentDelete = () => {
   const { id } = useParams()
   const { isLoading, isError, error, data, isFetching } = useAppointmentBookingData(id)

   const [open, setOpen] = useState(true)
   const handleOpen = () => setOpen(true)
   const handleClose = () => setOpen(false)

   const { mutate } = useDeleteAppointment()

   // Function to handle the delete functionality
   const handleDelete = (event) => {
      event.preventDefault()
      const booking = { bookingID: id }
      mutate(booking)
   }

   return (
      <Modal
         open={open}
         onClose={handleOpen}
         style={{ backgroundColor: "rgb(50,53,101)" }}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description">
         {isLoading || isFetching ? (
            <Box
               sx={{
                  style,
                  display: "flex",
                  justifyContent: "center",
                  mt: 40,
               }}>
               <CircularProgress color="secondary" />
            </Box>
         ) : isError ? (
            <Container sx={{ display: "flex", justifyContent: "center" }}>
               <Typography style={{ color: "white" }}>Error: {error.message}</Typography>
            </Container>
         ) : data ? (
            <Box>
               <Stack sx={{ width: "100%" }}>
                  <Alert id="booking-delete-error" severity="error" style={{ display: "none" }}>
                     <strong id="booking-delete-error-message"></strong>
                  </Alert>
                  <Alert id="booking-delete-success" severity="success" style={{ display: "none" }}>
                     <strong>Deleted Successfully!</strong>
                  </Alert>
               </Stack>
               <Box sx={style}>
                  <Typography id="modal-modal-title" variant="h6" color="error">
                     <em style={{ color: "rgb(0,0,0)" }}>
                        {data[0].user.lastName}, {data[0].user.firstName}
                        <br />
                     </em>
                     <strong style={{ color: "blue" }}>
                        {" " + new Date(data[0].booking.date).toDateString().substring(0, 10) + " "}
                        {new Date(data[0].booking.startTime).toLocaleTimeString().substring(0, 5)}-
                        {new Date(data[0].booking.endTime).toLocaleTimeString().substring(0, 5) + " "}
                     </strong>
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }} color="error">
                     Are you sure you want this booking deleted?
                  </Typography>
                  <Button
                     variant="contained"
                     size="small"
                     sx={{ m: "10px", mt: "30px" }}
                     color="error"
                     onClick={handleDelete}>
                     Yes
                     <DeleteForeverIcon fontSize="small" sx={{ ml: 1 }} />
                  </Button>
                  <Link to="/appointment">
                     <Button
                        variant="contained"
                        size="small"
                        sx={{ m: "10px", mt: "30px" }}
                        color="primary"
                        onClick={handleClose}>
                        No
                        <KeyboardReturnIcon fontSize="small" sx={{ ml: "10px" }} />
                     </Button>
                  </Link>
               </Box>
            </Box>
         ) : null}
      </Modal>
   )
}

export default AppointmentDelete
