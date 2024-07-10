import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

// Uploads student excel sheet
export const uploadExcelSheet = createAsyncThunk(
  "uploadExcelSheet",
  async (data, { rejectWithValue }) => {
    try {
      const fileData = new FormData()
      fileData.append("file", data)
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/admin/students/upload/new`,
        fileData
      )
      return response
    } catch (error) {
      return rejectWithValue(error.response)
    }
  }
)

// Getting students data
export const getStudentsData = createAsyncThunk(
  "getStudentsData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/admin/students/all`
      )
      return response
    } catch (error) {
      return rejectWithValue(error.response)
    }
  }
)

// Send Email to students
export const sendEmailStudents = createAsyncThunk(
  "sendEmailStudents",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/admin/students/pending/${data?.type}`,
        { students: data?.students }
      )
      return response
    } catch (error) {
      return rejectWithValue(error.response)
    }
  }
)

const studentSlice = createSlice({
  name: "Students",
  initialState: {
    loading: false,
    error: null,
    data: [],
    status: "",
  },
  
  extraReducers: (builder) => {
    // Excel Sheet Builders
    builder.addCase(uploadExcelSheet.pending, (state) => {
      state.loading = true
    })
    builder.addCase(uploadExcelSheet.fulfilled, (state) => {
      state.status = "Success"
      state.loading = false
    })
    builder.addCase(uploadExcelSheet.rejected, (state, action) => {
      state.error = action.payload
      state.loading = false
      state.status = "Failed"
    })

    // Get All Students Builders
    builder.addCase(getStudentsData.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getStudentsData.fulfilled, (state, action) => {
      state.data = action.payload.data.students
      state.status = "Success"
      state.loading = false
    })
    builder.addCase(getStudentsData.rejected, (state, action) => {
      state.error = action.payload
      state.loading = false
      state.status = "Failed"
    })

    // Send Email To Students Builders
    builder.addCase(sendEmailStudents.pending, (state) => {
      state.loading = true
    })
    builder.addCase(sendEmailStudents.fulfilled, (state) => {
      state.status = "Success"
      state.loading = false
    })
    builder.addCase(sendEmailStudents.rejected, (state, action) => {
      state.status = "Failed"
      state.error = action.payload
      state.loading = false
    })
  },
})

export default studentSlice.reducer
