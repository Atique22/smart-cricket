import React from 'react'
import Chart from './Chart'
import MenuDashBoard from './DashBoardMenu'


const TrainingDataDashboard = () => {


  return (
    //  ======= Training Data Dash-Board ======= 
    <div id="dashboard" className='container-flex'>
      <div className='float-left'>
        <MenuDashBoard />
      </div>
      <div className='d-flex flex-row-reverse ml-4'>
        <div className='d-flex flex-row m-5 p-5'>
          <div className='w-60'>
            <Chart />
          </div>
          <div className='w-60'>
            <Chart />
          </div>  
        </div>
      </div>

    </div>

  )
}

export default TrainingDataDashboard