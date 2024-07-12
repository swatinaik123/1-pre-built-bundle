import React from 'react'
import BagsSummary from '../components/BagsSummary';

const Bags = () => {
  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          <BagsSummary/>
        </div>
        <div className="bag-summary">
        </div>

      </div>
    </main>  
  )
}

export default Bags;
