import React from "react"
import { Link } from "react-router-dom"
import {
   Box,
   Button,
   Container,
   Paper,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
   Typography,
} from "@mui/material"

const ScheduleAll = () => {
   const length = [1, 2, 3, 4, 5, 6]

   const days = [new Date().toDateString()]

   // For Each Lopp handling new date w.r.t. days of a week
   length.forEach((item) => {
      days.push(new Date(new Date().setDate(new Date().getDate() + item)).toDateString())
   })

   return (
      <>
         <Typography sx={{ m: "10px" }} variant="h4">
            <strong>Work Schedule</strong>
         </Typography>
         <Box sx={{ m: "10px" }}>
            <TableContainer component={Paper}>
               <Table aria-label="simple table">
                  <TableHead>
                     <TableRow>
                        <TableCell style={{ color: "rgb(0,0,0)" }}>
                           <strong>Upcoming Dates</strong>
                        </TableCell>
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     {days.map((i) => {
                        return (
                           <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }} key={i}>
                              <TableCell component="th" scope="row" sx={{ my: 0, py: 0 }}>
                                 <Link to="" style={{ color: "rgb(0,0,0)" }}>
                                    {i}
                                 </Link>
                              </TableCell>
                              <TableCell
                                 component="th"
                                 scope="row"
                                 sx={{ display: "flex", justifyContent: "flex-end", pr: "5px", my: 0, py: 0 }}>
                                 <Link
                                    style={{ marginLeft: "3px", marginRight: "0", float: "right" }}
                                    to={`/schedule/add/${i}`}>
                                    <Button
                                       size="small"
                                       variant="contained"
                                       color="success"
                                       style={{ textTransform: "none" }}>
                                       Set Time
                                    </Button>
                                 </Link>
                              </TableCell>
                           </TableRow>
                        )
                     })}
                  </TableBody>
               </Table>
            </TableContainer>
         </Box>
         <Container sx={{ display: "flex", flexDirection: "row", justifyContent: "center", my: "10px", p: 0 }}>
            <Box>
               <Link to={"/schedule/view"}>
                  <Button variant="contained" color="primary" style={{ textTransform: "none" }}>
                     View Schedules
                  </Button>
               </Link>
            </Box>
            <Box>
               <Link to={"/date/add"}>
                  <Button variant="contained" color="secondary" style={{ textTransform: "none" }}>
                     Set Date/Time
                  </Button>
               </Link>
            </Box>
         </Container>
      </>
   )
}

export default ScheduleAll
