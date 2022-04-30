import React, { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { Link, useParams } from "react-router-dom"
import { Alert, Box, Button, CircularProgress, Container, Stack, TextField, Typography } from "@mui/material"
import InputAdornment from "@mui/material/InputAdornment"
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn"
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined"
import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined"
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined"
import IconButton from "@mui/material/IconButton"
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined"
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined"
import { errorInput, useStyles } from "../../guest/guest.login"
import { useUserData } from "../../../hooks/admin/user/useUser.single"
import { useEditUser } from "../../../hooks/admin/user/useUser.edit"

const UserEdit = () => {
   const classes = useStyles()
   const { id } = useParams()
   const [roles, setRoles] = useState("")
   const [passwordValue, setPasswordValue] = useState({ showPassword: true })
   const [confirmPasswordValue, setConfirmPasswordValue] = useState({ showPassword: true })

   const { isLoading, isError, error, data, isFetching } = useUserData(id)

   // If statement to handle fetched data
   useEffect(() => {
      if (data) {
         setRoles(data.roles)
      }
   }, [data])

   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm()

   // Function to handle hide/display password
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

   // Making sure password matches w.r.t. to confirm password
   const watchPasswords = watch(["password", "confirmPassword"])
   const passwordMatch = watchPasswords[0] == watchPasswords[1]

   const { mutate } = useEditUser()

   // Function to handle form submission
   const onSubmit = (formData) => {
      // Reset alert displays
      document.getElementById("user-edit-success").style.display = "none"
      document.getElementById("user-edit-error").style.display = "none"

      // If statement to handle if passwords match
      if (!passwordMatch) return

      // Adding additional data to formData Object
      formData.userID = id
      formData.roles = roles
      // Deleting data from formData Object
      delete formData.confirmPassword

      mutate(formData)
   }

   return (
      <>
         <Stack sx={{ width: "100%" }}>
            <Alert id="user-edit-error" severity="error" style={{ display: "none" }}>
               <strong id="user-edit-error-message"></strong>
            </Alert>
            <Alert id="user-edit-success" severity="success" style={{ display: "none" }}>
               <strong>Update Successfully!</strong>
            </Alert>
         </Stack>
         <Typography sx={{ m: "10px" }} variant="h4">
            <strong>Edit User</strong>
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
                     backgroundColor: "rgb(50,53,101)",
                     padding: "20px 10px",
                     margin: "10px 30px",
                     borderRadius: "10px",
                  }}>
                  <TextField
                     id="firstName"
                     color="primary"
                     sx={{ m: "10px" }}
                     ref={register}
                     variant="outlined"
                     name="firstName"
                     defaultValue={data.firstName}
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
                     color="primary"
                     sx={{ m: "10px" }}
                     ref={register}
                     variant="outlined"
                     name="lastName"
                     defaultValue={data.lastName}
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
                     color="primary"
                     sx={{ m: "10px" }}
                     ref={register}
                     variant="outlined"
                     name="dateOfBirth"
                     defaultValue={data.dateOfBirth.substring(0, 10)}
                     label="Date Of Birth"
                     {...register("dateOfBirth", {
                        required: true,
                        pattern: /^[0-9]{4}-[0-1]{1}[0-9]{1}-[0-3]{1}[0-9]{1}$/i,
                     })}
                     InputLabelProps={{ className: classes.input }}
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
                     color="primary"
                     sx={{ m: "10px" }}
                     ref={register}
                     variant="outlined"
                     name="email"
                     defaultValue={data.email}
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
                     color="primary"
                     sx={{ m: "10px" }}
                     ref={register}
                     variant="outlined"
                     name="username"
                     defaultValue={data.username}
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
                     type="password"
                     color="primary"
                     sx={{ m: "10px" }}
                     ref={register}
                     variant="outlined"
                     name="password"
                     defaultValue={data.password}
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
                     type="password"
                     sx={{ m: "10px" }}
                     ref={register}
                     variant="outlined"
                     name="confirmPassword"
                     label="Confirm Password"
                     defaultValue={data.password}
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
                        Edit
                     </Button>
                  </Box>
               </form>
            </>
         ) : null}
         <Link to="/user/all">
            <Button sx={{ m: "10px", mb: "20px" }} variant="contained" color="primary">
               <KeyboardReturnIcon fontSize="small" sx={{ mr: "10px" }} />
               Back
            </Button>
         </Link>
      </>
   )
}

export default UserEdit
