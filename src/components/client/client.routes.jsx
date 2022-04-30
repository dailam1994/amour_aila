import React from "react"
import { Routes, Route } from "react-router-dom"
import ClientHome from "../../pages/client/client.home"
import ClientSettings from "../../pages/client/client.settings"
import UserEdit from "../../pages/client/user/user.edit"
import BookingAvailability from "../../pages/client/booking/booking.avaliability"
import BookingAdd from "../../pages/client/booking/booking.add"
import AppointmentUser from "../../pages/client/appointment/appointment.user"
import DisplayMode from "../../pages/display/display.mode"

const AdminRoutes = () => {
   return (
      <>
         <Routes>
            <Route path="display" element={<DisplayMode />} />
            <Route path="appointment/user" element={<AppointmentUser />} />
            <Route path="booking/availability/:date" element={<BookingAdd />} />
            <Route path="booking/availability" element={<BookingAvailability />} />
            <Route path="user/edit" element={<UserEdit />} />
            <Route path="settings" element={<ClientSettings />} />
            <Route path="registered/home" element={<ClientHome />} />
            <Route path="/" element={<ClientHome />} />
         </Routes>
      </>
   )
}

export default AdminRoutes
