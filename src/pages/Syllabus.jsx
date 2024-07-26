import React, { useState } from "react"
import { useSelector } from "react-redux"
import SyllabusRow from "../components/syllabus/SyllabusRow"

const Syllabus = () => {
  const [_for, setFor] = useState("")
  const [dept, setDept] = useState("")
  const [syllabus, setSyllabus] = useState(null)
  const { data } = useSelector((state) => state?.syllabus)

  const selectDept = (e) => {
    setDept(e.target.value)
  }

  const selectSem = (e) => {
    if (!data) return
    setFor(e.target.value)
    const filterArr = data?.filter((d) => Number(e.target.value) === d?.for)
    setSyllabus(filterArr)
  }

  return (
    <div className="my-[100px]">
      {/* {data && data?.length > 0 && ( */}
      <div className="flex gap-2 mx-10">
        <div className=" border-[1px] w-[30%] px-6 py-5 border-my-green ">
          <select
            onChange={selectDept}
            defaultValue={dept}
            className="bg-transparent cursor-pointer w-full px-3 py-2 border-[1px]  "
          >
            <option value="">------Select Department------</option>
            <option value="Core">Core CSE</option>
            <option value="AI">CSE AI</option>
            <option value="IoT">CSE IoT</option>
          </select>
        </div>

        <div className=" border-[1px] w-[70%] px-6 py-5 border-my-green ">
          <select
            onClick={selectSem}
            defaultValue={_for}
            className={`${
              dept ? "cursor-pointer" : "cursor-not-allowed"
            } bg-transparent w-full px-3 py-2 border-[1px]  `}
            disabled={!dept}
          >
            <option value="">------Select Semester------</option>
            <option value="1">1st Semester</option>
            <option value="2">2nd Semester</option>
            <option value="3">3rd Semester</option>
            <option value="4">4th Semester</option>
            <option value="5">5th Semester</option>
            <option value="6">6th Semester</option>
            <option value="7">7th Semester</option>
            <option value="8">8th Semester</option>
          </select>
        </div>
      </div>
      {/* )} */}

      <SyllabusRow dept={dept} sem={_for}  />
    </div>
  )
}

export default Syllabus
