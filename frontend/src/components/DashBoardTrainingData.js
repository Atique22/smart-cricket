import React from 'react'
import Chart from './Chart'
import MenuDashBoard from './DashBoardMenu'

const TrainingDataDashboard = () => {


  return (
    //  ======= Training Data Dash-Board ======= 
    <div id="dashboard" className='container-flex'>
      <MenuDashBoard />
      <div className='d-flex' style={{ marginLeft: "7rem" }} >
        <Chart title="Bubble chart" description="chart is usually used as a catchall term for the graphical representation of data. Graph refers to a chart that specifically plots data along two dimensions... " />
        <Chart title="Bar chart" description="chart is usually used as a catchall term for the graphical representation of data. Graph refers to a chart that specifically plots data along two dimensions... " />
      </div>
      <div className='d-flex' style={{ marginLeft: "7rem" }} >
        <Chart title="Line graph." description="chart is usually used as a catchall term for the graphical representation of data. Graph refers to a chart that specifically plots data along two dimensions... " />
        <Chart title="Area graph." description="chart is usually used as a catchall term for the graphical representation of data. Graph refers to a chart that specifically plots data along two dimensions... " />
      </div>
    </div>
  )
}

export default TrainingDataDashboard