import React, { useEffect, useState } from "react"
import img from "../../assets/parulimg.png"

const ShowExam = ({ dept, sem }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    if (dept === "" && sem === "") {
      setFilteredData([])
      return
    }

    const filterData = data.filter(
      (i) =>
        (dept === "" || i?.department === dept) &&
        (sem === "" || i?.semester === Number(sem))
    )
    setFilteredData(filterData)
  }, [dept, sem])

  const data = [
    {
      id: 1,
      semester: 5,
      department: "AI",
      exam_type: "Midsem",
      createdAt: "2024-07-26T05:57:16.083Z",
      updatedAt: "2024-07-26T05:57:16.083Z",
    },
    {
      id: 2,
      semester: 7,
      department: "AI",
      exam_type: "Weekly",
      createdAt: "2024-07-26T05:57:16.083Z",
      updatedAt: "2024-07-26T05:57:16.083Z",
    },
    {
      id: 3,
      semester: 3,
      department: "AI",
      exam_type: "Midsem",
      createdAt: "2024-07-26T05:57:16.083Z",
      updatedAt: "2024-07-26T05:57:16.083Z",
    },
    {
      id: 4,
      semester: 6,
      department: "Core",
      exam_type: "Practical",
      createdAt: "2024-07-26T05:57:16.083Z",
      updatedAt: "2024-07-26T05:57:16.083Z",
    },
    {
      id: 5,
      semester: 2,
      department: "Core",
      exam_type: "Endsem",
      createdAt: "2024-07-26T05:57:16.083Z",
      updatedAt: "2024-07-26T05:57:16.083Z",
    },
  ]

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
          >
            <img
              src={img}
              alt={e?.exam_type}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white text-center py-2">
              {e?.exam_type}
            </div>
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

export default ShowExam
