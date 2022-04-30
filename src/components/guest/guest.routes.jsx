import React, { lazy, Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import GuestHome from "../../pages/guest/guest.home"

const GuestAbout = lazy(() => import("../../pages/guest/guest.about"))
const GuestService = lazy(() => import("../../pages/guest/guest.service"))
const GuestBlog = lazy(() => import("../../pages/guest/guest.blog"))
const GuestContact = lazy(() => import("../../pages/guest/guest.contact"))
const GuestLogin = lazy(() => import("../../pages/guest/guest.login"))

const renderLoader = () => <p>Loading</p>

const GuestRoutes = () => {
   return (
      <>
         <Routes>
            <Route
               path="/login"
               element={
                  <Suspense fallback={renderLoader()}>
                     <GuestLogin />
                  </Suspense>
               }
            />
            <Route
               path="/contact"
               element={
                  <Suspense fallback={renderLoader()}>
                     <GuestContact />
                  </Suspense>
               }
            />
            <Route
               path="/blog"
               element={
                  <Suspense fallback={renderLoader()}>
                     <GuestBlog />
                  </Suspense>
               }
            />
            <Route
               path="/about"
               element={
                  <Suspense fallback={renderLoader()}>
                     <GuestAbout />
                  </Suspense>
               }
            />
            <Route
               path="/service"
               element={
                  <Suspense fallback={renderLoader()}>
                     <GuestService />
                  </Suspense>
               }
            />
            <Route path="/home" element={<GuestHome />} />
            <Route path="/" element={<GuestHome />} />
         </Routes>
      </>
   )
}

export default GuestRoutes
