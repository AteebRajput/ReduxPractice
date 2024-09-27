import { createSlice, nanoid } from "@reduxjs/toolkit";
import {sub} from 'date-fns'
const initialState = [
    {
        id: '1',
        title: "Learning Redux",
        content: "I've heard good things about Redux Toolkit, and I’m eager to learn more about it.",
        date:sub(new Date(), {minutes: 10}).toISOString(),
    },
    {
        id: '2',
        title: "Mastering React",
        content: "React is a powerful library for building dynamic user interfaces.",
        date:sub(new Date(), {minutes: 20}).toISOString(),
    },
    {
        id: '3',
        title: "Understanding JavaScript",
        content: "JavaScript is the foundation of modern web development.",
        date:sub(new Date(), {minutes: 30}).toISOString(),
    },
    {
        id: '4',
        title: "State Management with Redux",
        content: "State management is critical for building large-scale applications.",
        date:sub(new Date(), {minutes: 5}).toISOString(),
    }
];

const postSlice = createSlice({
    name: 'posts', 
    initialState,
    reducers: {
        postAdd : {
            reducer: (state,action) =>{
                state.push(action.payload)
            },
            prepare(title, content, userId) {
                console.log("Prepare payload:", { title, content, userId });  // Log the values to check
                return {
                  payload: {
                    id: nanoid(),
                    title,
                    content,
                    date: new Date().toISOString(),
                    userId
                  }
                };
              }
              
        }
    }
});


export default postSlice.reducer;

export const { postAdd } = postSlice.actions