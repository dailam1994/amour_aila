import React from "react"
import { Container, Typography } from "@mui/material"
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api"

const GuestContact = () => {
   // Google Map API
   const { isLoaded } = useJsApiLoader({
      id: "google-map-script",
      googleMapsApiKey: "AIzaSyDuk40GgbJUHD6QXpF7HBUnb0mPKTPofsc",
   })

   const containerStyle = {
      width: "100%",
      height: "300px",
   }

   const center = {
      lat: -27.470125,
      lng: 153.021072,
   }

   return isLoaded ? (
      <>
         <GoogleMap className="map" mapContainerStyle={containerStyle} center={center} zoom={13}>
            {/* Child components, such as markers, info windows, etc. */}
            <div className="marker" style={{ backgroundColor: "red", cursor: "pointer" }} title="marker" />
         </GoogleMap>
         <Container sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ m: "10px" }} variant="h4">
               <strong>Contact US</strong>
            </Typography>
            <Typography sx={{ my: "5px", mx: "20px" }} style={{ color: "rgb(0,0,0)" }}>
               Location: Brisbane <br />
               Address: 123 Findastreet Road <br />
               Email: lashingsucess@amouraila.com <br />
               Phone: 3387 6987
            </Typography>
            <Typography sx={{ m: "10px" }} variant="h4">
               <strong>Opening Hours</strong>
            </Typography>
            <Typography sx={{ my: "15px", mx: "20px" }} style={{ color: "rgb(0,0,0)" }}>
               Sunday: 10AM to 6PM <br />
               Monday: 8AM to 4PM <br />
               Tuesday: 8AM to 4PM <br />
               Wednesday: 8AM to 4PM <br />
               Thursday: 8AM to 4PM <br />
               Friday: 8AM to 4PM <br />
               Saturday: 10AM to 6PM
            </Typography>
         </Container>
      </>
   ) : (
      <>
         <Container sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ m: "10px" }} variant="h4">
               <strong>Contact US</strong>
            </Typography>
            <Typography sx={{ my: "5px", mx: "20px" }} style={{ color: "rgb(0,0,0)" }}>
               Location: Brisbane <br />
               Address: 123 Findastreet Road <br />
               Email: lashingsucess@amouraila.com <br />
               Phone: 3387 6987
            </Typography>
            <Typography sx={{ m: "10px" }} variant="h4">
               <strong>Opening Hours</strong>
            </Typography>
            <Typography sx={{ my: "15px", mx: "20px" }} style={{ color: "rgb(0,0,0)" }}>
               Sunday: 10AM to 6PM <br />
               Monday: 8AM to 4PM <br />
               Tuesday: 8AM to 4PM <br />
               Wednesday: 8AM to 4PM <br />
               Thursday: 8AM to 4PM <br />
               Friday: 8AM to 4PM <br />
               Saturday: 10AM to 6PM
            </Typography>
         </Container>
      </>
   )
}

export default GuestContact
