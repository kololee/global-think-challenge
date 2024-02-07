// ** Redux Imports
import { Dispatch } from 'redux'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import axios from 'axios';

// ** Interface
import { Car } from '../../types/cars'

interface CarsState {
  data: Car[],
  isLoading: boolean,
  error: boolean,
  query?: String[]
}

interface FetchData {
  query?: String[]
}

export const fetchData = createAsyncThunk('table/fetchData', async ({query}: FetchData = {}) => {
  let url = 'http://localhost:3000/cars'
  if (query && query.length > 0) {
    url += `?fields=id,${query}`
  }
  const response = await axios.get(url)
  return response.data
})

const initialState: CarsState = {
  data: [],
  isLoading: true,
  error: false,
  query: []
}

const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    setQuery(state, action) {
      state.query = action.payload
    }
  },
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

export const { setQuery } = tableSlice.actions

export default tableSlice.reducer