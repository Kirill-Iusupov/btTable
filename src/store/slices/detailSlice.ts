import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    details: [],
    isLoading: false,
    error: ""
}


export const fetchDetail = createAsyncThunk(
    "detail/fetchDetail",
    async() => {
        const response = await axios.get('http://localhost:8800/users')
        return response.data
    }
)


const detailSlice = createSlice({
    name: "details",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchDetail.pending, state =>{
            state.isLoading = true,
            state.error = ""
        }),
        builder.addCase(fetchDetail.fulfilled, (state,action)=>{
            state.isLoading = false,
            state.details = action.payload,
            state.error = ""
        }),
        builder.addCase(fetchDetail.rejected, (state, action)=>{
            state.isLoading = false,
            state.error = action.payload
        })
    }

})

export default detailSlice.reducer