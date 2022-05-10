import React, { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import {
   Alert,
   Box,
   Button,
   CircularProgress,
   Container,
   IconButton,
   InputAdornment,
   Stack,
   TextField,
   Typography,
} from "@mui/material"
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn"
import { useSessionData } from "../../../hooks/client/useClient.session"
import { useUserData } from "../../../hooks/admin/user/useUser.single"
import { useEditUser } from "../../../hooks/admin/user/useUser.edit"
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined"
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined"
import { errorInput, useStyles } from "../../guest/guest.login"

const UserEdit = () => {
   const classes = useStyles()
   const [passwordValue, setPasswordValue] = useState({ showPassword: true })
   const [roles, setRoles] = useState("")
   let id

   const { data: userSession } = useSessionData()

   // If Statement to handle existing user session
   if (userSession) {
      id = userSession.user.userId
   }

   const { isLoading, isError, error, data, isFetching } = useUserData(id)

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm()

   // Handling fetched data
   useEffect(() => {
      // Removing alert boxes upon submission request
      document.getElementById("user-edit-success").style.display = "none"
      document.getElementById("user-edit-error").style.display = "none"

      if (data) {
         setRoles(data.roles)
      }
   }, [data])

   // Function to handle hiding/displaying password
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
      }
   }

   const { mutate } = useEditUser()

   // Function to handle form submission
   const onSubmit = (formData) => {
      // Removing alert boxes upon submission request
      document.getElementById("user-edit-success").style.display = "none"
      document.getElementById("user-edit-error").style.display = "none"

      // Adding additional data to the formData Object
      formData.userID = id
      formData.roles = roles

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
            <strong>Edit Account</strong>
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
                     id="username"
                     ref={register}
                     color="primary"
                     sx={{ m: "10px" }}
                     variant="outlined"
                     name="username"
                     label="Username"
                     defaultValue={data.username}
                     InputLabelProps={{ className: classes.input }}
                     InputProps={{
                        className: classes.input,
                        readOnly: true,
                     }}
                     {...register("username", { required: true, pattern: /^[a-zA-Z0-9]{3,255}$/i })}
                  />
                  {errors.username && <span style={errorInput}>! Invalid user name ...</span>}
                  <TextField
                     id="firstName"
                     ref={register}
                     color="primary"
                     sx={{ m: "10px" }}
                     variant="outlined"
                     name="firstName"
                     label="First Name"
                     defaultValue={data.firstName}
                     InputLabelProps={{ className: classes.input }}
                     InputProps={{
                        className: classes.input,
                     }}
                     {...register("firstName", { required: true, pattern: /^[a-zA-Z ,.'-]{3,200}$/i })}
                  />
                  {errors.firstName && <span style={errorInput}>! Invalid first name ...</span>}
                  <TextField
                     id="lastName"
                     ref={register}
                     color="primary"
                     sx={{ m: "10px" }}
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
                     ref={register}
                     color="primary"
                     sx={{ m: "10px" }}
                     variant="outlined"
                     name="dateOfBirth"
                     label="Date of Birth"
                     defaultValue={data.dateOfBirth.substring(0, 10)}
                     InputLabelProps={{ className: classes.input }}
                     InputProps={{
                        className: classes.input,
                     }}
                     {...register("dateOfBirth", {
                        required: true,
                        pattern: /^[0-9]{4}-[0-1]{1}[0-9]{1}-[0-3]{1}[0-9]{1}$/i,
                     })}
                  />
                  {errors.dateOfBirth && <span style={errorInput}>! Invalid Date of Birth ...</span>}
                  <TextField
                     id="email"
                     ref={register}
                     color="primary"
                     sx={{ m: "10px" }}
                     variant="outlined"
                     name="email"
                     label="Email"
                     defaultValue={data.email}
                     InputLabelProps={{ className: classes.input }}
                     InputProps={{
                        className: classes.input,
                     }}
                     {...register("email", {
                        required: true,
                        maxLength: 200,
                        pattern: /[a-zA-z0-9_.+-]+@[a-zA-z0-9-]+\.[a-zA-Z0-9-.]+/i,
                     })}
                  />
                  {errors.email && <span style={errorInput}>! Invalid email ...</span>}
                  <TextField
                     id="password"
                     type="password"
                     ref={register}
                     color="primary"
                     sx={{ m: "10px" }}
                     variant="outlined"
                     name="password"
                     label="Password"
                     defaultValue={data.password}
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
                     {...register("password", {
                        required: true,
                        pattern: /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/i,
                     })}
                  />
                  {errors.password && <span style={errorInput}>! Invalid password ...</span>}
                  <Box sx={{ display: "flex", justifyContent: "center", mt: "10px" }}>
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
         <Link to="/settings">
            <Button sx={{ m: "10px", mb: "20px" }} variant="contained" color="primary">
               <KeyboardReturnIcon fontSize="small" sx={{ mr: "10px" }} />
               Back
            </Button>
         </Link>
      </>
   )
}

export default UserEdit
