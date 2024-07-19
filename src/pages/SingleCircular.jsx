import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import Loader from "../components/utils/Loader"
import { useSelector } from "react-redux"

const SingleCircular = () => {
  const location = useLocation()
  const [file, setFile] = useState(null)

  const { data } = useSelector((state) => state?.circulars)

  useEffect(() => {
    const fileSetter = () => {
      if (!data) return
      console.log(location?.pathname)
      const file = data?.find(
        (item) => item?.file?.cloudinary_id === location?.pathname?.slice(1)
      )
      setFile(file?.file?.avatar)
    }
    fileSetter()
  }, [data, location])

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      {file ? (
        <iframe
          src={file}
          className="h-full object-center w-full max-w-[100vw] py-[70px]"
          frameborder="0"
          title={file}
        ></iframe>
      ) : (
        <div className="scale-[3]">
          <Loader />
        </div>
      )}
    </div>
  )
}

export default SingleCircular
