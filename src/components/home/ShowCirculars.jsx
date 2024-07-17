import React from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const ShowCirculars = () => {
  const navigate = useNavigate()
  const { data } = useSelector((state) => state?.circulars)

  return (
    <div className="flex flex-col justify-center items-center gap-3 tracking-wide">
      <p className="text-center text-[35px] font-bold">Circulars</p>
      <div className="border-2 border-cyan-600 bg-white/85 px-5">
        {data && data?.length > 0 ? (
          data?.map((e) => (
            <div
              key={e?._id}
              className="flex items-end justify-between border-b border-b-cyan-600 last:border-none py-2 sm:min-w-[400px] gap-10"
            >
              <p
                className="hover:underline text-2xl cursor-pointer"
                onClick={() =>
                  navigate(
                    `/circular/${String(e?.file?.cloudinary_id).split("/")[1]}`,
                    { state: { file: e?.file?.avatar } }
                  )
                }
              >
                {e?.name}
              </p>
              <p className="text-base text-gray-500">
                {e?.createdAt?.split("T")[0]}
              </p>
            </div>
          ))
        ) : (
          <p className="px-20 py-10 text-xl font-medium">
            No Circulars to Show
          </p>
        )}
      </div>
    </div>
  )
}

export default ShowCirculars

// Hi my name is Mittal
// [h,_my_name_,s_M, ttal]
