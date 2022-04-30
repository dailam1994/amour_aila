import React, { useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Alert, Box, Button, CircularProgress, Modal, Typography, Stack } from "@mui/material"
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn"
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"
import { useUserData } from "../../../hooks/admin/user/useUser.single"
import { useDeleteUser } from "../../../hooks/admin/user/useUser.delete"

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

const UserDelete = () => {
   const { id } = useParams()
   const { isLoading, isError, error, data, isFetching } = useUserData(id)
   const [open, setOpen] = useState(true)
   const handleOpen = () => setOpen(true)
   const handleClose = () => setOpen(false)

   const { mutate } = useDeleteUser()

   // Function to handle delete functionality
   const handleDelete = (event) => {
      event.preventDefault()
      const user = { userID: id }
      mutate(user)
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
                  <Alert id="user-delete-error" severity="error" style={{ display: "none" }}>
                     <strong id="user-delete-error-message"></strong>
                  </Alert>
                  <Alert id="user-delete-success" severity="success" style={{ display: "none" }}>
                     <strong>Deleted Successfully!</strong>
                  </Alert>
               </Stack>
               <Box sx={style}>
                  <Typography id="modal-modal-title" variant="h6" color="error">
                     <strong style={{ color: "blue" }}>{data.firstName}'s</strong> Account
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }} color="error">
                     Are you sure you want this user account deleted?
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
                  <Link to="/user/all">
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

export default UserDelete
