import React, { useState } from "react"
import { Link, useParams } from "react-router-dom"
import { useForm } from "react-hook-form"
import { Alert, Box, Button, Stack, TextField, Typography } from "@mui/material"
import { ThemeProvider, createTheme } from "@mui/material"
import LocalizationProvider from "@mui/lab/LocalizationProvider"
import AdapterDateFns from "@mui/lab/AdapterDateFns"
import TimePicker from "@mui/lab/TimePicker"
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn"
import { useAddSchedule } from "../../../hooks/admin/schedule/useSchedule.add"
import { errorInput } from "../../guest/guest.login"

// Custom Mui Themeing
export const theme = createTheme({
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

const ScheduleAdd = () => {
   const { date } = useParams()
   const [startTime, setStartTime] = useState(new Date(date + " " + "06:00"))
   const [endTime, setEndTime] = useState(new Date(date + " " + "18:00"))

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm()

   const { mutate } = useAddSchedule()

   // Function to handle form submission
   const onSubmit = (formData) => {
      // Reset Alert Displays
      document.getElementById("schedule-add-success").style.display = "none"
      document.getElementById("schedule-add-error").style.display = "none"

      let start = formData.startTime
      let end = formData.endTime

      // If statements to handle start/emd time conversions
      if (formData.startTime.match("am")) {
         start = start.substring(0, 5)
      } else if (formData.startTime.match("pm")) {
         start = parseInt(formData.startTime.substring(0, 2)) + 12
         start = start.toString() + ":" + formData.startTime.substring(3, 5)
      }

      if (formData.endTime.match("am")) {
         end = end.substring(0, 5)
      } else if (formData.endTime.match("pm")) {
         end = parseInt(formData.endTime.substring(0, 2)) + 12
         end = end.toString() + ":" + formData.endTime.substring(3, 5)
      }

      const schedule = { date, startTime: start, endTime: end }

      mutate(schedule)
   }

   return (
      <>
         <Stack sx={{ width: "100%" }}>
            <Alert id="schedule-add-error" severity="error" style={{ display: "none" }}>
               <strong id="schedule-add-error-message"></strong>
            </Alert>
            <Alert id="schedule-add-success" severity="success" style={{ display: "none" }}>
               <strong>Time Set Successfully!</strong>
            </Alert>
         </Stack>
         <Typography sx={{ m: "10px" }} variant="h4">
            <strong>Set Time</strong>
         </Typography>
         <Typography sx={{ m: "10px" }} variant="subtitle1" color="primary">
            <strong>{date}</strong>
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
            <Box sx={{ display: "flex", justifyContent: "center", mt: "10px" }}>
               <Button
                  type="submit"
                  variant="contained"
                  color="success"
                  sx={{ width: "100%" }}
                  style={{ textTransform: "none" }}>
                  Create
               </Button>
            </Box>
         </form>
         <Link to="/schedule/all">
            <Button sx={{ m: "10px", mb: "20px" }} variant="contained" color="primary">
               <KeyboardReturnIcon fontSize="small" sx={{ mr: "10px" }} />
               Back
            </Button>
         </Link>
      </>
   )
}

export default ScheduleAdd
