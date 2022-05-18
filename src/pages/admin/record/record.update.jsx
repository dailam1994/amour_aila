import React, { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { Link, useParams } from "react-router-dom"
import {
   Alert,
   Box,
   Button,
   Checkbox,
   CircularProgress,
   FormControlLabel,
   FormGroup,
   Stack,
   TextField,
   Typography,
} from "@mui/material"
import InputAdornment from "@mui/material/InputAdornment"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn"
import { errorInput, useStyles } from "../../guest/guest.login"
import { useRecordData } from "../../../hooks/admin/record/useRecord.single"
import { useUpdateRecord } from "../../../hooks/admin/record/useRecord.update"

const RecordUpdate = () => {
   const classes = useStyles()
   const { id } = useParams("")
   const [serviceOne, setServiceOne] = useState(false)
   const [serviceTwo, setServiceTwo] = useState(false)
   const [serviceThree, setServiceThree] = useState(false)
   const [serviceFour, setServiceFour] = useState(false)
   const [serviceFive, setServiceFive] = useState(false)
   const [serviceValidate, setServiceValidate] = useState(true)
   let record

   const { isLoading, isFetching, isError, error, data } = useRecordData(id)

   useEffect(() => {
      // Removing alert boxes upon submission request
      document.getElementById("record-update-error").style.display = "none"

      // If statement to handle if data exist from useRecordData()
      if (data) {
         data.firstService == "true" ? setServiceOne(true) : setServiceOne(false)
         data.secondService == "true" ? setServiceTwo(true) : setServiceTwo(false)
         data.thirdService == "true" ? setServiceThree(true) : setServiceThree(false)
         data.fourthService == "true" ? setServiceFour(true) : setServiceFour(false)
         data.fifthService == "true" ? setServiceFive(true) : setServiceFive(false)
      }
   }, [data])

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm()

   const { mutate } = useUpdateRecord()

   // Function to handle form submission
   const onSubmit = (formData) => {
      // Reset alert displays
      document.getElementById("record-update-success").style.display = "none"
      document.getElementById("record-update-error").style.display = "none"

      // If statement to handle at least one service input
      if (
         serviceOne == false &&
         serviceTwo == false &&
         serviceThree == false &&
         serviceFour == false &&
         serviceFive == false
      ) {
         setServiceValidate(false)
         console.log("Need to pick one service")
      } else {
         setServiceValidate(true)

         record = {
            recordID: id,
            date: formData.date,
            start: formData.startTime,
            end: formData.endTime,
            firstService: serviceOne,
            secondService: serviceTwo,
            thirdService: serviceThree,
            fourthService: serviceFour,
            fifthService: serviceFive,
         }

         mutate(record)
      }
   }

   return (
      <>
         <Stack sx={{ width: "100%" }}>
            <Alert id="record-update-error" severity="error" style={{ display: "none" }}>
               <strong id="record-update-error-message"></strong>
            </Alert>
            <Alert id="record-update-success" severity="success" style={{ display: "none" }}>
               <strong>Update Successfully!</strong>
            </Alert>
         </Stack>
         <Typography sx={{ m: "10px" }} variant="h4">
            <strong>Update Record</strong>
         </Typography>
         {isLoading || isFetching ? (
            <Box sx={{ display: "flex", justifyContent: "center", m: 2 }}>
               <CircularProgress color="secondary" />
            </Box>
         ) : isError ? (
            <Container sx={{ display: "flex", justifyContent: "center" }}>
               <Typography style={{ color: "white" }}>Error: {error.message}</Typography>
            </Container>
         ) : data ? (
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
                  defaultValue={data.date}
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
                  defaultValue={data.start}
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
                  defaultValue={data.end}
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
               <FormGroup sx={{ width: 1, ml: 1, mt: 2 }}>
                  <FormControlLabel
                     {...register("serviceOne")}
                     control={
                        <Checkbox
                           color="success"
                           sx={{ color: "rgb(255,255,255)" }}
                           checked={serviceOne}
                           onChange={(event) => setServiceOne(event.target.checked)}
                        />
                     }
                     label="Service 1"
                     sx={{ color: "rgb(255,255,255)" }}
                  />
                  <FormControlLabel
                     {...register("serviceTwo")}
                     control={
                        <Checkbox
                           color="success"
                           checked={serviceTwo}
                           sx={{ color: "rgb(255,255,255)" }}
                           onChange={(event) => setServiceTwo(event.target.checked)}
                        />
                     }
                     label="Service 2"
                     sx={{ color: "rgb(255,255,255)" }}
                  />
                  <FormControlLabel
                     {...register("serviceThree")}
                     control={
                        <Checkbox
                           color="success"
                           checked={serviceThree}
                           sx={{ color: "rgb(255,255,255)" }}
                           onChange={(event) => setServiceThree(event.target.checked)}
                        />
                     }
                     label="Service 3"
                     sx={{ color: "rgb(255,255,255)" }}
                  />
                  <FormControlLabel
                     {...register("serviceFour")}
                     control={
                        <Checkbox
                           color="success"
                           checked={serviceFour}
                           sx={{ color: "rgb(255,255,255)" }}
                           onChange={(event) => setServiceFour(event.target.checked)}
                        />
                     }
                     label="Service 4"
                     sx={{ color: "rgb(255,255,255)" }}
                  />
                  <FormControlLabel
                     {...register("serviceFive")}
                     control={
                        <Checkbox
                           color="success"
                           checked={serviceFive}
                           sx={{ color: "rgb(255,255,255)" }}
                           onChange={(event) => setServiceFive(event.target.checked)}
                        />
                     }
                     label="Service 5"
                     sx={{ color: "rgb(255,255,255)" }}
                  />
               </FormGroup>
               {serviceValidate ? null : <span style={errorInput}>! Please pick at least 1 service ...</span>}
               <Box
                  sx={{
                     display: "flex",
                     justifyContent: "center",
                     mt: "10px",
                  }}>
                  <Button
                     variant="contained"
                     color="warning"
                     type="submit"
                     sx={{ width: "50%" }}
                     style={{ textTransform: "none" }}>
                     Update
                  </Button>
               </Box>
            </form>
         ) : null}
         <Link to="/record">
            <Button sx={{ m: "10px", mb: "20px" }} variant="contained" color="primary">
               <KeyboardReturnIcon fontSize="small" sx={{ mr: "10px" }} />
               Back
            </Button>
         </Link>
      </>
   )
}

export default RecordUpdate
