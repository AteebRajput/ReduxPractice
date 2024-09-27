
import { configureStore } from '@reduxjs/toolkit';
import postReducer from './feature/post/postSlice';  // Use the default export
import userReducer from './feature/users/userSlice';  // Use the default export

const store = configureStore({
  reducer: {
    posts: postReducer,  // Add the post reducer here
    users: userReducer,  // Add the user reducer here
  },
});

export default store;
