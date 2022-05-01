import React, { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { useForm } from "react-hook-form"
import { Alert, Box, Button, CircularProgress, Container, Stack, TextField, Typography } from "@mui/material"
import { ThemeProvider, createTheme } from "@mui/material"
import LocalizationProvider from "@mui/lab/LocalizationProvider"
import AdapterDateFns from "@mui/lab/AdapterDateFns"
import TimePicker from "@mui/lab/TimePicker"
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn"
import { useScheduleData } from "../../../hooks/admin/schedule/useSchedule.single"
import { useEditSchedule } from "../../../hooks/admin/schedule/useSchedule.edit"
import { errorInput } from "../../guest/guest.login"

// Custom Mui styling
const theme = createTheme({
   components: {
      MuiInputLabel: {
         styleOverrides: {
            root: {
               color: "#b39ddb",
               "&.Mui-disabled": {
                  color: "#fff176",
               },
            },
         },
      },
      MuiOutlinedInput: {
         styleOverrides: {
            notchedOutline: {
               borderColor: "#ede7f6 !important",
            },
            root: {
               "&.Mui-disabled": {
                  borderColor: "#b39ddb",
               },
            },
         },
      },
   },
})

const ScheduleEdit = () => {
   const [date, setDate] = useState(new Date().toDateString())
   const [startTime, setStartTime] = useState("")
   const [endTime, setEndTime] = useState("")

   const { id } = useParams()
   const { isLoading, isError, error, data, isFetching } = useScheduleData(id)

   // if statement to handle fetched data
   useEffect(() => {
      if (data) {
         setDate(new Date(data.date).toDateString())
         setStartTime(data.startTime)
         setEndTime(data.endTime)

         console.log(2, data.startTime)
         console.log(4, data.endTime)
      }
   }, [data])

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm()

   console.log(1, new Date(startTime).toLocaleTimeString())
   console.log(3, new Date(endTime).toLocaleTimeString())

   const { mutate } = useEditSchedule()

   // Function to handle form submission
   const onSubmit = (formData) => {
      // Reset alert displays
      document.getElementById("schedule-edit-success").style.display = "none"
      document.getElementById("schedule-edit-error").style.display = "none"

      const convertDate = new Date(date).toDateString()
      let start = formData.startTime
      let end = formData.endTime

      // If statements to handle start/end time conversions
      if (formData.startTime.match("am")) {
         start = start.substring(0, 5)
      } else if (formData.startTime.match("pm")) {
         start = parseInt(formData.startTime.substring(0, 2)) + 12
         start = start.toString() + ":00"
      }

      if (formData.endTime.match("am")) {
         end = end.substring(0, 5)
      } else if (formData.endTime.match("pm")) {
         end = parseInt(formData.endTime.substring(0, 2)) + 12
         end = end.toString() + ":00"
      }

      const schedule = { availabilityID: id, date: convertDate, startTime: start, endTime: end }

      mutate(schedule)
   }

   return (
      <>
         <Stack sx={{ width: "100%" }}>
            <Alert id="schedule-edit-error" severity="error" style={{ display: "none" }}>
               <strong id="schedule-edit-error-message"></strong>
            </Alert>
            <Alert id="schedule-edit-success" severity="success" style={{ display: "none" }}>
               <strong>Time Edit Successfully!</strong>
            </Alert>
         </Stack>
         <Typography sx={{ m: "10px" }} variant="h4">
            <strong>Edit Schedule</strong>
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
            <>
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
                           <Typography sx={{ m: "10px", color: "#ede7f6" }} variant="h5">
                              <strong>{date}</strong>
                           </Typography>
                        </Box>
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
                  <Box sx={{ display: "flex", justifyContent: "center", mt: "10px" }}>
                     <Button
                        type="submit"
                        variant="contained"
                        color="success"
                        sx={{ width: "100%" }}
                        style={{ textTransform: "none" }}>
                        Confirm
                     </Button>
                  </Box>
               </form>
            </>
         ) : null}
         <Link to="/schedule/view">
            <Button sx={{ m: "10px", mb: "20px" }} variant="contained" color="primary">
               <KeyboardReturnIcon fontSize="small" sx={{ mr: "10px" }} />
               Back
            </Button>
         </Link>
      </>
   )
}

export default ScheduleEdit
