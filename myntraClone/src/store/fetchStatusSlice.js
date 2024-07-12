import { createSlice } from "@reduxjs/toolkit";

 const fetchStatusSlice= createSlice(
    {
        name:'fetchStatus',
        initialState:{
            fetchDone:false,//false=pending and true =done
            currentlyFetching: false,
        },
        reducers:{
            markFetchingDone(state){
                return state.fetchDone=true;
            },
            markFetchingStart(state){
                return state.currentlyFetching=true;
            },
            markFetchingFinished(state){
                return state.currentlyFetching=false;
            }
        }
    }
 );
 export const fetchStatusAction=fetchStatusSlice.actions;
 export default fetchStatusSlice;