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
    <div className="hidden lg:block border-b border-b-black fixed z-[50000] top-0 left-0 right-0 bg-white">
      <div className="flex p-5 text-base text-gray-900 items-center justify-between w-full sticky top-0 left-0 right-0 z-[111]">
        <p className="font-semibold text-xl" onClick={() => navigate("/")}>
          Dept. of CSE, PIT
        </p>

        <div className="flex gap-5 items-center">
          {data?.map((e) => (
            <button
              key={e?.title}
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
