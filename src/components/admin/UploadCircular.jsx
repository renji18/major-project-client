import React, { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { uploadCircular } from "../../redux/CircularSlice"
import { IoMdCloudUpload } from "react-icons/io"
import Loader from "../utils/Loader"

const UploadCircular = () => {
  const inputRef = useRef(null)
  const dispatch = useDispatch()
  const [circular, setCircular] = useState(null)
  const [name, setName] = useState("")
  const [_for, setFor] = useState("all")

  const { loading, status } = useSelector((state) => state?.circulars)

  const handleFileUpload = (files) => {
    if (files.length === 0) return
    setCircular(files[0])
  }

  const handleInput = () => {
    if (!inputRef) return
    inputRef.current.click()
  }

  return (
    <div className="flex-1">
      <div>
        <div
          className="rounded-md bg-blue-50 py-5 border-dashed border-my-green border-[2px]"
          onClick={handleInput}
        >
          <div className="text-[60px] flex justify-center items-center text-my-green ">
            <IoMdCloudUpload />
          </div>
          <p className="text-center">
            {circular ? circular.name : "Upload a Circular"}
          </p>
          <input
            type="file"
            accept=".pdf"
            placeholder="Upload"
            className="hidden"
            ref={inputRef}
            onChange={(e) => handleFileUpload(e.target.files)}
          />
        </div>
        <div className="flex items-center gap-3.5">
          <select
            onClick={(e) => setFor(e.target.value)}
            defaultValue={_for}
            className="bg-transparent rounded-lg border-[2px] my-2 cursor-pointer outline-none py-2 pl-2 border-my-green"
          >
            <option value="all">All Semesters</option>
            <option value="1">1st Semester</option>
            <option value="2">2nd Semester</option>
            <option value="3">3rd Semester</option>
            <option value="4">4th Semester</option>
            <option value="5">5th Semester</option>
            <option value="6">6th Semester</option>
            <option value="7">7th Semester</option>
            <option value="8">8th Semester</option>
          </select>
          <input
            type="text"
            placeholder="File Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border-[2px] outline-none my-2 py-1.5 px-3 border-my-green"
          />
        </div>
      </div>
      <div className="flex justify-end">
        <button
          onClick={() => {
            dispatch(uploadCircular({ image: circular, name, _for }))
            setCircular(null)
            setName("")
          }}
          className={`${
            circular === null
              ? "bg-my-green/20 text-black cursor-not-allowed"
              : "bg-my-green text-white cursor-pointer"
          } rounded-lg px-[20px] py-[8px] flex justify-center ${
            status === "uploading_circular" && loading && "px-[35px]"
          }`}
          disabled={circular === null}
        >
          {status === "uploading_circular" && loading ? <Loader /> : "Upload"}
        </button>
      </div>
    </div>
  )
}

export default UploadCircular
