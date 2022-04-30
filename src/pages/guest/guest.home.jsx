import React from "react"
import { Typography, Box } from "@mui/material"
import Carousel from "react-material-ui-carousel"

const GuestHome = () => {
   // Custom Carousel Image List
   const carouselList = [
      {
         id: 1,
         src: "../assets/img/carousel-food-wood-dawn-fashion.webp",
         alt: "carousel-food-wood-dawn-fashion",
      },
      {
         id: 2,
         src: "../assets/img/carousel-woman-in-blue-t-shirt-and-blue-shorts-sitting-on-bed.webp",
         alt: "carousel-woman-in-blue-t-shirt-and-blue-shorts-sitting-on-bed",
      },
      {
         id: 3,
         src: "../assets/img/carousel-wood-fashion-hands-people.webp",
         alt: "carousel-wood-fashion-hands-people",
      },
   ]

   return (
      <>
         <Carousel
            navButtonsProps={{
               style: {
                  color: "rgb(74, 80, 181)",
                  backgroundColor: "transparent",
                  borderRadius: 0,
               },
            }}>
            {carouselList.map((item) => (
               <Box key={item.id} sx={{ p: 0 }}>
                  <img className="carousel-img" src={item.src} alt={item.alt} height="auto" width="auto" />
               </Box>
            ))}
         </Carousel>
         <Typography sx={{ m: "10px" }} variant="h4">
            <strong>Welcome to AmourAila,</strong>
         </Typography>
         <Typography sx={{ my: "10px", mx: "30px", pb: "10px" }} style={{ color: "rgb(0,0,0)" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
         </Typography>
      </>
   )
}

export default GuestHome
