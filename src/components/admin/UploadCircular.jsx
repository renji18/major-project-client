import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { uploadCircular } from "../../redux/CircularSlice"

const UploadCircular = () => {
  const dispatch = useDispatch()
  const [circular, setCircular] = useState(null)

  const handleFileUpload = (files) => {
    if (files.length === 0) return
    setCircular(files[0])
  }

  return (
    <div>
      <div>
        <input
          type="file"
          accept=".pdf,.jpg,.jpeg,.png"
          placeholder="Upload"
          className="border"
          onChange={(e) => handleFileUpload(e.target.files)}
        />
        <button onClick={() => dispatch(uploadCircular({image: circular, name: "Demo", by: "Mittal"}))}>
          Upload
        </button>
      </div>
    </div>
  )
}

export default UploadCircular
