import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Alert, Box, Button, Modal, Typography, Stack } from "@mui/material"
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn"
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"
import { useClearLog } from "../../../hooks/admin/log/useLog.clear"

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

const LogDelete = () => {
   const [open, setOpen] = useState(true)
   const handleOpen = () => setOpen(true)
   const handleClose = () => setOpen(false)

   const { mutate } = useClearLog()

   // Function to handle delete functionality
   const handleDelete = (event) => {
      event.preventDefault()
      mutate(event)
   }

   return (
      <Modal
         open={open}
         onClose={handleOpen}
         style={{ backgroundColor: "rgb(50,53,101)" }}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description">
         <Box>
            <Stack sx={{ width: "100%" }}>
               <Alert id="log-clear-error" severity="error" style={{ display: "none" }}>
                  <strong id="log-clear-error-message"></strong>
               </Alert>
               <Alert id="log-clear-success" severity="success" style={{ display: "none" }}>
                  <strong>Deleted Successfully!</strong>
               </Alert>
            </Stack>
            <Box sx={style}>
               <Typography id="modal-modal-title" variant="h6" color="error">
                  Clear <strong style={{ color: "blue" }}>ALL</strong> Logs
               </Typography>
               <Typography id="modal-modal-description" sx={{ mt: 2 }} color="error">
                  Are you sure you want to do this?
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
               <Link to="/log/all">
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
      </Modal>
   )
}

export default LogDelete
