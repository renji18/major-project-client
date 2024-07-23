import React, { useState } from "react"

const Exam = () => {
  const [sem, setSem] = useState("")
  const [dept, setDept] = useState("")

  const selectDept = (e) => {
    setDept(e.target.value)
  }

  const selectSem = (e) => {
    setSem(e.target.value)
  }

  return (
    <div className="my-[100px]">
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
            onChange={selectSem}
            defaultValue={sem}
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
    </div>
  )
}

export default Exam
