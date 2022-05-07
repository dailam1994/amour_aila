import React from "react"
import { Routes, Route } from "react-router-dom"
import ClientHome from "../../pages/client/client.home"
import ClientSettings from "../../pages/client/client.settings"
import UserEdit from "../../pages/client/user/user.edit"
import RecordList from "../../pages/client/record/record.list"
import RecordAdd from "../../pages/admin/record/record.add"
import RecordUpdate from "../../pages/admin/record/record.update"
import DisplayMode from "../../pages/display/display.mode"

const AdminRoutes = () => {
   return (
      <>
         <Routes>
            <Route path="record" element={<RecordList />} />
            <Route path="record/add" element={<RecordAdd />} />
            <Route path="record/update/:id" element={<RecordUpdate />} />
            <Route path="display" element={<DisplayMode />} />
            <Route path="user/edit" element={<UserEdit />} />
            <Route path="settings" element={<ClientSettings />} />
            <Route path="registered/home" element={<ClientHome />} />
            <Route path="/" element={<ClientHome />} />
         </Routes>
      </>
   )
}

export default AdminRoutes
