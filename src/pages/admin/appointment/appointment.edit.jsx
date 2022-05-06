import React, { useState, useEffect } from "react"
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
import { useAppointmentBookingData } from "../../../hooks/admin/appointment/useAppointment.booking"
import { useScheduleDateData } from "../../../hooks/admin/schedule/useSchedule.date"
import { useEditAppointment } from "../../../hooks/admin/appointment/useAppointment.edit"
import { useBookingsData } from "../../../hooks/client/booking/useBooking.all"
import { errorInput } from "../../guest/guest.login"

const moment = extendMoment(Moment)

// Custom MUI Themeing
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

const AppointmentEdit = () => {
   const { id } = useParams("")
   const [firstName, setFirstName] = useState("")
   const [lastName, setLastName] = useState("")
   const [date, setDate] = useState("")
   const [startTime, setStartTime] = useState("")
   const [endTime, setEndTime] = useState("")
   const [serviceOne, setServiceOne] = useState(false)
   const [serviceTwo, setServiceTwo] = useState(false)
   const [serviceThree, setServiceThree] = useState(false)
   const [serviceFour, setServiceFour] = useState(false)
   const [serviceFive, setServiceFive] = useState(false)
   const [adminStart, setAdminStart] = useState()
   const [adminEnd, setAdminEnd] = useState()
   const [serviceValidate, setServiceValidate] = useState(true)

   let adminFormatDate
   let adminConvertFormatDate
   let adminStartTime
   let adminEndTime
   let adminNewStartTime
   let adminFormatStartTime
   let count = 0
   let schedule

   const { isLoading, isFetching, isError, error, data } = useAppointmentBookingData(id)

   const {
      isLoading: scheduleDateIsLoading,
      isFetching: scheduleDateIsFetching,
      isError: scheduleDateIsError,
      data: scheduleDateData,
   } = useScheduleDateData(date)

   const { data: bookingData } = useBookingsData()

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm()

   const { mutate } = useEditAppointment()

   useEffect(() => {
      // If statement to handle if data exist from useAppointmentBookingData()
      if (data) {
         setFirstName(data[0].user.firstName)
         setLastName(data[0].user.lastName)
         setDate(data[0].booking.date)
         setStartTime(
            new Date(
               new Date(data[0].booking.date).toDateString() +
                  " " +
                  new Date(data[0].booking.startTime).toLocaleTimeString().substring(0, 5)
            )
         )
         setEndTime(
            new Date(
               new Date(data[0].booking.date).toDateString() +
                  " " +
                  new Date(data[0].booking.endTime).toLocaleTimeString().substring(0, 5)
            )
         )

         data[0].booking.firstService == "true" ? setServiceOne(true) : setServiceOne(false)
         data[0].booking.secondService == "true" ? setServiceTwo(true) : setServiceTwo(false)
         data[0].booking.thirdService == "true" ? setServiceThree(true) : setServiceThree(false)
         data[0].booking.fourthService == "true" ? setServiceFour(true) : setServiceFour(false)
         data[0].booking.fifthService == "true" ? setServiceFive(true) : setServiceFive(false)
      }

      // If statement to handle data reassignment to existing state variables
      if (scheduleDateData) {
         setAdminStart(scheduleDateData.startTime)
         setAdminEnd(scheduleDateData.endTime)
      }
   }, [data, scheduleDateData])

   // If Statement to handle the admin date, start and end time conversions
   if (date) {
      adminFormatDate = new Date(new Date(date).setDate(new Date(date).getDate() + 1)).toISOString().substring(0, 10)
      adminConvertFormatDate = adminFormatDate.toLocaleString().replace(",", "").replaceAll("/", "-").split(" ")
      adminStartTime = new Date(adminStart).toLocaleTimeString().substring(0, 5)
      adminEndTime = new Date(adminEnd).toLocaleTimeString().substring(0, 4) + "1"

      adminFormatStartTime = new Date(
         new Date(adminFormatDate + " " + adminStartTime).setMinutes(
            new Date(adminFormatDate + " " + adminStartTime).getMinutes() - 1
         )
      )
      adminNewStartTime = new Date(adminFormatStartTime).toLocaleString().substring(12, 17)
   }

   // Submit Functionality
   const onSubmit = (formData) => {
      // Reset alert displays
      document.getElementById("booking-edit-success").style.display = "none"
      document.getElementById("booking-edit-error").style.display = "none"

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
            moment(`${adminConvertFormatDate} ${adminNewStartTime}`),
            moment(`${adminConvertFormatDate} ${adminEndTime}`)
         ) &&
         moment(`${adminConvertFormatDate} ${end}`).isBetween(
            moment(`${adminConvertFormatDate} ${adminNewStartTime}`),
            moment(`${adminConvertFormatDate} ${adminEndTime}`)
         )

      console.log(checkWithinAdminDate)

      // Function to handle errors
      const errorHandling = () => {
         document.getElementById("booking-edit-error").style.display = "flex"
         document.getElementById("booking-edit-error-message").innerHTML = "Booking Date/Time Unavailable"
         throw new Error("Overlapping Date/Time")
      }

      // Function to add Booking
      const editBooking = () => {
         // If statement to handling if at least 1 Service is checked
         if (
            formData.serviceOne == false &&
            formData.serviceTwo == false &&
            formData.serviceThree == false &&
            formData.serviceFour == false &&
            formData.serviceFive == false
         ) {
            setServiceValidate(false)
            console.log("Need to pick one service")
         } else {
            schedule = {
               bookingID: id,
               date: new Date(date).toDateString(),
               startTime: start,
               endTime: end,
               firstService: serviceOne,
               secondService: serviceTwo,
               thirdService: serviceThree,
               fourthService: serviceFour,
               fifthService: serviceFive,
            }
            setServiceValidate(true)

            mutate(schedule)
         }
      }

      // If Statement to handle data in the database
      if (bookingData) {
         if (bookingData.length < 1 && checkWithinAdminDate) {
            editBooking()
         } else if (bookingData.length < 1 && !checkWithinAdminDate) {
            errorHandling()
         } else if (bookingData.length >= 1 && !checkWithinAdminDate) {
            errorHandling()
         } else if (bookingData.length >= 1 && checkWithinAdminDate) {
            // Filtering ouf the focused Booking from List
            const filterBooking = bookingData.filter((item) => {
               return item.bookingID != id
            })

            // Looping over existing data in the database
            for (let i of filterBooking) {
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
               editBooking()
            }
         }
      }
   }

   return (
      <>
         {isLoading || isFetching || scheduleDateIsLoading || scheduleDateIsFetching ? (
            <Container sx={{ my: "10px", display: "flex", justifyContent: "center" }}>
               <Box>
                  <CircularProgress color="secondary" />
               </Box>
            </Container>
         ) : isError || scheduleDateIsError ? (
            <Container sx={{ display: "flex", justifyContent: "center" }}>
               <Box>
                  <Typography style={{ color: "rgb(0,0,0)" }}>Error {error.message}</Typography>
               </Box>
            </Container>
         ) : data || scheduleDateData ? (
            <>
               <Stack sx={{ width: "100%" }}>
                  <Alert id="booking-edit-error" severity="error" style={{ display: "none" }}>
                     <strong id="booking-edit-error-message"></strong>
                  </Alert>
                  <Alert id="booking-edit-success" severity="success" style={{ display: "none" }}>
                     <strong>Edit Successfully!</strong>
                  </Alert>
               </Stack>
               <Typography sx={{ m: "10px" }} variant="h4">
                  <strong>Edit Booking</strong>
               </Typography>
               <Typography sx={{ m: "10px" }} variant="subtitle1" color="primary">
                  <strong>{new Date(date).toDateString()}</strong>
               </Typography>
               <Typography sx={{ m: "10px" }} variant="subtitle1" color="success">
                  <strong>
                     {lastName}, {firstName}
                  </strong>
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
                  <Box sx={{ display: "flex", justifyContent: "center", mt: "10px", width: "50%" }}>
                     <Button
                        type="submit"
                        variant="contained"
                        color="warning"
                        sx={{ width: 1 }}
                        style={{ textTransform: "none" }}>
                        Edit
                     </Button>
                  </Box>
               </form>
               <Link to="/appointment">
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

export default AppointmentEdit
