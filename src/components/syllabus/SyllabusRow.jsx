import React, { useEffect, useState } from "react"
import { CiMenuKebab } from "react-icons/ci"
import { useNavigate } from "react-router-dom"

const SyllabusRow = ({ dept, sem }) => {
  const navigate = useNavigate()
  const [isHovered, setIsHovered] = useState(false)
  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    if (dept === "" && sem === "") {
      setFilteredData([])
      return
    }

    const filterData = data.filter(
      (i) =>
        (dept===""|| i?.department === dept) &&
        (sem===""|| i?.semester === Number(sem))
    )
    setFilteredData(filterData)
  }, [dept, sem])

  const data = [
    {
      id: 1,
      semester: 1,
      department: "Core",
      subject: "COMA",
      created: "22-07-24",
      updated: "23-07-24",
    },
    {
      id: 2,
      semester: 4,
      department: "AI",
      subject: "NLP",
      created: "22-07-24",
      updated: "23-07-24",
    },
    {
      id: 3,
      semester: 5,
      department: "Core",
      subject: "CD",
      created: "22-07-24",
      updated: "23-07-24",
    },
    {
      id: 4,
      semester: 6,
      department: "AI",
      subject: "DSA",
      created: "22-07-24",
      updated: "23-07-24",
    },
  ]

  return (
    <div>
      <div
        className="grid font-semibold mt-[50px] border-t border-b py-1.5 text-2xl text-center capitalize"
        style={{ gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr" }}
      >
        <p>#</p>
        <p>Subject</p>
        <p>Created</p>
        <p>Updated</p>
        <p>Menu</p>
      </div>
      {filteredData.length > 0 ? (
        filteredData.map((e) => (
          <div
            key={e?.id}
            className={`grid text-lg items-center text-center capitalize cursor-pointer border-b py-1 mx-2 ${
              isHovered === e?.id ? "shadow-sm shadow-black/60" : ""
            }`}
            onMouseEnter={() => setIsHovered(e?.id)}
            onMouseLeave={() => setIsHovered(null)}
            style={{ gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr" }}
            onClick={() => navigate(`/${e?.file?.cloudinary_id}`)}
          >
            <p>{e?.id}</p>
            <p>{e?.subject}</p>
            <p>{e?.created}</p>
            <p>{e?.updated}</p>
            <p className="flex justify-center">
              <CiMenuKebab />
            </p>
          </div>
        ))
      ) : (
        <div className="text-center text-2xl font-medium py-6">
          {dept && sem
            ? "No data available for the selected department and semester."
            : "Please select a department and semester to view the syllabus."}
        </div>
      )}
    </div>
  )
}

export default SyllabusRow
