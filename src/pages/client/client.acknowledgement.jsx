import React, { Component } from "react"
import { Link } from "react-router-dom"
import { Button, Container, Typography } from "@mui/material"
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn"

// Class Acknowledgement
export default class Acknowledgement extends Component {
   // Beginnning constructor
   constructor(props) {
      // Declared super w.r.t. to props of super-class
      super(props)

      // Declaring class state
      this.state = {
         name: "John",
         surName: "Smith",
         change: true,
      }

      // Binding class methods or I could ES6 arrow function   the method
      this.hack = this.hack.bind(this)
   }

   hack() {
      // Altering the class state
      this.setState({ change: false })
   }

   render() {
      return (
         <div>
            <Typography sx={{ m: "10px" }} variant="h4">
               <strong>Special thanks to developer</strong>
            </Typography>
            <Container>
               {this.state.change ? (
                  <Typography sx={{ m: "10px" }} variant="subtitle">
                     {this.state.name} {this.state.surName}
                  </Typography>
               ) : (
                  <Typography sx={{ m: "10px" }} variant="subtitle" color="secondary">
                     <strong>HACKED! My name Jeff</strong>
                  </Typography>
               )}
               <Button color="error" onClick={this.hack}>
                  Hack!
               </Button>
            </Container>
            <Link to="/settings">
               <Button sx={{ m: "10px", mb: "20px" }} variant="contained" color="primary">
                  <KeyboardReturnIcon fontSize="small" sx={{ mr: "10px" }} />
                  Back
               </Button>
            </Link>
         </div>
      )
   }
}
