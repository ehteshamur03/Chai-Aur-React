import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/Todo/TodoSlice'
const Store = configureStore({
    reducer: todoReducer

})


export default Store