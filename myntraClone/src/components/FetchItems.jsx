import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const FetchItems = () => {
   const fetchStatus= useSelector(store=>store.fetchStatus)


//    useEffect(()=>{
//     if(fetchStatus.fetchDone)
//     return;
//     const signal=controller.signal;




//    }

//     )
   


   const dispatch=useDispatch();
  return (
    <div>
     Fetch Done:   {fetchStatus.fetchDone}
     currently Fetching : {fetchStatus.currentlyFetching}
      
    </div>
  )
}

export default FetchItems
