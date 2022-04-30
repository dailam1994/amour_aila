import React from "react"
import { useForm } from "react-hook-form"
import { Typography, Button, Box, TextField } from "@mui/material"
import { makeStyles } from "@material-ui/core/styles"
import InputAdornment from "@mui/material/InputAdornment"
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined"
import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined"
import { useLoginGuest } from "../../hooks/useGuest.login"

// Custom Error Input Styling
export const errorInput = {
   backgroundColor: "#fbe9e7",
   padding: "10px",
   borderLeft: "5px solid #ff5722",
   color: "#ff5722",
   fontSize: "13px",
   width: "100%",
}

// Custom Text Field Input Styling
export const useStyles = makeStyles({
   input: {
      color: "rgb(255,255,255)",
   },
})

const GuestLogin = () => {
   const classes = useStyles()

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm()

   const { mutate } = useLoginGuest()

   // Handling Form Submission
   const submitForm = (formData) => {
      mutate(formData)
   }

   const forgotPassword = () => {
      alert("Please contact admin to reset your password...")
   }

   return (
      <>
         <Box sx={{ my: "100px", mx: "20px" }} style={{ background: "rgb(255,255,255)" }}>
            <form
               onSubmit={handleSubmit(submitForm)}
               style={{ background: "rgb(121,6,4)", padding: "5px", borderRadius: "10px" }}>
               <Typography sx={{ m: "10px" }} variant="h4" style={{ color: "rgb(255,255,286)", textAlign: "center" }}>
                  <strong>Login</strong>
               </Typography>
               <Box
                  sx={{
                     display: "flex",
                     flexDirection: "column",
                     justifyContent: "center",
                     alignItems: "center",
                     m: "10px",
                  }}>
                  <TextField
                     type="text"
                     name="username"
                     id="username"
                     sx={{ color: "rgb(255,255,255)" }}
                     className="form-control"
                     placeholder="Username"
                     label="Username"
                     {...register("username", { required: true, pattern: /^[a-zA-Z]{3,255}$/i })}
                     variant="outlined"
                     InputLabelProps={{ className: classes.input }}
                     InputProps={{
                        className: classes.input,
                        endAdornment: (
                           <InputAdornment position="end">
                              <PersonOutlineOutlinedIcon sx={{ color: "rgb(255,255,255)" }} />
                           </InputAdornment>
                        ),
                     }}
                  />
                  {errors.username && <span style={errorInput}>! Please check username ...</span>}
                  <TextField
                     type="password"
                     name="password"
                     id="password"
                     className="form-control"
                     placeholder="Password"
                     {...register("password", {
                        required: true,
                        pattern: /((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,200})\S$/i,
                     })}
                     label="Password"
                     variant="outlined"
                     InputLabelProps={{ className: classes.input }}
                     InputProps={{
                        className: classes.input,
                        endAdornment: (
                           <InputAdornment position="end">
                              <KeyOutlinedIcon sx={{ color: "rgb(255,255,255)" }} />
                           </InputAdornment>
                        ),
                     }}
                  />
                  {errors.password && <span style={errorInput}>! Please check password ...</span>}
                  <Button
                     sx={{ display: "block", width: "100px", mt: "30px" }}
                     type="submit"
                     style={{
                        background: "rgb(50,53,101)",
                        border: "1px solid rgb(255,255,255)",
                        color: "rgb(255,255,255)",
                        textTransform: "none",
                     }}>
                     Sign in
                  </Button>
               </Box>
               <Typography
                  sx={{ m: "10px" }}
                  align="center"
                  style={{ color: "rgb(255,255,255)" }}
                  onClick={forgotPassword}>
                  Forgot your email or password?
               </Typography>
            </form>
         </Box>
      </>
   )
}

export default GuestLogin
