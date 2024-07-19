import React from "react"
import ShowCirculars from "../components/home/ShowCirculars"

const Home = () => {
  return (
    <div className="flex justify-center items-center relative h-screen bg-black/25">
      <img
        src="https://api.ignitehost.in/api/v-1/view/a6319350-b6cf-11ee-b929-f5a9fff8a41a/file_20240119193411_b851b86b-b701-11ee-b929-f5a9fff8a41a.jpg/"
        className="w-full h-full object-cover -z-10"
        alt=""
      />
      <div className="absolute lg:right-10 bg-white/70 rounded-lg p-3 lg:p-5">
        <ShowCirculars />
      </div>
    </div>
  )
}

export default Home
