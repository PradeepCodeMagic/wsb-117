import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  wishProduct:[],
}

export const wishtSlice = createSlice({
  name: 'wishProduct',
  initialState,
  reducers: {
    setWishlist:(state,action)=>{
      state.wishProduct.push(action.payload)
    }
    ,
    setRemoveWish:(state,action)=>{

      
        let filterData=state.wishProduct.filter((v)=>v.id!==action.payload.id)

        console.log(filterData)
    }
  },
})


export const {setWishlist,setRemoveWish} = wishtSlice.actions

export default wishtSlice.reducer