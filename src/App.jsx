import React, { useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Admin from "./pages/Admin"
import { useDispatch } from "react-redux"
import { getStudentsData } from "./redux/StudentSlice"
import { getCirculars } from "./redux/CircularSlice"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import SingleCircular from "./pages/SingleCircular"

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getStudentsData())
  }, [])
  useEffect(() => {
    dispatch(getCirculars())
  }, [])

  return (
    <div>
      <ToastContainer
        hideProgressBar
        theme="colored"
        newestOnTop
        draggable={false}
        toastStyle={{ color: "#333333" }}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/circular/:id" element={<SingleCircular />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
