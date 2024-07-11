import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import StudentRow from "./StudentRow"
import { sendEmailStudents } from "../../redux/StudentSlice"
import { MdOutlineArrowDropDown } from "react-icons/md"

const StudentData = () => {
  const { data } = useSelector((state) => state?.students)
  const dispatch = useDispatch()
  const [feeType, setFeeType] = useState("tuition")
  const [sendEmailTo, setSendEmailTo] = useState([])
  const [showDropDown, setShowDropDown] = useState(false)

  const DropDown = () => (
    <div className="absolute right-16 top-8 p-2 border border-[#00c9d464] rounded-md flex flex-col gap-[5px] text-xl  bg-white  shadow-2xl">
      <p
        onClick={() => {
          setFeeType("tuition")
          setShowDropDown(false)
        }}
        className="border-b  px-6 py-3 cursor-pointer"
      >
        Tuition Fees
      </p>
      <p
        onClick={() => {
          setFeeType("bus")
          setShowDropDown(false)
        }}
        className="border-b  px-6 py-3 cursor-pointer"
      >
        Bus Fees
      </p>
      <p
        onClick={() => {
          setFeeType("hostel")
          setShowDropDown(false)
        }}
        className="px-6 py-3 cursor-pointer"
      >
        Hostel Fees
      </p>
    </div>
  )
  return (
    <div className="m-5 p-2 border-[2px] border-[#00c9d4] rounded-md ">
      <div
        className="grid font-medium text-2xl text-center capitalize mb-1 relative"
        style={{ gridTemplateColumns: "auto 1fr 1fr 1fr 1fr 1fr" }}
      >
        <p className="w-[50px]">#</p>
        <p>Name</p>
        <p>Enrollment Number</p>
        <p>Phone Number</p>
        <p>Division</p>
        <p
          className="flex justify-center items-center cursor-pointer"
          onClick={() => setShowDropDown(!showDropDown)}
        >
          {feeType} Fees{" "}
          <span>
            <MdOutlineArrowDropDown size={23} />
          </span>
        </p>
        {showDropDown && <DropDown />}
      </div>

      <div
        className="grid font-medium text-xl text-center capitalize mb-4 border-b-[#00c9d4] border-b"
        style={{ gridTemplateColumns: "auto 1fr 1fr 1fr 1fr 1fr" }}
      >
        <p className="w-[50px] invisible">#</p>
        <p className="invisible">Name</p>
        <p className="invisible">Enrollment Number</p>
        <p className="invisible">Phone Number</p>
        <p className="invisible">Division</p>
        <div className="grid " style={{ gridTemplateColumns: "1fr 1fr 1fr" }}>
          <p className="min-w-[100px]">Total</p>
          <p className="min-w-[100px]">Paid</p>
          <p className="min-w-[100px]">Pending</p>
        </div>
      </div>

      <div className="space-y-3 ">
        {data?.map((e, i) => (
          <StudentRow
            e={e}
            i={i}
            feeType={feeType}
            key={e?._id}
            setSendEmailTo={setSendEmailTo}
            sendEmailTo={sendEmailTo}
          />
        ))}
        {sendEmailTo?.length > 0 && (
          <div className="flex justify-end">
            <button
              onClick={() =>
                dispatch(
                  sendEmailStudents({ type: feeType, students: sendEmailTo })
                )
              }
              className="bg-[#00c9d4] rounded-lg px-[20px] py-[8px]"
            >
              Send Email
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default StudentData
