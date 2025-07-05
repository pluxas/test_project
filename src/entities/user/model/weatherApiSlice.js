import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import axios from 'axios';

export const api = createAsyncThunk(
    'weather/api',
    async (city) => {
        const weather = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=7165a1401a93471cb9585940250507&q=${city}&days=7&aqi=no&alerts=no`)
        return weather
    }
)

const initialState = {
  status: null,
  weather: [],
  city: localStorage.getItem('city') || '',
};

export const WeatherApi = createSlice({
  name: 'weatherApi',
  initialState,
  reducers: {
    cityWhereTheyLive: (state, { payload }) => {
      state.city = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(api.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(api.fulfilled, (state, {payload}) => {
        state.status = 'succeeded'
        state.weather = payload
      })
      .addCase(api.rejected, (state) => {
        state.status = 'error'
      })
  },
});

export const { cityWhereTheyLive } = WeatherApi.actions;

export default WeatherApi.reducer;
