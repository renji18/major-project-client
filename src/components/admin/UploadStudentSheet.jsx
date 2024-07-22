import React, { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { uploadExcelSheet } from "../../redux/StudentSlice"
import { IoMdCloudUpload } from "react-icons/io"
import Loader from "../utils/Loader"

const UploadStudentSheet = () => {
  const inputRef = useRef(null)
  const dispatch = useDispatch()
  const [excelFile, setExcelFile] = useState(null)

  const { loading, status } = useSelector((state) => state?.students)

  const handleFileUpload = (files) => {
    if (files.length === 0) return
    setExcelFile(files[0])
  }

  const handleInput = () => {
    if (!inputRef) return
    inputRef.current.click()
  }

  return (
    <div className="flex-1">
      <div
        className="rounded-md bg-blue-50 py-5 border-dashed border-my-green border-[2px]"
        onClick={handleInput}
      >
        <div className="text-[60px] flex justify-center items-center text-my-green">
          <IoMdCloudUpload />
        </div>
        <p className="text-center">
          {excelFile ? excelFile.name : "Upload students sheet"}
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
          onClick={() => {
            dispatch(uploadExcelSheet(excelFile))
            setExcelFile(null)
          }}
          className={`${
            excelFile === null
              ? "bg-my-green/20 text-black cursor-not-allowed"
              : "bg-my-green text-white cursor-pointer"
          } rounded-lg px-[20px] py-[8px] flex justify-center ${
            status === "uploading_sheet" && loading && "px-[35px]"
          }`}
          disabled={excelFile === null}
        >
          {status === "uploading_sheet" && loading ? <Loader /> : "Upload"}
        </button>
      </div>
    </div>
  )
}

export default UploadStudentSheet
