import React from 'react'
import Chart from './Chart'
import MenuDashBoard from './DashBoardMenu'


const TrainingDataDashboard = () => {
  return (
    //  ======= Training Data Dash-Board ======= 
    <div id="dashboard" className='container-flex'>
      <div className='float-left'>
        <MenuDashBoard/>
      </div>
      <div className='d-flex flex-row-reverse'>
          <Chart/>  
      </div>
      

    </div>

  )
}

export default TrainingDataDashboard