import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { Alert, Box, Button, Checkbox, FormControlLabel, FormGroup, Stack, TextField, Typography } from "@mui/material"
import InputAdornment from "@mui/material/InputAdornment"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn"
import { errorInput, useStyles } from "../../guest/guest.login"
import { useAddRecord } from "../../../hooks/admin/record/useRecord.add"

const RecordAdd = () => {
   const classes = useStyles()
   const [serviceValidate, setServiceValidate] = useState(false)
   let record

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm()

   const { mutate } = useAddRecord()

   // Function to handle form submission
   const onSubmit = (formData) => {
      // Reset alert displays
      document.getElementById("record-add-success").style.display = "none"
      document.getElementById("record-add-error").style.display = "none"

      // If statement to handle at least one service input
      if (
         formData.serviceOne == false &&
         formData.serviceTwo == false &&
         formData.serviceThree == false &&
         formData.serviceFour == false &&
         formData.serviceFive == false
      ) {
         setServiceValidate(true)
         console.log("Need to pick one service")
      } else {
         setServiceValidate(false)

         record = {
            date: formData.date,
            start: formData.startTime,
            end: formData.endTime,
            firstService: formData.serviceOne,
            secondService: formData.serviceTwo,
            thirdService: formData.serviceThree,
            fourthService: formData.serviceFour,
            fifthService: formData.serviceFive,
         }

         mutate(record)
      }
   }

   return (
      <>
         <Stack sx={{ width: "100%" }}>
            <Alert id="record-add-error" severity="error" style={{ display: "none" }}>
               <strong id="record-add-error-message"></strong>
            </Alert>
            <Alert id="record-add-success" severity="success" style={{ display: "none" }}>
               <strong>Record Created Successfully!</strong>
            </Alert>
         </Stack>
         <Typography sx={{ m: "10px" }} variant="h4">
            <strong>Create Record</strong>
         </Typography>
         <form
            onSubmit={handleSubmit(onSubmit)}
            style={{
               display: "flex",
               flexDirection: "column",
               backgroundColor: "rgb(50,53,101)",
               padding: "20px 10px",
               margin: "10px 30px",
               borderRadius: "10px",
            }}>
            <TextField
               id="date"
               sx={{ m: "10px" }}
               variant="outlined"
               name="date"
               label="Date"
               InputLabelProps={{ className: classes.input }}
               InputProps={{
                  className: classes.input,
                  endAdornment: (
                     <InputAdornment position="end">
                        <CalendarMonthIcon sx={{ color: "rgb(255,255,255)" }} />
                     </InputAdornment>
                  ),
               }}
               {...register("date", { required: true, pattern: /[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]$/i })}
            />
            {errors.date && <span style={errorInput}>! Invalid Date YYYY-MM-DD - format ...</span>}
            <TextField
               id="startTime"
               sx={{ m: "10px" }}
               variant="outlined"
               name="startTime"
               label="Start Time"
               InputLabelProps={{ className: classes.input }}
               InputProps={{
                  className: classes.input,
                  endAdornment: (
                     <InputAdornment position="end">
                        <AccessTimeIcon sx={{ color: "rgb(255,255,255)" }} />
                     </InputAdornment>
                  ),
               }}
               {...register("startTime", { required: true, pattern: /[0-1]?[0-9]:?[0-5][0-9](A|P)M$/i })}
            />
            {errors.startTime && <span style={errorInput}>! Invalid Start Time 12:00AM - format ...</span>}
            <TextField
               id="endTime"
               sx={{ m: "10px" }}
               variant="outlined"
               name="endTime"
               label="End Time"
               InputLabelProps={{ className: classes.input }}
               {...register("endTime", {
                  required: true,
                  pattern: /[0-1]?[0-9]:?[0-5][0-9](A|P)M$/i,
               })}
               InputProps={{
                  className: classes.input,
                  endAdornment: (
                     <InputAdornment position="end">
                        <AccessTimeIcon sx={{ color: "rgb(255,255,255)" }} />
                     </InputAdornment>
                  ),
               }}
            />
            {errors.endTime && <span style={errorInput}>! Invalid End Time 12:00PM - format ...</span>}
            <FormGroup sx={{ width: 1, ml: 11, mt: 2 }}>
               <FormControlLabel
                  control={<Checkbox color="success" sx={{ color: "rgb(255,255,255)" }} {...register("serviceOne")} />}
                  label="Service 1"
                  sx={{ color: "rgb(255,255,255)" }}
               />
               <FormControlLabel
                  control={<Checkbox color="success" sx={{ color: "rgb(255,255,255)" }} {...register("serviceTwo")} />}
                  label="Service 2"
                  sx={{ color: "rgb(255,255,255)" }}
               />
               <FormControlLabel
                  control={
                     <Checkbox color="success" sx={{ color: "rgb(255,255,255)" }} {...register("serviceThree")} />
                  }
                  label="Service 3"
                  sx={{ color: "rgb(255,255,255)" }}
               />
               <FormControlLabel
                  control={<Checkbox color="success" sx={{ color: "rgb(255,255,255)" }} {...register("serviceFour")} />}
                  label="Service 4"
                  sx={{ color: "rgb(255,255,255)" }}
               />
               <FormControlLabel
                  control={<Checkbox color="success" sx={{ color: "rgb(255,255,255)" }} {...register("serviceFive")} />}
                  label="Service 5"
                  sx={{ color: "rgb(255,255,255)" }}
               />
            </FormGroup>
            {serviceValidate ? <span style={errorInput}>! Please pick at least 1 service ...</span> : null}
            <Box sx={{ display: "flex", justifyContent: "center", mt: "10px" }}>
               <Button
                  type="submit"
                  variant="contained"
                  color="success"
                  sx={{ width: "50%" }}
                  style={{ textTransform: "none" }}>
                  Create
               </Button>
            </Box>
         </form>
         <Link to="/record">
            <Button sx={{ m: "10px", mb: "20px" }} variant="contained" color="primary">
               <KeyboardReturnIcon fontSize="small" sx={{ mr: "10px" }} />
               Back
            </Button>
         </Link>{" "}
      </>
   )
}

export default RecordAdd
