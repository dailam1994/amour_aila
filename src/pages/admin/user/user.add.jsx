import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { Alert, Box, Button, Stack, TextField, Typography } from "@mui/material"
import InputAdornment from "@mui/material/InputAdornment"
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn"
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined"
import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined"
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined"
import IconButton from "@mui/material/IconButton"
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined"
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined"
import { errorInput, useStyles } from "../../guest/guest.login"
import { useAddUser } from "../../../hooks/admin/user/useUser.add"

const UserAdd = () => {
   const classes = useStyles()
   const [passwordValue, setPasswordValue] = useState({ showPassword: false })
   const [confirmPasswordValue, setConfirmPasswordValue] = useState({ showPassword: false })
   const [roles, setRoles] = useState("CLIENT")

   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm()

   // Function to handle hide/display of password
   const handleClickShowPassword = (value) => {
      if (value == "password") {
         setPasswordValue({
            ...passwordValue,
            showPassword: !passwordValue.showPassword,
         })
         if (passwordValue.showPassword) {
            document.getElementById("password").setAttribute("type", "text")
         } else {
            document.getElementById("password").setAttribute("type", "password")
         }
      } else if (value == "confirmPassword") {
         setConfirmPasswordValue({
            ...confirmPasswordValue,
            showPassword: !confirmPasswordValue.showPassword,
         })
         if (confirmPasswordValue.showPassword) {
            document.getElementById("confirmPassword").setAttribute("type", "text")
         } else {
            document.getElementById("confirmPassword").setAttribute("type", "password")
         }
      }
   }

   // Making sure password and confirmPassword match
   const watchPasswords = watch(["password", "confirmPassword"])
   const passwordMatch = watchPasswords[0] == watchPasswords[1]

   const { mutate } = useAddUser()

   // Function to handle form submission
   const onSubmit = (formData) => {
      // Reset alert displays
      document.getElementById("user-add-success").style.display = "none"
      document.getElementById("user-add-error").style.display = "none"

      // If statement to handle password matching
      if (!passwordMatch) return

      // Adding and Deleteing data w.r.t to formData object
      formData.roles = roles
      delete formData.confirmPassword

      mutate(formData)
   }

   return (
      <>
         <Stack sx={{ width: "100%" }}>
            <Alert id="user-add-error" severity="error" style={{ display: "none" }}>
               <strong id="user-add-error-message"></strong>
            </Alert>
            <Alert id="user-add-success" severity="success" style={{ display: "none" }}>
               <strong>Account Created Successfully!</strong>
            </Alert>
         </Stack>
         <Typography sx={{ m: "10px" }} variant="h4">
            <strong>Create Account</strong>
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
               id="firstName"
               sx={{ m: "10px" }}
               variant="outlined"
               name="firstName"
               label="First Name"
               InputLabelProps={{ className: classes.input }}
               InputProps={{
                  className: classes.input,
               }}
               {...register("firstName", { required: true, pattern: /^[a-zA-Z ,.'-]{3,200}$/i })}
            />
            {errors.firstName && <span style={errorInput}>! Invalid first name ...</span>}
            <TextField
               id="lastName"
               sx={{ m: "10px" }}
               variant="outlined"
               name="lastName"
               label="Last Name"
               InputLabelProps={{ className: classes.input }}
               InputProps={{
                  className: classes.input,
               }}
               {...register("lastName", { required: true, pattern: /^[a-zA-Z ,.'-]{3,200}$/i })}
            />
            {errors.lastName && <span style={errorInput}>! Invalid last name ...</span>}
            <TextField
               id="dateOfBirth"
               sx={{ m: "10px" }}
               variant="outlined"
               name="dateOfBirth"
               label="Date of Birth"
               InputLabelProps={{ className: classes.input }}
               {...register("dateOfBirth", {
                  required: true,
                  pattern: /^[0-9]{4}-[0-1]{1}[0-9]{1}-[0-3]{1}[0-9]{1}$/i,
               })}
               InputProps={{
                  className: classes.input,
                  endAdornment: (
                     <InputAdornment position="end">
                        <CakeOutlinedIcon sx={{ color: "rgb(255,255,255)" }} />
                     </InputAdornment>
                  ),
               }}
            />
            {errors.dateOfBirth && <span style={errorInput}>! Invalid date of birth 'YYYY-MM-dd' ...</span>}
            <TextField
               id="email"
               sx={{ m: "10px" }}
               variant="outlined"
               name="email"
               label="Email"
               {...register("email", {
                  required: true,
                  maxLength: 200,
                  pattern: /[a-zA-z0-9_.+-]+@[a-zA-z0-9-]+\.[a-zA-Z0-9-.]+/i,
               })}
               InputLabelProps={{ className: classes.input }}
               InputProps={{
                  className: classes.input,
                  endAdornment: (
                     <InputAdornment position="end">
                        <EmailOutlinedIcon sx={{ color: "rgb(255,255,255)" }} />
                     </InputAdornment>
                  ),
               }}
            />
            {errors.email && <span style={errorInput}>! Invalid email ...</span>}
            <TextField
               id="username"
               sx={{ m: "10px" }}
               variant="outlined"
               name="username"
               label="Username"
               {...register("username", { required: true, pattern: /^[a-zA-Z0-9]{3,255}$/i })}
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
            {errors.username && <span style={errorInput}>! Invalid username ...</span>}
            <TextField
               id="password"
               type="text"
               sx={{ m: "10px" }}
               variant="outlined"
               name="password"
               label="Password"
               {...register("password", {
                  required: true,
                  pattern: /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/i,
               })}
               InputLabelProps={{ className: classes.input }}
               InputProps={{
                  className: classes.input,
                  endAdornment: (
                     <InputAdornment position="end">
                        <IconButton
                           aria-label="toggle password visibility"
                           onClick={(e) => handleClickShowPassword("password")}
                           edge="end">
                           {passwordValue.showPassword ? (
                              <VisibilityOffOutlinedIcon sx={{ color: "rgb(255,255,255)" }} />
                           ) : (
                              <VisibilityOutlinedIcon sx={{ color: "rgb(255,255,255)" }} />
                           )}
                        </IconButton>
                     </InputAdornment>
                  ),
               }}
            />
            {errors.password && <span style={errorInput}>! Invalid password ...</span>}
            <TextField
               id="confirmPassword"
               type="text"
               sx={{ m: "10px" }}
               variant="outlined"
               name="confirmPassword"
               label="Confirm Password"
               {...register("confirmPassword", {
                  required: true,
                  pattern: /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/i,
               })}
               InputLabelProps={{ className: classes.input }}
               InputProps={{
                  className: classes.input,
                  endAdornment: (
                     <InputAdornment position="end">
                        <IconButton
                           aria-label="toggle password visibility"
                           onClick={(e) => handleClickShowPassword("confirmPassword")}
                           edge="end">
                           {confirmPasswordValue.showPassword ? (
                              <VisibilityOffOutlinedIcon sx={{ color: "rgb(255,255,255)" }} />
                           ) : (
                              <VisibilityOutlinedIcon sx={{ color: "rgb(255,255,255)" }} />
                           )}
                        </IconButton>
                     </InputAdornment>
                  ),
               }}
            />
            {errors.confirmPassword && <span style={errorInput}>! Invalid confirmation password ...</span>}
            {passwordMatch ? "" : <span style={errorInput}>! Please make sure passwords match ...</span>}
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
         <Link to="/user/all">
            <Button sx={{ m: "10px", mb: "20px" }} variant="contained" color="primary">
               <KeyboardReturnIcon fontSize="small" sx={{ mr: "10px" }} />
               Back
            </Button>
         </Link>
      </>
   )
}

export default UserAdd
