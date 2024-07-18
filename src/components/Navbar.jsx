import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
const Navbar = () => {
  const navigate = useNavigate()
  const [active, setActive] = useState("Home")

  const handleClick = (url, title) => {
    navigate(url)
    setActive(title)
  }

  const data = [
    { title: "Home", path: "/" },
    { title: "CSE Dept.", path: "/" },
    { title: "Syllabus", path: "/syllabus" },
    { title: "Exam", path: "/" },
    { title: "Events", path: "/" },
    { title: "Help", path: "/" },
    { title: "Contact Us", path: "/" },
    { title: "Upload", path: "/uploads" },
    { title: "Students", path: "/students" },
  ]

  return (
    <div className="border border-black fixed sm:block z-[50000] top-0 left-0 right-0  bg-white">
      <div className="flex px-5 text-base text-gray-900 py-5 sm:py-5 items-center justify-between w-full sticky top-0 left-0 right-0 z-[111]">
        <p className="font-semibold text-xl">Dept. of CSE, PIT</p>

        <div className="flex gap-6 items-center">
          {data?.map((e) => (
            <button
              className={`${e?.title === active ? "underline" : "" }`}
              onClick={() => handleClick(e?.path, e?.title)}
            >
              {e?.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Navbar
