import React from "react"
import UploadStudentSheet from "../components/admin/UploadStudentSheet"
import UploadCircular from "../components/admin/UploadCircular"
import StudentData from "../components/admin/StudentData"

const Admin = () => {
  return (
    <div className="flex flex-col justify-center gap-2 mt-5">
      <div className="flex justify-evenly gap-40 mx-40">
        <UploadStudentSheet />
        <UploadCircular />
      </div>
      <StudentData />
    </div>
  )
}

export default Admin
