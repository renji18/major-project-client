import { configureStore } from "@reduxjs/toolkit"
import StudentSlice from "./StudentSlice"
import CircularSlice from "./CircularSlice"
import SyllabusSlice from "./SyllabusSlice"

const store = configureStore({
  reducer: {
    students: StudentSlice,
    circulars: CircularSlice,
    syllabus: SyllabusSlice,
  },
})

export default store
