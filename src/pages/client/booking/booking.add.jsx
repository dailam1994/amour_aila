import React, { useState } from "react"
import { Link, useParams } from "react-router-dom"
import { useForm } from "react-hook-form"
import Moment from "moment"
import { extendMoment } from "moment-range"
import {
   Alert,
   Box,
   Button,
   Checkbox,
   CircularProgress,
   Container,
   FormControlLabel,
   FormGroup,
   Stack,
   TextField,
   Typography,
} from "@mui/material"
import { ThemeProvider, createTheme } from "@mui/material"
import LocalizationProvider from "@mui/lab/LocalizationProvider"
import AdapterDateFns from "@mui/lab/AdapterDateFns"
import TimePicker from "@mui/lab/TimePicker"
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn"
import { useBookingsData } from "../../../hooks/client/booking/useBooking.all"
import { useAddBooking } from "../../../hooks/client/booking/useBooking.add"
import { errorInput } from "../../guest/guest.login"

const moment = extendMoment(Moment)

// Custom Mui Themeing
const theme = createTheme({
   components: {
      MuiInputLabel: {
         styleOverrides: {
            root: {
               color: "#b39ddb",
            },
         },
      },
      MuiOutlinedInput: {
         styleOverrides: {
            notchedOutline: {
               borderColor: "#ede7f6 !important",
            },
         },
      },
   },
})

