import React from 'react'
import Chart from './Chart'
import MenuDashBoard from './DashBoardMenu'


const TrainingDataDashboard = () => {
  return (
    //  ======= Training Data Dash-Board ======= 
    <div id="dashboard" className=''>
      
      <MenuDashBoard/>
      <Chart/>
    </div>

  )
}

export default TrainingDataDashboard