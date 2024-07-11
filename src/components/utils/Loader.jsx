import React from "react"
import LOADER from "../../assets/loader.svg"

const Loader = () => {
  return (
    <div>
      <img
        src={LOADER}
        alt="loader"
        // className="w-[100px] h-[100px]"
      />
    </div>
  )
}

export default Loader
