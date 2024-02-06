// ** Redux Imports
import { Dispatch } from 'redux'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import axios from 'axios';

interface Redux {
  getState: any
  dispatch: Dispatch<any>
}

export const fetchData = createAsyncThunk('table/fetchData', async () => {
  const response = await axios.get('http://localhost:3000/cars')
  console.log(response.data)
  return response.data
})

const initialState = {
  data: [],
  isLoading: false,
  error: false
}

const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchData.pending, state => {
      state.isLoading = true
    }),
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload
      state.isLoading = false
    }),
    builder.addCase(fetchData.rejected, state => {
      state.isLoading = false
      state.error = true
    })
  }
})

export default tableSlice.reducer