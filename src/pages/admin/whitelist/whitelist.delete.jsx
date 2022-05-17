import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import { Alert, Box, Button, FormControl, InputLabel, MenuItem, Typography, Select, Stack } from "@mui/material"
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn"
import { errorInput, useStyles } from "../../guest/guest.login"
import { useWhitelistAllData } from "../../../hooks/admin/whitelist/useWhitelist.all"
import { useDeleteWhitelist } from "../../../hooks/admin/whitelist/useWhitelist.delete"

const WhitelistDelete = () => {
   const classes = useStyles()
   const [value, setValue] = useState("")

   const { data } = useWhitelistAllData()

   useEffect(() => {
      if (data) {
         // Removing alert boxes upon submission request
         document.getElementById("whitelist-delete-error").style.display = "none"
         console.log(data)
      }
   }, [data])

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm()

   const { mutate } = useDeleteWhitelist()

   // Function to handle form submission
   const onSubmit = (formData) => {
      // Reset alert displays
      document.getElementById("whitelist-delete-success").style.display = "none"
      document.getElementById("whitelist-delete-error").style.display = "none"

      mutate(formData)
   }

   return (
      <>
         <Stack sx={{ width: "100%" }}>
            <Alert id="whitelist-delete-error" severity="error" style={{ display: "none" }}>
               <strong id="whitelist-delete-error-message"></strong>
            </Alert>
            <Alert id="whitelist-delete-success" severity="success" style={{ display: "none" }}>
               <strong>White List Removed Successfully!</strong>
            </Alert>
         </Stack>
         <Typography sx={{ m: "10px" }} variant="h4">
            <strong>Remove White List</strong>
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
                  color="error"
                  type="submit"
                  sx={{ width: "50%" }}
                  style={{ textTransform: "none" }}>
                  Remove
               </Button>
            </Box>
         </form>
         <Link to="/whitelist/all">
            <Button sx={{ m: "10px", mb: "20px" }} variant="contained" color="primary">
               <KeyboardReturnIcon fontSize="small" sx={{ mr: "10px" }} />
               Back
            </Button>
         </Link>
      </>
   )
}

export default WhitelistDelete
