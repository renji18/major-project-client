import React, { useState } from "react"
import img from "../../assets/parulimg.png"
import { useNavigate } from "react-router-dom"

const ShowExam = ({ filteredData }) => {
  const navigate = useNavigate()
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="grid items-center justify-center gap-16 p-10 mx-16 my-10 "
      style={{ gridTemplateColumns: "1fr 1fr" }}
    >
      {filteredData?.length > 0 ? (
        filteredData?.map((e) => (
          <div
            key={e?.id}
            className={`relative overflow-hidden rounded-lg shadow-md  ${
              isHovered === e?.id ? "border-[3px] border-black" : ""
            }`}
            onMouseEnter={() => setIsHovered(e?.id)}
            onMouseLeave={() => setIsHovered(null)}
            onClick={() => navigate(`/${e?.file?.cloudinary_id}`)}
          >
            <img
              src={img}
              alt={e?.exam_type}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white text-center py-2">
              {e?.file?.exam_type}
            </div>
          </div>
        ))
      ) : (
        <div className="text-center text-2xl font-medium py-6">
          No data available for the selected department and semester.
        </div>
      )}
    </div>
  )
}

export default ShowExam
