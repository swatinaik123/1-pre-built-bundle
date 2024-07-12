import { DEFAULT_ITEMS } from "../data/items"
import { createSlice } from "@reduxjs/toolkit"

const itemSlice=createSlice({

name:'items',
initialState:DEFAULT_ITEMS,
reducers:{
    addInitialItems(action,state){
        return state
    }
}

})

export const itemAction=itemSlice.actions

export default itemSlice;