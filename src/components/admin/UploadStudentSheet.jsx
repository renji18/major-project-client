import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { uploadExcelSheet } from "../../redux/StudentSlice"

const UploadStudentSheet = () => {
  const dispatch = useDispatch()
  const [excelFile, setExcelFile] = useState(null)

  const handleFileUpload = (files) => {
    if (files.length === 0) return
    setExcelFile(files[0])
  }

  return (
    <div>
      <div>
        <input
          type="file"
          accept=".xlsx,.xls,.xlsm,.ods,.ots,.xlsb,.xltx"
          placeholder="Upload"
          className="border"
          onChange={(e) => handleFileUpload(e.target.files)}
        />
        <button onClick={() => dispatch(uploadExcelSheet(excelFile))}>
          Upload
        </button>
      </div>
    </div>
  )
}

export default UploadStudentSheet
