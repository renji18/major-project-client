import { configureStore } from "@reduxjs/toolkit"
import StudentSlice from "./StudentSlice"
import CircularSlice from "./CircularSlice"

const store = configureStore({
  reducer: {
    students: StudentSlice,
    circulars: CircularSlice,
  },
})

export default store
