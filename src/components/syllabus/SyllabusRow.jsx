import React, { useState } from "react"
import { CiMenuKebab } from "react-icons/ci"
import { useNavigate } from "react-router-dom"

const SyllabusRow = ({ e, i }) => {
  const navigate = useNavigate()
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div
      className={`grid text-lg items-center text-center capitalize cursor-pointer border-b py-1 mx-2 ${
        isHovered && "shadow-sm shadow-black/60"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ gridTemplateColumns: "1fr 1fr 1fr 1fr" }}
      onClick={() => navigate(`/${e?.file?.cloudinary_id}`)}
    >
      <p>{i}</p>
      <p>{e?.name}</p>
      <p>{String(e?.updatedAt)?.split("T")[0]}</p>
      <p className="flex justify-center">
        <CiMenuKebab />
      </p>
    </div>
  )
}

export default SyllabusRow
