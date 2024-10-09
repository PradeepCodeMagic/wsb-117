import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  allproduct:[],
  status_code:null,
  loading:false

}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProduct:(state,actions)=>{
        state.allproduct=actions.payload
        state.status_code=200
        state.loading=false
    }
    ,
    setError:(state,actions)=>{
        console.log(actions.payload)
        state.status_code=404
        state.loading=false
    }
    ,
    setLoading:(state)=>{
        state.loading=true
    }
  },
})

// Action creators are generated for each case reducer function
export const { setProduct,setError,setLoading} = productSlice.actions

export default productSlice.reducer