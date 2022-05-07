import React from "react"
import { Link } from "react-router-dom"
import {
   Box,
   Button,
   CircularProgress,
   Container,
   Accordion,
   AccordionDetails,
   AccordionSummary,
   Grid,
   Typography,
} from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { useRecordAllData } from "../../../hooks/admin/record/useRecord.all"

const RecordAll = () => {
   const { isLoading, isError, error, data, isFetching } = useRecordAllData()
   let result
   let resultDate

   console.log(data)

   if (data) {
      // Filtering through the data using the reduce method for user ID
      result = data.reduce((unique, o) => {
         if (!unique.some((obj) => obj.userUserID === o.userUserID)) {
            unique.push(o)
         }

         return unique
      }, [])

      // Filtering through the data using the reduce method for booking data && user ID
      resultDate = data.reduce((unique, o) => {
         if (!unique.some((obj) => obj.record.date === o.record.date && obj.userUserID === o.userUserID)) {
            unique.push(o)
         }

         return unique
      }, [])
   }

   return (
      <>
         <Typography sx={{ m: "10px" }} variant="h4">
            <strong>ALL Records</strong>
         </Typography>
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
               result.map((item) => {
                  return (
                     <Accordion key={item.recordRecordID}>
                        <AccordionSummary
                           expandIcon={<ExpandMoreIcon />}
                           aria-controls="panel1a-content"
                           id="panel1a-header">
                           <Typography variant="subtitle2" color="primary">
                              <strong>
                                 {item.user.firstName} {item.user.lastName}
                              </strong>
                           </Typography>
                        </AccordionSummary>
                        {resultDate.map((i) => {
                           if (item.userUserID === i.userUserID)
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
                                                         <AccordionSummary
                                                            aria-controls="panel1a-content"
                                                            id="panel1a-header">
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
                                                      <Link to={`/record/delete/${i.record.recordID}`}>
                                                         <Button
                                                            size="small"
                                                            variant="contained"
                                                            color="error"
                                                            sx={{ m: 1, width: "100px" }}
                                                            style={{ textTransform: "none" }}>
                                                            Delete
                                                         </Button>
                                                      </Link>
                                                   </Grid>
                                                </Grid>
                                             </Accordion>
                                          )
                                    })}
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

export default RecordAll
