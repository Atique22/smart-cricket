import React from 'react'
import Chart from '../Charts/Chart'
import MenuDashBoard from './DashBoardMenu'
import FileDataDisplay from '../UploadFiles/FileDataDisplay'
// import LineGraph from './LineGraph'
import HighChartReact from '../Charts/HighChartReact'
import HighChartPie from '../Charts/HighChartPie'
const TrainingDataDashboard = () => {


  return (
    //  ======= Training Data Dash-Board ======= 
    <div id="dashboard" className='container'>
       <MenuDashBoard/>
       
      <div className='row ' style={{ marginLeft: "7rem" }} >
        <Chart title="Line High chart" component={  <HighChartReact />  } description="chart description if required... " />
        <Chart title="Pie High chart" component={  <HighChartPie />  } description="chart description if required... " />
      </div>
      <div className='border justify-content-center m-5'>
          <FileDataDisplay/>
      </div>
      
    </div>
  )
}

export default TrainingDataDashboard