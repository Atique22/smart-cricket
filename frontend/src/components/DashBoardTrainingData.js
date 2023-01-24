import React from 'react'
import Chart from './Chart'
import MenuDashBoard from './DashBoardMenu'


const TrainingDataDashboard = () => {


  return (
    //  ======= Training Data Dash-Board ======= 
    <div id="dashboard" className='container-flex'>
      <MenuDashBoard />
      <div style={{ marginLeft: "7rem" }} >
        <Chart />
      </div>
    </div>
  )
}

export default TrainingDataDashboard