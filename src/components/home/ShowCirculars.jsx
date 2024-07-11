import React from "react"
import { useSelector } from "react-redux"

const ShowCirculars = () => {
  const { data } = useSelector((state) => state?.circulars)

  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-3">
        <p className="text-center text-[35px] font-bold mb-8">Circulars</p>
        <div className="border-2 border-[#00c9d4] px-8 ">
          {data?.map((e) => (
            <div key={e?._id} className="border-b border-b-[#00c9d4] last:border-none py-4 sm:min-w-[400px] gap-10">
              <p className="hover:underline text-xl cursor-pointer">{e?.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ShowCirculars
