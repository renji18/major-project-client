import React from "react"
import UploadCircular from "../components/admin/UploadCircular"
import UploadStudentSheet from "../components/admin/UploadStudentSheet"
import UploadSyllabus from "../components/admin/UploadSyllabus"

const AllUploads = () => {
  return (
    <div className=" my-[100px]">
      <div className="flex justify-evenly gap-40 mx-40 mb-20">
        <UploadCircular />
        <UploadStudentSheet />
      </div>
      <UploadSyllabus />
    </div>
  )
}

export default AllUploads
