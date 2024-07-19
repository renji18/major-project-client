import React, { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [active, setActive] = useState("Home")

  const handleClick = (url, title) => {
    navigate(url)
    setActive(title)
  }

  const data = [
    { title: "Home", path: "/" },
    { title: "CSE Dept.", path: "/department" },
    { title: "Syllabus", path: "/syllabus" },
    { title: "Exam", path: "/exam" },
    { title: "Events", path: "/events" },
    { title: "Help", path: "/help" },
    { title: "Contact Us", path: "/contact" },
    { title: "Upload", path: "/uploads" },
    { title: "Students", path: "/students" },
  ]

  useEffect(() => {
    setActive(data?.find((d) => d?.path === location.pathname)?.title)
  }, [location])

  return (
    <div className="border border-black fixed sm:block z-[50000] top-0 left-0 right-0  bg-white">
      <div className="flex px-5 text-base text-gray-900 py-5 sm:py-5 items-center justify-between w-full sticky top-0 left-0 right-0 z-[111]">
        <p className="font-semibold text-xl">Dept. of CSE, PIT</p>

        <div className="flex gap-6 items-center">
          {data?.map((e) => (
            <button
              className={`${e?.title === active ? "underline" : ""} ${
                e?.title === "Home" && location?.pathname === "/"
                  ? "hidden"
                  : ""
              }`}
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
