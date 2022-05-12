import React, { useState, useEffect, useTransition } from "react"
import { Link } from "react-router-dom"
import {
   Alert,
   Box,
   Button,
   CircularProgress,
   Container,
   Paper,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
   TextField,
   Typography,
   Stack,
} from "@mui/material"
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn"
import { useUserAllData } from "../../../hooks/admin/user/useUser.all"

const UserAll = () => {
   const [value, setValue] = useState("")
   const [query, setQuery] = useState("")
   const [isPending, startTransition] = useTransition()
   const { isLoading, isError, error, data, isFetching } = useUserAllData()
   let filteredNames

   const searchHandler = (event) => {
      setQuery(event.target.value)
      startTransition(() => setValue(event.target.value))
   }

   useEffect(() => {
      if (data) {
         // Removing alert boxes upon submission request
         document.getElementById("user-all-error").style.display = "none"
      }
   }, [data])

   if (data) {
      // Filtering through the data and returning firstName and lastName
      filteredNames = data.filter((item) => {
         return item.firstName.includes(value) || item.lastName.includes(value)
      })
   }

   return (
      <>
         <Stack sx={{ width: "100%" }}>
            <Alert id="user-all-error" severity="error" style={{ display: "none" }}>
               <strong id="user-all-error-message"></strong>
            </Alert>
         </Stack>
         <Typography sx={{ m: "10px" }} variant="h4">
            <strong>Account Management</strong>
         </Typography>
         <Container sx={{ display: "flex", justifyContent: "center" }}>
            <Link to="/user/add">
               <Button variant="contained" color="success">
                  Create New User
               </Button>
            </Link>
         </Container>
         <Box sx={{ m: "10px" }} style={{ backgroundColor: "rgb(255,255,255)" }}>
            <TextField
               sx={{ width: 1 }}
               variant="filled"
               label="Search"
               color="secondary"
               value={query}
               onChange={searchHandler}
            />
         </Box>
         <Box sx={{ m: "10px" }}>
            <TableContainer component={Paper} style={{ maxHeight: 373, overflow: "auto" }}>
               <Table aria-label="simple table">
                  <TableHead>
                     <TableRow>
                        <TableCell style={{ color: "rgb(0,0,0)" }}>
                           <strong>Clients</strong>
                        </TableCell>
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     {isLoading || isPending || isFetching ? (
                        <TableRow sx={{ display: "flex", justifyContent: "center" }}>
                           <TableCell>
                              <CircularProgress color="secondary" />
                           </TableCell>
                        </TableRow>
                     ) : isError ? (
                        <TableRow sx={{ display: "flex", justifyContent: "center" }}>
                           <TableCell>
                              <Typography style={{ color: "rgb(0,0,0)" }}>Error {error.message}</Typography>
                           </TableCell>
                        </TableRow>
                     ) : filteredNames ? (
                        filteredNames.map((item) => {
                           return (
                              <TableRow
                                 sx={{
                                    "&:last-child td, &:last-child th": {
                                       border: 0,
                                    },
                                 }}
                                 key={item.userID}>
                                 <TableCell
                                    component="th"
                                    scope="row"
                                    sx={{
                                       my: 0,
                                       py: 0,
                                       px: "5px",
                                       textAlign: "center",
                                    }}>
                                    <Link to={`/user/single/${item.userID}`} style={{ color: "rgb(0,0,0)" }}>
                                       {item.firstName} {item.lastName}
                                    </Link>
                                 </TableCell>
                                 <TableCell
                                    component="th"
                                    scope="row"
                                    sx={{
                                       display: "flex",
                                       justifyContent: "flex-end",
                                       pr: "5px",
                                       my: 0,
                                       py: 0,
                                    }}>
                                    <Link to={`/user/edit/${item.userID}`}>
                                       <Button
                                          size="small"
                                          variant="contained"
                                          color="warning"
                                          style={{ textTransform: "none" }}>
                                          Edit
                                       </Button>
                                    </Link>
                                    <Link
                                       style={{
                                          marginLeft: "3px",
                                          marginRight: "0",
                                          float: "right",
                                       }}
                                       to={`/user/delete/${item.userID}`}>
                                       <Button
                                          size="small"
                                          variant="contained"
                                          color="error"
                                          style={{ textTransform: "none" }}>
                                          Delete
                                       </Button>
                                    </Link>
                                 </TableCell>
                              </TableRow>
                           )
                        })
                     ) : null}
                  </TableBody>
               </Table>
            </TableContainer>
         </Box>
         <Link to="/settings">
            <Button sx={{ m: "10px", mb: "20px" }} variant="contained" color="primary">
               <KeyboardReturnIcon fontSize="small" sx={{ mr: "10px" }} />
               Back
            </Button>
         </Link>
      </>
   )
}

export default UserAll
