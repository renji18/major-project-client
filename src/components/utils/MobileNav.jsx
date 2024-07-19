import React, { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { FiMenu } from "react-icons/fi"
import { IoClose } from "react-icons/io5"

const MobileNav = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [active, setActive] = useState("Home")

  const handleClick = (url, title) => {
    navigate(url)
    setActive(title)
    setIsMenuOpen(false)
  }

  const data = [
    { title: "Home", path: "/" },
    { title: "CSE Dept.", path: "/department" },
    { title: "Syllabus", path: "/syllabus" },
    { title: "Exam", path: "/exam" },
    { title: "Events", path: "/events" },
    { title: "Help", path: "/help" },
    { title: "Contact Us", path: "/contact" },
    // { title: "Upload", path: "/uploads" },
    // { title: "Students", path: "/students" },
  ]

  useEffect(() => {
    setActive(data?.find((d) => d?.path === location.pathname)?.title)
  }, [location])

  return (
    <div className="fixed top-0 left-0 right-0 lg:hidden text-gray-900 bg-white z-[50000]">
      <div className="flex p-3 border-b border-b-black justify-between items-center">
        <p className="font-semibold text-lg">Dept. of CSE, PIT</p>
        <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <IoClose size={25} /> : <FiMenu size={25} />}
        </div>
      </div>
      <div
        className={`flex flex-col gap-2 ${
          isMenuOpen ? "p-3 border border-black" : "h-0 overflow-hidden"
        } transition-all duration-200 ease-linear`}
      >
        {data?.map((e) => (
          <button
            key={e?.title}
            className={`${e?.title === active ? "underline" : ""} ${
              e?.title === "Home" && location?.pathname === "/" ? "hidden" : ""
            } border-b border-b-black last:border-none`}
            onClick={() => handleClick(e?.path, e?.title)}
          >
            {e?.title}
          </button>
        ))}
      </div>
    </div>
  )
}

export default MobileNav
