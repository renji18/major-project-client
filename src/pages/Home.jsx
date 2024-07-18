import React from "react"
import ShowCirculars from "../components/home/ShowCirculars"

const Home = () => {
  return (
    <div className="flex justify-between items-center relative h-screen bg-black/20">
      <img
        src="https://api.ignitehost.in/api/v-1/view/a6319350-b6cf-11ee-b929-f5a9fff8a41a/file_20240119193411_b851b86b-b701-11ee-b929-f5a9fff8a41a.jpg/"
        className="w-full h-full object-cover -z-10"
        alt=""
      />
      <div className="absolute right-10 bg-white/70 max-h-[60%] overflow-scroll rounded-lg p-5 ">
        <ShowCirculars />
      </div>
    </div>
  )
}

export default Home
