import React, { useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { ToastContainer } from "react-toastify"
import { getStudentsData } from "./redux/StudentSlice"
import { getCirculars } from "./redux/CircularSlice"
import { getSyllabus } from "./redux/SyllabusSlice"
import Home from "./pages/Home"
import SingleCircular from "./pages/SingleCircular"
import StudentTable from "./pages/StudentTable"
import AllUploads from "./pages/AllUploads"
import Footer from "./components/utils/Footer"
import Navbar from "./components/utils/Navbar"
import "react-toastify/dist/ReactToastify.css"
import MobileNav from "./components/utils/MobileNav"
import Syllabus from "./pages/Syllabus"
import SingleSyllabus from "./pages/SingleSyllabus"

const App = () => {
  const dispatch = useDispatch()
  const { students, circulars, syllabus } = useSelector((state) => state)
  console.log(students, circulars, syllabus, "state ")

  useEffect(() => {
    const dispatcher = () => {
      console.log("called")
      dispatch(getCirculars())
      dispatch(getSyllabus())
      dispatch(getStudentsData())
    }

    dispatcher()
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
        <MobileNav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/circulars/:id" element={<SingleCircular />} />
          <Route path="/students" element={<StudentTable />} />
          <Route path="/uploads" element={<AllUploads />} />
          <Route path="/syllabus" element={<Syllabus />} />
          <Route path="/syllabus/:id" element={<SingleSyllabus />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