const BookingAdd = () => {
   const { date } = useParams()
   const adminDate = date.substring(0, 15)
   const adminFormatDate = new Date(new Date(date).setDate(new Date(date).getDate() - 1)).toISOString().substring(0, 10)
   const adminConvertFormatDate = adminFormatDate.toLocaleString().replace(",", "").replaceAll("/", "-").split(" ")
   const adminStartTime = date.substring(16, 21)
   const adminFormatStartTime = new Date(adminDate + " " + adminStartTime).setMinutes(
      new Date(adminDate + " " + adminStartTime).getMinutes() - 1
   )
   const newAdminStartTime = new Date(adminFormatStartTime).toLocaleString().substring(12, 17)
   const adminEndTime = date.substring(22, 26) + "1"

   const [startTime, setStartTime] = useState(new Date(adminDate + " " + date.substring(16, 21)))
   const [endTime, setEndTime] = useState(new Date(adminDate + " " + date.substring(22, 27)))
   const [serviceValidate, setServiceValidate] = useState(false)

   let count = 0
   let schedule

   const { isLoading, isFetching, isError, error, data } = useBookingsData()

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm()

   const { mutate } = useAddBooking()

   // Submit Functionality
   const onSubmit = (formData) => {
      // Reset alert displays
      document.getElementById("booking-add-success").style.display = "none"
      document.getElementById("booking-add-error").style.display = "none"

      let start = formData.startTime
      let end = formData.endTime

      // If statement to handle conversion of formData from start time
      if (formData.startTime.match("am")) {
         start = start.substring(0, 5)
      } else if (formData.startTime.match("pm")) {
         start = parseInt(formData.startTime.substring(0, 2)) + 12
         start = start.toString() + ":" + formData.startTime.substring(3, 5)
      }

      // If statement to handle conversion of formData from end time
      if (formData.endTime.match("am")) {
         end = end.substring(0, 5)
      } else if (formData.endTime.match("pm")) {
         end = parseInt(formData.endTime.substring(0, 2)) + 12
         end = end.toString() + ":" + formData.endTime.substring(3, 5)
      }

      // Function to verify if Booking w/in Admin Schedule
      const checkWithinAdminDate =
         moment(`${adminConvertFormatDate} ${start}`).isBetween(
            moment(`${adminConvertFormatDate} ${newAdminStartTime}`),
            moment(`${adminConvertFormatDate} ${adminEndTime}`)
         ) &&
         moment(`${adminConvertFormatDate} ${end}`).isBetween(
            moment(`${adminConvertFormatDate} ${newAdminStartTime}`),
            moment(`${adminConvertFormatDate} ${adminEndTime}`)
         )

      // Function to handle errors
      const errorHandling = () => {
         document.getElementById("booking-add-error").style.display = "flex"
         document.getElementById("booking-add-error-message").innerHTML = "Booking Date/Time Unavailable"
         throw new Error("Overlapping Date/Time")
      }

      // Function to add Booking
      const addBooking = () => {
         // If statement to handling if at least 1 service is checked
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

            schedule = {
               date: adminDate,
               startTime: start,
               endTime: end,
               firstService: formData.serviceOne,
               secondService: formData.serviceTwo,
               thirdService: formData.serviceThree,
               fourthService: formData.serviceFour,
               fifthService: formData.serviceFive,
            }

            mutate(schedule)
         }
      }

      // If Statement to handle data in the database
      if (data.length < 1 && checkWithinAdminDate) {
         addBooking()
      } else if (data.length < 1 && !checkWithinAdminDate) {
         errorHandling()
      } else if (data.length >= 1 && !checkWithinAdminDate) {
         errorHandling()
      } else if (data.length >= 1 && checkWithinAdminDate) {
         // Looping over existing data in the database
         for (let i of data) {
            console.log(i)
            // Date and Time Conversion Format
            const formatConvertDataDate = new Date(i.date).setDate(new Date(i.date).getDate() + 1)
            const formatDataDate = new Date(formatConvertDataDate).toISOString().substring(0, 10)
            const formatDataStartTime = new Date(i.startTime)
               .toLocaleString()
               .replace(",", "")
               .replaceAll("/", "-")
               .split(" ")
            const formatDataStartTimeString = formatDataStartTime[1].substring(0, 5)
            const formatDataEndTime = new Date(i.endTime)
               .toLocaleString()
               .replace(",", "")
               .replaceAll("/", "-")
               .split(" ")
            const formatDataEndTimeString = formatDataEndTime[1].substring(0, 5)

            // If Statement to handle overlapping Date/Time Ranges w.r.t. Database Part I
            if (
               moment
                  .range([moment(`${adminConvertFormatDate} ${start}`), moment(`${adminConvertFormatDate} ${end}`)])
                  .overlaps(
                     moment.range([
                        moment(`${formatDataDate} ${formatDataStartTimeString}`),
                        moment(`${formatDataDate} ${formatDataEndTimeString}`),
                     ])
                  )
            ) {
               count++
            }
         }

         // If Statement to handle overlapping Date/Time Ranges w.r.t. Database Part II
         if (count >= 1) {
            errorHandling()
         } else if (checkWithinAdminDate) {
            addBooking()
         }
      }
   }

   return (
      <>
         {isLoading || isFetching ? (
            <Container sx={{ my: "10px", display: "flex", justifyContent: "center" }}>
               <Box>
                  <CircularProgress color="secondary" />
               </Box>
            </Container>
         ) : isError ? (
            <Container sx={{ display: "flex", justifyContent: "center" }}>
               <Box>
                  <Typography style={{ color: "rgb(0,0,0)" }}>Error {error.message}</Typography>
               </Box>
            </Container>
         ) : data ? (
            <>
               <Stack sx={{ width: "100%" }}>
                  <Alert id="booking-add-error" severity="error" style={{ display: "none" }}>
                     <strong id="booking-add-error-message"></strong>
                  </Alert>
                  <Alert id="booking-add-success" severity="success" style={{ display: "none" }}>
                     <strong>Book Successfully!</strong>
                  </Alert>
               </Stack>
               <Typography sx={{ m: "10px" }} variant="h4">
                  <strong>Set Time</strong>
               </Typography>
               <Typography sx={{ m: "10px" }} variant="subtitle1" color="primary">
                  <strong>{adminDate}</strong>
               </Typography>
               <form
                  onSubmit={handleSubmit(onSubmit)}
                  style={{
                     display: "flex",
                     flexDirection: "column",
                     alignItems: "center",
                     padding: "30px",
                     backgroundColor: "#671E15",
                  }}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                     <ThemeProvider theme={theme}>
                        <Box style={{ margin: "10px" }}>
                           <TimePicker
                              label="Start Time"
                              value={startTime}
                              onChange={(value) => setStartTime(value)}
                              renderInput={(params) => (
                                 <TextField
                                    {...params}
                                    {...register("startTime", { required: true })}
                                    sx={{ input: { color: "#d1c4e9" } }}
                                 />
                              )}
                           />
                        </Box>
                        {errors.startTime && <span style={errorInput}>! Please choose start time ...</span>}
                        <Box style={{ margin: "10px" }}>
                           <TimePicker
                              label="End Time"
                              value={endTime}
                              onChange={(value) => setEndTime(value)}
                              renderInput={(params) => (
                                 <TextField
                                    {...params}
                                    {...register("endTime", { required: true })}
                                    sx={{ input: { color: "#d1c4e9" } }}
                                 />
                              )}
                           />
                        </Box>
                        {errors.endTime && <span style={errorInput}>! Please choose end time ...</span>}
                     </ThemeProvider>
                  </LocalizationProvider>
                  <FormGroup sx={{ width: 1, ml: 11, mt: 2 }}>
                     <FormControlLabel
                        control={
                           <Checkbox color="success" sx={{ color: "rgb(255,255,255)" }} {...register("serviceOne")} />
                        }
                        label="Service 1"
                        sx={{ color: "rgb(255,255,255)" }}
                     />
                     <FormControlLabel
                        control={
                           <Checkbox color="success" sx={{ color: "rgb(255,255,255)" }} {...register("serviceTwo")} />
                        }
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
                        control={
                           <Checkbox color="success" sx={{ color: "rgb(255,255,255)" }} {...register("serviceFour")} />
                        }
                        label="Service 4"
                        sx={{ color: "rgb(255,255,255)" }}
                     />
                     <FormControlLabel
                        control={
                           <Checkbox color="success" sx={{ color: "rgb(255,255,255)" }} {...register("serviceFive")} />
                        }
                        label="Service 5"
                        sx={{ color: "rgb(255,255,255)" }}
                     />
                  </FormGroup>
                  {serviceValidate ? <span style={errorInput}>! Please pick at least 1 service ...</span> : null}
                  <Box sx={{ display: "flex", justifyContent: "center", mt: "10px" }}>
                     <Button type="submit" variant="contained" color="success" sx={{ width: "100%" }}>
                        Book
                     </Button>
                  </Box>
               </form>
               <Link to="/booking/availability">
                  <Button sx={{ m: "10px", mb: "20px" }} variant="contained" color="primary">
                     <KeyboardReturnIcon fontSize="small" sx={{ mr: "10px" }} />
                     Back
                  </Button>
               </Link>
            </>
         ) : null}
      </>
   )
}

export default BookingAdd
