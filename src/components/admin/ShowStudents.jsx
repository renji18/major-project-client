import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { sendEmailStudents } from "../../redux/StudentSlice"

const ShowStudents = () => {
  const dispatch = useDispatch()
  const { data } = useSelector((state) => state.students)

  return (
    <div>
      <button
        onClick={() =>
          dispatch(sendEmailStudents({ type: "tuition", students: data }))
        }
      >
        Send Email
      </button>
    </div>
  )
}

export default ShowStudents
