import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./slices/uiSlice";

const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
    },
    devTools: true,
});

export default store;
