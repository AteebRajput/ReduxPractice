import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '1', name: "John Doe", age: 30 },
    { id: '2', name: "Lama Jansan", age: 25 },
    { id: '3', name: "Bob Smith", age: 40 }

]

const userSlice  = createSlice ({
    name: 'users',
    initialState,
    reducers: {

    }

})

export const selectAllUsers = (state) => state.users

export default userSlice.reducer



