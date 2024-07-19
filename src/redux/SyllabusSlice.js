import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { toast } from "react-toastify"

export const uploadSyllabus = createAsyncThunk(
  "uploadSyllabus",
  async (data, { rejectWithValue }) => {
    try {
      const fileData = new FormData()
      fileData.append("syllabus", data?.image)
      fileData.append("name", data?.name)
      fileData.append("_for", data?._for)
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/admin/syllabus/upload`,
        fileData
      )
      return response?.data
    } catch (error) {
      return rejectWithValue(error.response)
    }
  }
)

// Get All Syllabus
export const getSyllabus = createAsyncThunk(
  "getSyllabus",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/admin/syllabus/all`
      )
      return response?.data
    } catch (error) {
      return rejectWithValue(error.response)
    }
  }
)

// Delete Syllabus
export const deleteSyllabus = createAsyncThunk(
  "deleteSyllabus",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_SERVER_URL}/admin/syllabus/delete/${data}`
      )
      return response?.data
    } catch (error) {
      return rejectWithValue(error.response)
    }
  }
)

const syllabusSlice = createSlice({
  name: "Syllabus",
  initialState: {
    loading: false,
    error: null,
    data: [],
    status: "",
  },
  extraReducers: (builder) => {
    // Upload Syllabus Builder
    builder.addCase(uploadSyllabus.pending, (state) => {
      state.status = "uploading_syllabus"
      state.loading = true
    })
    builder.addCase(uploadSyllabus.fulfilled, (state) => {
      toast.success("Syllabus Uploaded Successfully")
      state.status = "success_uploading_syllabus"
      state.loading = false
    })
    builder.addCase(uploadSyllabus.rejected, (state, action) => {
      toast.error("Error Uplading Syllabus")
      state.error = action.payload
      state.loading = false
      state.status = "Failed"
    })

    // Get All Syllabus Builders
    builder.addCase(getSyllabus.pending, (state) => {
      state.status = "getting_syllabus"
      state.loading = true
    })
    builder.addCase(getSyllabus.fulfilled, (state, action) => {
      state.data = action.payload.data
      state.status = "success_getting_syllabus"
      state.loading = false
    })
    builder.addCase(getSyllabus.rejected, (state, action) => {
      toast.error("Error Fetching Syllabus")
      state.error = action.payload
      state.loading = false
      state.status = "Failed"
    })

    // Delete Syllabus Builders
    builder.addCase(deleteSyllabus.pending, (state) => {
      state.status = "deleting_syllabus"
      state.loading = true
    })
    builder.addCase(deleteSyllabus.fulfilled, (state) => {
      state.status = "success_deleting_syllabus"
      state.loading = false
    })
    builder.addCase(deleteSyllabus.rejected, (state, action) => {
      state.status = "Failed"
      state.error = action.payload
      state.loading = false
    })
  },
})

export default syllabusSlice.reducer
