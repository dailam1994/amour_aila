import React from "react"
import { Routes, Route } from "react-router-dom"
import AdminHome from "../../pages/admin/admin.home"
import AdminSettings from "../../pages/admin/admin.settings"
import UserAll from "../../pages/admin/user/user.all"
import UserSingle from "../../pages/admin/user/user.single"
import UserAdd from "../../pages/admin/user/user.add"
import UserEdit from "../../pages/admin/user/user.edit"
import UserDelete from "../../pages/admin/user/user.delete"
import RecordAll from "../../pages/admin/record/record.all"
import RecordUpdate from "../../pages/admin/record/record.update"
import RecordDelete from "../../pages/admin/record/record.delete"
import DisplayMode from "../../pages/display/display.mode"
import AdminTutorial from "../../pages/admin/admin.tutorial"

const AdminRoutes = () => {
   return (
      <>
         <Routes>
            <Route path="record" element={<RecordAll />} />
            <Route path="record/delete/:id" element={<RecordDelete />} />
            <Route path="record/update/:id" element={<RecordUpdate />} />
            <Route path="display" element={<DisplayMode />} />
            <Route path="tutorial" element={<AdminTutorial />} />
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
