import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import {
   Alert,
   Box,
   Button,
   CircularProgress,
   Container,
   Accordion,
   AccordionDetails,
   AccordionSummary,
   Grid,
   Typography,
   Stack,
} from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { useSessionData } from "../../../hooks/client/useClient.session"
import { useRecordUserData } from "../../../hooks/client/record/useRecord.user"

const RecordList = () => {
   const [id, setId] = useState("")
   let result

   const { data: sessionData } = useSessionData()

   useEffect(() => {
      // Removing alert boxes upon submission request
      document.getElementById("record-all-error").style.display = "none"

      if (sessionData) {
         setId(sessionData.user.userId)
      }
   }, [sessionData])

   const { isLoading, isError, error, data, isFetching } = useRecordUserData(id)

   if (data) {
      // Filtering through the data using the reduce method for booking data && user ID
      result = data.reduce((unique, o) => {
         if (!unique.some((obj) => obj.record.date === o.record.date && obj.userUserID === o.userUserID)) {
            unique.push(o)
         }

         return unique
      }, [])
   }

   return (
      <>
         <Stack sx={{ width: "100%" }}>
            <Alert id="record-all-error" severity="error" style={{ display: "none" }}>
               <strong id="record-all-error-message"></strong>
            </Alert>
         </Stack>
         <Typography sx={{ m: "10px" }} variant="h4">
            <strong>My Records</strong>
         </Typography>
         <Container sx={{ display: "flex", justifyContent: "center" }}>
            <Link to="/record/add">
               <Button variant="contained" color="success">
                  Create New Record
               </Button>
            </Link>
         </Container>
         <Box sx={{ m: "10px" }}>
            {isLoading || isFetching ? (
               <Container sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
                  <Box>
                     <CircularProgress color="secondary" />
                  </Box>
               </Container>
            ) : isError ? (
               <Container sx={{ display: "flex", justifyContent: "center" }}>
                  <Box>
                     <Typography style={{ color: "rgb(0,0,0)" }}>Error: {error.message}</Typography>
                  </Box>
               </Container>
            ) : data || result ? (
               result.map((i) => {
                  return (
                     <Accordion key={i.recordRecordID}>
                        <AccordionSummary
                           expandIcon={<ExpandMoreIcon />}
                           aria-controls="panel1a-content"
                           id="panel1a-header">
                           <Typography variant="subtitle2" color="secondary">
                              <em>{i.record.date}</em>
                           </Typography>
                        </AccordionSummary>
                        {data.map((time) => {
                           if (i.userUserID === time.userUserID && i.record.date === time.record.date)
                              return (
                                 <Accordion key={time.recordRecordID}>
                                    <AccordionDetails sx={{ my: 0, py: 0 }}>
                                       <AccordionSummary
                                          expandIcon={<ExpandMoreIcon />}
                                          aria-controls="panel1a-content"
                                          id="panel1a-header"
                                          sx={{ my: 0, py: 0 }}>
                                          <Typography variant="subtitle2">
                                             <strong style={{ color: "rgb(50, 53, 101)" }}>
                                                {time.record.start + " "}-{" " + time.record.end}
                                             </strong>
                                          </Typography>
                                       </AccordionSummary>
                                    </AccordionDetails>
                                    <Grid container spacing={2}>
                                       <Grid item xs={7}>
                                          <AccordionDetails>
                                             <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                                                <Typography
                                                   variant="subtitle2"
                                                   sx={{
                                                      display: "flex",
                                                      flexDirection: "column",
                                                      mt: "-10px",
                                                      p: 0,
                                                   }}
                                                   textAlign="left">
                                                   <em>
                                                      Service 1:{" "}
                                                      {time.record.firstService == "true" ? (
                                                         <strong style={{ color: "green" }}>Yes</strong>
                                                      ) : (
                                                         <em style={{ color: "red" }}>nope</em>
                                                      )}
                                                   </em>
                                                   <em>
                                                      Service 2:{" "}
                                                      {time.record.secondService == "true" ? (
                                                         <strong style={{ color: "green" }}>Yes</strong>
                                                      ) : (
                                                         <em style={{ color: "red" }}>nope</em>
                                                      )}
                                                   </em>
                                                   <em>
                                                      Service 3:{" "}
                                                      {time.record.thirdService == "true" ? (
                                                         <strong style={{ color: "green" }}>Yes</strong>
                                                      ) : (
                                                         <em style={{ color: "red" }}>nope</em>
                                                      )}
                                                   </em>
                                                   <em>
                                                      Service 4:{" "}
                                                      {time.record.fourthService == "true" ? (
                                                         <strong style={{ color: "green" }}>Yes</strong>
                                                      ) : (
                                                         <em style={{ color: "red" }}>nope</em>
                                                      )}
                                                   </em>
                                                   <em>
                                                      Service 5:{" "}
                                                      {time.record.fifthService == "true" ? (
                                                         <strong style={{ color: "green" }}>Yes</strong>
                                                      ) : (
                                                         <em style={{ color: "red" }}>nope</em>
                                                      )}
                                                   </em>
                                                </Typography>
                                             </AccordionSummary>
                                          </AccordionDetails>
                                       </Grid>
                                       <Grid
                                          item
                                          xs={5}
                                          sx={{
                                             display: "flex",
                                             flexDirection: "column",
                                             justifyContent: "center",
                                             alignItems: "center",
                                          }}>
                                          <Link to={`/record/update/${i.record.recordID}`}>
                                             <Button
                                                size="small"
                                                variant="contained"
                                                color="warning"
                                                sx={{ m: 1, width: "100px" }}
                                                style={{ textTransform: "none" }}>
                                                Edit
                                             </Button>
                                          </Link>
                                       </Grid>
                                    </Grid>
                                 </Accordion>
                              )
                        })}
                     </Accordion>
                  )
               })
            ) : null}
         </Box>
      </>
   )
}

export default RecordList
