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
          className="rounded-md bg-blue-50 py-5 border-dashed border-cyan-600 border-[2px]"
          onClick={handleInput}
        >
          <div className="text-[60px] flex justify-center items-center text-cyan-600 ">
            <IoMdCloudUpload />
          </div>
          <p className="text-center">
            {circular ? circular.name : "Upload a Circular"}
          </p>
          <input
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            placeholder="Upload"
            className="hidden"
            ref={inputRef}
            onChange={(e) => handleFileUpload(e.target.files)}
          />
        </div>
        <input
          type="text"
          placeholder="File Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-lg border-[2px] my-2 p-2 border-[#009cd4] "
        />
      </div>
      <div className="flex justify-end">
        <button
          onClick={() => {
            dispatch(uploadCircular({ image: circular, name }))
            setCircular(null)
          }}
          className={`${
            circular === null
              ? "bg-cyan-200 text-black cursor-not-allowed"
              : "bg-cyan-600 text-white cursor-pointer"
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
