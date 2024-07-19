import React from "react"

const Footer = () => {
  return (
    <div className="fixed bottom-0 right-0 left-0 bg-white border border-black text-gray-900 flex justify-between px-14 py-2 items-center">
      <p className="font-semibold text-xl">&copy; Dept. of CSE, PIT</p>
      <div className="flex flex-col justify-center flex-wrap font-semibold">
        <p className="text-xl leading-tight">Team</p>
        <div className="flex justify-center items-center flex-wrap gap-2 font-light">
          <p>Mittal Suthar</p>
          <div className="h-[5px] w-[5px] bg-black rounded-full"></div>
          <p>Aadarsh Jha</p>
          <div className="h-[5px] w-[5px] bg-black rounded-full"></div>
          <p>Aryan Singh</p>
          <div className="h-[5px] w-[5px] bg-black rounded-full"></div>
          <p>Aditya Vishwakarma</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
