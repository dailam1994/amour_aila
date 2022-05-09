import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import {
   Alert,
   Box,
   Button,
   CircularProgress,
   Container,
   FormControl,
   InputLabel,
   MenuItem,
   Typography,
   Select,
   Stack,
} from "@mui/material"
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn"
import { errorInput, useStyles } from "../../guest/guest.login"
import { useBlockipAllData } from "../../../hooks/admin/blockip/useBlockip.all"
import { useDeleteBlockip } from "../../../hooks/admin/blockip/useBlockip.delete"

const BlockipDelete = () => {
   const classes = useStyles()
   const [value, setValue] = useState("")

   const { data } = useBlockipAllData()

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm()

   const { mutate } = useDeleteBlockip()

   // Function to handle form submission
   const onSubmit = (formData) => {
      // Reset alert displays
      document.getElementById("ip-delete-success").style.display = "none"
      document.getElementById("ip-delete-error").style.display = "none"

      mutate(formData)
   }

   return (
      <>
         <Stack sx={{ width: "100%" }}>
            <Alert id="ip-delete-error" severity="error" style={{ display: "none" }}>
               <strong id="ip-delete-error-message"></strong>
            </Alert>
            <Alert id="ip-delete-success" severity="success" style={{ display: "none" }}>
               <strong>IP Unblocked Successfully!</strong>
            </Alert>
         </Stack>
         <Typography sx={{ m: "10px" }} variant="h4">
            <strong>Unblock IP Address</strong>
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
            <FormControl fullWidth>
               <InputLabel id="ip-address-select-label">IP Address</InputLabel>

               <Select
                  labelId="ip-address-select-label"
                  id="ip"
                  name="ip"
                  value={value}
                  label="IP Address"
                  inputProps={{
                     className: classes.input,
                  }}
                  {...register("ip")}
                  onChange={(event) => setValue(event.target.value)}>
                  {data
                     ? data.map((item) => {
                          return (
                             <MenuItem key={item.ip} value={item.ip}>
                                {item.ip}
                             </MenuItem>
                          )
                       })
                     : null}
               </Select>
            </FormControl>
            {errors.ip && <span style={errorInput}>! Please pick one ...</span>}
            <Box
               sx={{
                  display: "flex",
                  justifyContent: "center",
                  mt: "10px",
               }}>
               <Button
                  variant="contained"
                  color="success"
                  type="submit"
                  sx={{ width: "50%" }}
                  style={{ textTransform: "none" }}>
                  Unblock
               </Button>
            </Box>
         </form>
         <Link to="/log/all">
            <Button sx={{ m: "10px", mb: "20px" }} variant="contained" color="primary">
               <KeyboardReturnIcon fontSize="small" sx={{ mr: "10px" }} />
               Back
            </Button>
         </Link>
      </>
   )
}

export default BlockipDelete
