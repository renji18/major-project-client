import React, { useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { uploadCircular } from "../../redux/CircularSlice"
import { IoMdCloudUpload } from "react-icons/io"

const UploadCircular = () => {
  const inputRef = useRef(null)
  const dispatch = useDispatch()
  const [circular, setCircular] = useState(null)
  const [name, setName] = useState("")

  const handleFileUpload = (files) => {
    if (files.length === 0) return
    setCircular(files[0])
  }

  const handleInput = () => {
    if (!inputRef) return
    inputRef.current.click()
  }

  return (
    <div>
      <div>
        <div
          className="rounded-md bg-blue-50 py-16 px-32 border-dashed border-[#00c9d4] border-[2px]"
          onClick={handleInput}
        >
          <div className="text-[75px] flex justify-center items-center text-blue-700 ">
            <IoMdCloudUpload />
          </div>
          <p className="">{circular ? circular.name : "Upload a Circular"}</p>
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
          onClick={() =>
            dispatch(uploadCircular({ image: circular, name, by: "Mittal" }))
          }
          className="bg-[#00c9d4] rounded-lg px-[20px] py-[8px]"
        >
          Upload
        </button>
      </div>
    </div>
  )
}

export default UploadCircular
