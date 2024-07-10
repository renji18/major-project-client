import React from 'react'
import UploadStudentSheet from '../components/admin/UploadStudentSheet'
import ShowStudents from '../components/admin/ShowStudents'
import UploadCircular from '../components/admin/UploadCircular'

const Admin = () => {
  return (
    <div>
      <p>Upload Excel Sheet</p>
      <UploadStudentSheet/>
      <ShowStudents/>
      <p>Upload Circular</p>
      <UploadCircular/>
    </div>
  )
}

export default Admin
