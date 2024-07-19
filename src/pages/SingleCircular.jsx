import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import Loader from "../components/utils/Loader"

const SingleCircular = () => {
  const location = useLocation()
  const [file, setFile] = useState(null)

  useEffect(() => {
    const fileSetter = () => {
      if (!location?.state) return
      setFile(location?.state?.file)
    }
    fileSetter()
  }, [location])

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
