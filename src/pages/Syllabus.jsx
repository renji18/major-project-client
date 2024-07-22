import React, { useState } from "react"
import { useSelector } from "react-redux"
import SyllabusRow from "../components/syllabus/SyllabusRow"

const Syllabus = () => {
  const [_for, setFor] = useState("")
  const [syllabus, setSyllabus] = useState(null)
  const { data } = useSelector((state) => state?.syllabus)

  const selectSem = (e) => {
    if (!data) return
    setFor(e.target.value)
    const filterArr = data?.filter((d) => Number(e.target.value) === d?.for)
    setSyllabus(filterArr)
  }

  return (
    <div className="my-[100px]">
      {data && data?.length > 0 && (
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
      )}

      {syllabus && syllabus?.length > 0 && (
        <div className="mx-20 my-[100px] tracking-wide relative border-[2px] overflow-y-scroll border-my-green rounded-md">
          <div className="sticky bg-white top-0 px-2 pt-2">
            <div
              className="grid font-medium text-2xl text-center capitalize mb-2 relative"
              style={{ gridTemplateColumns: "1fr 1fr 1fr 1fr" }}
            >
              <p>#</p>
              <p>Name</p>
              <p>Last Updated</p>
              <p>Options</p>
            </div>
          </div>
          <div className="mb-[4px]">
            {syllabus && syllabus?.length > 0 ? (
              syllabus?.map((e, i) => <SyllabusRow e={e} i={i} key={e?._id} />)
            ) : (
              <p className="text-center text-2xl font-medium pb-6 pt-3">
                No Data to Show
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Syllabus
