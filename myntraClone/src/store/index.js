
import { configureStore } from '@reduxjs/toolkit'
import itemSlice from './itemSlice'
import fetchStatusSlice from './fetchStatusSlice';

const myntraClone=configureStore({

    reducer:{
        items:itemSlice.reducer,
        fetchStatus:fetchStatusSlice.reducer,
    }
}
    
)
export default myntraClone;