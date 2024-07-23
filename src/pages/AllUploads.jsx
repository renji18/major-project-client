import React, { useEffect, useRef, useState } from "react"
import { IoMdCloudUpload } from "react-icons/io"

const AllUploads = () => {
  const inputRef = useRef(null)
  const [file, setFile] = useState(null)
  const [name, setName] = useState("")
  // const [_for, setFor] = useState("all")
  const [uploadType, setUploadType] = useState("")
  const [department, setDepartment] = useState("")
  const [semester, setSemester] = useState("")

  useEffect(() => {
    if (uploadType === "circular") {
      setDepartment("")
    }
    console.log({
      file: file?.name || "No file",
      name,
      uploadType,
      department: department || "N/A",
      semester: semester || "N/A",
    })
  }, [file, name, uploadType, department, semester])

  const handleInput = () => {
    if (!inputRef) return
    inputRef.current.click()
  }

  const handleFileUpload = (files) => {
    if (files.length === 0) return
    setFile(files[0])
  }

  const upload = () => {
    setFile(null)
    // setUploadType("")
    // setDepartment("")
    // setSemester("")
    setName("")
  }

  return (
    <div className="px-60 my-[100px] ">
      <div className="flex-1">
        <div>
          <div>
            <select
              onChange={(e) => {
                setUploadType(e.target.value)
                console.log(`Upload type selected: ${e.target.value}`)
              }}
              value={uploadType}
              className="bg-transparent rounded-lg border-[2px] my-2 cursor-pointer outline-none py-2 pl-2 border-my-green"
            >
              <option value="">---Select Type---</option>
              <option value="syllabus">Syllabus</option>
              <option value="circular">Circular</option>
            </select>
          </div>
          <div>
            {uploadType === "syllabus" && (
              <div>
                <select
                  onChange={(e) => {
                    setDepartment(e.target.value)
                    console.log(`Department selected: ${e.target.value}`)
                  }}
                  value={department}
                  className="bg-transparent rounded-lg border-[2px] my-2 cursor-pointer outline-none py-2 pl-2 border-my-green"
                >
                  <option value="">---Select Department---</option>
                  <option value="CSE">CSE</option>
                  <option value="AI">AI</option>
                </select>
                {department && (
                  <select
                    onChange={(e) => {
                      setSemester(e.target.value)
                      console.log(`Semester selected: ${e.target.value}`)
                    }}
                    value={semester}
                    className="bg-transparent rounded-lg border-[2px] my-2 cursor-pointer outline-none py-2 pl-2 border-my-green"
                  >
                    <option value="">---Select Semester---</option>
                    <option value="1">1st Semester</option>
                    <option value="2">2nd Semester</option>
                    <option value="3">3rd Semester</option>
                    <option value="4">4th Semester</option>
                    <option value="5">5th Semester</option>
                    <option value="6">6th Semester</option>
                    <option value="7">7th Semester</option>
                    <option value="8">8th Semester</option>
                  </select>
                )}
              </div>
            )}
            <div>
              {uploadType === "circular" && (
                <select
                  onChange={(e) => {
                    setSemester(e.target.value)
                    console.log(
                      `Semester selected for circular: ${e.target.value}`
                    )
                  }}
                  value={semester}
                  className="bg-transparent rounded-lg border-[2px] my-2 cursor-pointer outline-none py-2 pl-2 border-my-green"
                >
                  <option value="semester">---Select Semester---</option>
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
              )}
            </div>
          </div>
          <div
            className="rounded-md bg-blue-50 py-5 border-dashed border-my-green border-[2px]"
            onClick={handleInput}
          >
            <div className="text-[60px] flex justify-center items-center text-my-green ">
              <IoMdCloudUpload />
            </div>
            <p className="text-center">{file ? file.name : "Upload a File"}</p>

            <input
              type="file"
              accept=".pdf"
              placeholder="Upload"
              className="hidden"
              onChange={(e) => {
                handleFileUpload(e.target.files)
              }}
              ref={inputRef}
            />
          </div>
        </div>
        <div>
          <input
            type="text"
            placeholder="File Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value)
              console.log(`File name: ${e.target.value}`)
            }}
            className="w-full rounded-lg border-[2px] outline-none my-2 py-1.5 px-3 border-my-green"
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={upload}
            className={`${
              file === null
                ? "bg-my-green/20 text-black cursor-not-allowed"
                : "bg-my-green text-white cursor-pointer"
            } rounded-lg px-[20px] py-[8px] flex justify-center `}
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  )
}

export default AllUploads
