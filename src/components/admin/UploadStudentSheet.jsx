import React, { useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { uploadExcelSheet } from "../../redux/StudentSlice"
import { IoMdCloudUpload } from "react-icons/io";


const UploadStudentSheet = () => {
  const inputRef = useRef(null)
  const dispatch = useDispatch()
  const [excelFile, setExcelFile] = useState(null)

  const handleFileUpload = (files) => {
    if (files.length === 0) return
    setExcelFile(files[0])
  }

  const handleInput = () => {
    if (!inputRef) return
    inputRef.current.click()
  }

  return (
    <div>
      <div className="rounded-md bg-blue-50 py-16 px-32 border-dashed border-[#00c9d4] border-[2px]" onClick={handleInput}>
      <div className="text-[75px] flex justify-center items-center text-blue-700 ">
      <IoMdCloudUpload />
      </div>
        <p className="">
          {excelFile ? excelFile.name : "Upload a sheet"}
        </p>
        <input
          type="file"
          accept=".xlsx,.xls,.xlsm,.ods,.ots,.xlsb,.xltx"
          placeholder="Upload"
          className="hidden"
          ref={inputRef}
          onChange={(e) => handleFileUpload(e.target.files)}
        />
      </div>
      <div className="flex justify-end my-2">
        <button
          onClick={() => dispatch(uploadExcelSheet(excelFile))}
          className="bg-[#00c9d4] rounded-lg px-[20px] py-[8px] "
        >
          Upload
        </button>
      </div>
    </div>
  )
}

export default UploadStudentSheet
