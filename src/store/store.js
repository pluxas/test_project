import { configureStore } from "@reduxjs/toolkit";

import WeatherApi from "../entities/user/model/weatherApiSlice";

export const store = configureStore({
    reducer: {
        api: WeatherApi
    },
    devTools: true
})
