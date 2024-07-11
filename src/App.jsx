import React, { useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Admin from "./pages/Admin"
import { useDispatch } from "react-redux"
import { getStudentsData } from "./redux/StudentSlice"
import { getCirculars } from "./redux/CircularSlice"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

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
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
