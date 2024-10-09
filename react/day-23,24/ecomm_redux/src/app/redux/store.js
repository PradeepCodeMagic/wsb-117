import { configureStore } from '@reduxjs/toolkit'
import  productSlice  from './features/productSlice'
import  wishtSlice  from './features/wishSlice'

export const store = configureStore({
  reducer: {
    product:productSlice,
    wish:wishtSlice
  },
})