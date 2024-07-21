import React, { useState } from "react"
import { useSelector } from "react-redux"

const Syllabus = () => {
  const [_for, setFor] = useState("")
  const [syllabus, setSyllabus] = useState(null)
  const { data } = useSelector((state) => state?.syllabus)

  const selectSem = (e) => {
    setFor(e.target.value)
    const filterArr = data?.filter((d) => Number(e.target.value) === d?.for)
    setSyllabus(filterArr)
  }

  return (
    <div className="my-[100px]">
      <div className=" border-[1px] mx-10 px-6 py-5 border-my-green ">
        <select
          onClick={selectSem}
          defaultValue={_for}
          className="bg-transparent cursor-pointer w-full px-3 py-2 border-[1px]  "
        >
          <option value="select">------Select Semester------</option>
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
  )
}

export default Syllabus
