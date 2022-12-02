import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

export const fetchPost = createAsyncThunk( "posts/fetchPost", async () => {
      return fetch("https://jsonplaceholder.typicode.com/posts").then((res)=>
      res.json()
      )
    });


    export const fetchUsers = createAsyncThunk("users/fetchUsers",async()=>{
        const response = await axios("https://jsonplaceholder.typicode.com/users")
        return response.data
    })

const postSlice =createSlice({
    name: "post",
    name: "user",
    count: "count",
    initialState:{
        posts: [],
        users:[],
        loading: false,
        count: 0,
    },
    reducers:{
        increment:(state)=>{
            state.count +=1;
        },
        decrement:(state)=>{
            state.count -=1;
        },
        reset:(state)=>{
            state.count =0;
        },
        incrementByNumber:(state,action)=>{
             if(state.count % 2 == 0){
                state.count *= action.payload;
             }
        },
    },
    extraReducers:{
       
        [fetchPost.pending]: (state,action)=>{
            state.loading = true;
        },
        [fetchPost.fulfilled]: (state,action)=>{
            state.loading = false
            state.posts = action.payload
        },
        [fetchPost.rejected]: (state,action)=>{
            state.loading = false;
        },


        [fetchUsers.pending]: (state,action)=>{
            state.loading = true;
        },
        [fetchUsers.fulfilled]: (state,action)=>{
            state.loading = false
            state.users = action.payload
        },
        [fetchUsers.rejected]: (state,action)=>{
            state.loading = false;
        },
    }
})

export const {increment,decrement,reset,incrementByNumber}=postSlice.actions

export default postSlice.reducer;