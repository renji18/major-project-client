import React from "react"
import UploadStudentSheet from "../components/admin/UploadStudentSheet"
import UploadCircular from "../components/admin/UploadCircular"
import StudentData from "../components/admin/StudentData"

const Admin = () => {
  return (
    <div className="flex flex-col justify-center gap-10 m-2">
      <div className="flex justify-evenly ">
        <UploadStudentSheet />
        <UploadCircular />
      </div>
      <StudentData />
    </div>
  )
}

export default Admin
