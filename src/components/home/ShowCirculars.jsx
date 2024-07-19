import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { getCirculars } from "../../redux/CircularSlice"

const ShowCirculars = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { data } = useSelector((state) => state?.circulars)

  useEffect(() => {
    dispatch(getCirculars())
  }, [])

  return (
    <div className="flex flex-col justify-center items-center gap-3 tracking-wide">
      <p className="text-center text-[35px] font-bold">Circulars</p>
      <div className="border-2 border-my-green bg-white/85 px-5">
        {data && data?.length > 0 ? (
          data?.map((e) => (
            <div
              key={e?._id}
              className="flex items-end justify-between border-b border-b-my-green last:border-none py-2 sm:min-w-[400px] gap-10"
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
