import { configureStore } from "@reduxjs/toolkit"
import counter from "../component/counter"
import counterSlice from "../feature/counter/counterSlice"

export const store = configureStore({
    reducer:{
        counter: counterSlice
    }
})