import React from 'react'
import HomeItem from '../components/HomeItem'
import { useSelector } from 'react-redux'

 


const Home = () => {
  const items=useSelector((store)=>store.items)
  // console.log(items)
  return (
    <div>
      <main>
        <div className="items-container">
          {/* {items.map(items=> <HomeItem item={items[2]}/>)} */}

          {items.map(items=><HomeItem  key={items.id} item={items}/>)}
          {/* <HomeItem item={items[2]}/> */}
         
        </div>
    </main>
    </div>
  )
}

export default Home
