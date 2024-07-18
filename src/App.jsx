import React, { useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import { useDispatch } from "react-redux"
import { getStudentsData } from "./redux/StudentSlice"
import { getCirculars } from "./redux/CircularSlice"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import SingleCircular from "./pages/SingleCircular"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import AllUploads from "./pages/AllUploads"
import { getSyllabus } from "./redux/SyllabusSlice"
import StudentsTable from "./pages/StudentsTable"

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
          <Route path="/students" element={<StudentsTable />} />
          <Route path="/circular/:id" element={<SingleCircular />} />
          <Route path="/uploads" element={<AllUploads />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
