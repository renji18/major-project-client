import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

// Uploads Circular
export const uploadCircular = createAsyncThunk(
  "uploadCircular",
  async (data, { rejectWithValue }) => {
    try {
      const fileData = new FormData()
      fileData.append("circular", data?.image)
      fileData.append("name", data?.name)
      fileData.append("by", data?.by)
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/admin/circular/upload`,
        fileData
      )
      return response
    } catch (error) {
      return rejectWithValue(error.response)
    }
  }
)


// Delete Circular
export const deleteCircular = createAsyncThunk(
  "deleteCircular",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_SERVER_URL}/admin/circular/edit/${data}`
      )
      return response
    } catch (error) {
      return rejectWithValue(error.response)
    }
  }
)


// Get All Circulars
export const getCirculars = createAsyncThunk(
  "getCirculars",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/admin/circular/all`
      )
      return response
    } catch (error) {
      return rejectWithValue(error.response)
    }
  }
)

const circularSlice = createSlice({
  name: "Circulars",
  initialState: {
    loading: false,
    error: null,
    data: [],
    status: "",
  },
  extraReducers: (builder) => {
    // Upload Circular Builder
    builder.addCase(uploadCircular.pending, (state) => {
      state.loading = true
    })
    builder.addCase(uploadCircular.fulfilled, (state) => {
      state.status = "Success"
      state.loading = false
    })
    builder.addCase(uploadCircular.rejected, (state, action) => {
      state.error = action.payload
      state.loading = false
      state.status = "Failed"
    })

    // Get All Students Builders
    builder.addCase(getCirculars.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getCirculars.fulfilled, (state, action) => {
      state.data = action.payload.data.data
      state.status = "Success"
      state.loading = false
    })
    builder.addCase(getCirculars.rejected, (state, action) => {
      state.error = action.payload
      state.loading = false
      state.status = "Failed"
    })

    // Send Email To Students Builders
    builder.addCase(deleteCircular.pending, (state) => {
      state.loading = true
    })
    builder.addCase(deleteCircular.fulfilled, (state) => {
      state.status = "Success"
      state.loading = false
    })
    builder.addCase(deleteCircular.rejected, (state, action) => {
      state.status = "Failed"
      state.error = action.payload
      state.loading = false
    })
  },
})

export default circularSlice.reducer
