// ** Redux Imports
import { Dispatch } from 'redux'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import axios from 'axios';

// ** Interface
import { Car, CarEdit } from '../../types/cars'

interface CarsState {
  data: Car[],
  isLoading: boolean,
  error: boolean
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

export const updateCar = createAsyncThunk('table/updateCar', async (car: CarEdit) => {
  const response = await axios.patch(`http://localhost:3000/cars/${car.id}`, car)
  return response.data
})

const initialState: CarsState = {
  data: [],
  isLoading: true,
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
    }),
    builder.addCase(updateCar.pending, state => {
      state.isLoading = true
    }),
    builder.addCase(updateCar.fulfilled, (state, action) => {
      state.data = state.data.map(car => car.id === action.payload.id ? action.payload : car)
      state.isLoading = false
    }),
    builder.addCase(updateCar.rejected, state => {
      state.isLoading = false
      state.error = true
    })
  }
})

export default tableSlice.reducer