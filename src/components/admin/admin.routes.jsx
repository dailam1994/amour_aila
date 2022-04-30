import React from "react"
import { Routes, Route } from "react-router-dom"
import AdminHome from "../../pages/admin/admin.home"
import AdminSettings from "../../pages/admin/admin.settings"
import UserAll from "../../pages/admin/user/user.all"
import UserSingle from "../../pages/admin/user/user.single"
import UserAdd from "../../pages/admin/user/user.add"
import UserEdit from "../../pages/admin/user/user.edit"
import UserDelete from "../../pages/admin/user/user.delete"
import ScheduleAll from "../../pages/admin/schedule/schedule.all"
import ScheduleAdd from "../../pages/admin/schedule/schedule.add"
import DateAdd from "../../pages/admin/schedule/date.add"
import ScheduleView from "../../pages/admin/schedule/schedule.view"
import ScheduleEdit from "../../pages/admin/schedule/schedule.edit"
import ScheduleDelete from "../../pages/admin/schedule/schedule.delete"
import AdminAppointment from "../../pages/admin/appointment/appointment.home"
import AppointmentEdit from "../../pages/admin/appointment/appointment.edit"
import AppointmentDelete from "../../pages/admin/appointment/appointment.delete"
import DisplayMode from "../../pages/display/display.mode"

const AdminRoutes = () => {
   return (
      <>
         <Routes>
            <Route path="display" element={<DisplayMode />} />
            <Route path="appointment/delete/:id" element={<AppointmentDelete />} />
            <Route path="appointment/edit/:id" element={<AppointmentEdit />} />
            <Route path="appointment" element={<AdminAppointment />} />
            <Route path="schedule/delete/:id" element={<ScheduleDelete />} />
            <Route path="schedule/edit/:id" element={<ScheduleEdit />} />
            <Route path="schedule/view" element={<ScheduleView />} />
            <Route path="date/add" element={<DateAdd />} />
            <Route path="schedule/add/:date" element={<ScheduleAdd />} />
            <Route path="schedule/all" element={<ScheduleAll />} />
            <Route path="user/delete/:id" element={<UserDelete />} />
            <Route path="user/edit/:id" element={<UserEdit />} />
            <Route path="user/add" element={<UserAdd />} />
            <Route path="user/single/:id" element={<UserSingle />} />
            <Route path="user/all" element={<UserAll />} />
            <Route path="settings" element={<AdminSettings />} />
            <Route path="home" element={<AdminHome />} />
            <Route path="/" element={<AdminHome />} />
         </Routes>
      </>
   )
}

export default AdminRoutes
