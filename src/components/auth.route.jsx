import React, { lazy, Suspense } from "react"
import { useAuthData } from "../hooks/useGuest.auth"
import { LinearProgress, Container } from "@mui/material"
import GuestLayout from "./guest/guest.layout"

const AdminLayout = lazy(() => import("./admin/admin.layout"))
const ClientLayout = lazy(() => import("./client/client.layout"))

const renderLoader = () => <p>Loading</p>

const AuthRoute = () => {
   const { isLoading, isFetching, data } = useAuthData()
   let user

   // If statement to handle existing Authentication Restriction data
   if (data) {
      user = { loggedIn: data.authenticated }

      // If statement to handle data inside data object of Authentication Restriction data
      if (data.user) {
         user = { loggedIn: data.authenticated, role: data.user.role }
      }
   }

   // If statements to handle the display of the single page
   if (isLoading || isFetching) {
      return (
         <Container sx={{ mt: "80%", width: "100%" }}>
            <LinearProgress color="secondary" />
         </Container>
      )
   }
   if (user && user.loggedIn) {
      if (user.role === "ADMIN") {
         return (
            <Suspense fallback={renderLoader()}>
               <AdminLayout />
            </Suspense>
         )
      } else if (user.role === "CLIENT") {
         return (
            <Suspense fallback={renderLoader()}>
               <ClientLayout />
            </Suspense>
         )
      } else {
         return <GuestLayout />
      }
   }
   return <GuestLayout />
}

export default AuthRoute
