import React, { useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useDispatch } from "react-redux"
import { ToastContainer } from "react-toastify"
import { getStudentsData } from "./redux/StudentSlice"
import { getCirculars } from "./redux/CircularSlice"
import { getSyllabus } from "./redux/SyllabusSlice"
import Home from "./pages/Home"
import SingleCircular from "./pages/SingleCircular"
import StudentTable from "./pages/StudentTable"
import AllUploads from "./pages/AllUploads"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import "react-toastify/dist/ReactToastify.css"

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getStudentsData())
  }, [])

  useEffect(() => {
    dispatch(getCirculars())
  }, [])

  useEffect(() => {
    dispatch(getSyllabus())
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
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<StudentTable />} />
          <Route path="/circular/:id" element={<SingleCircular />} />
          <Route path="/uploads" element={<AllUploads />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
