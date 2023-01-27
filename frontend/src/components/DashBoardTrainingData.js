import React from 'react'
import Chart from './Chart'
import MenuDashBoard from './DashBoardMenu'
import FileDataDisplay from './FileDataDisplay'
// import LineGraph from './LineGraph'
import HighChartReact from './HighChartReact'
import HighChartPie from './HighChartPie'
const TrainingDataDashboard = () => {


  return (
    //  ======= Training Data Dash-Board ======= 
    <div id="dashboard" className='container'>
       <MenuDashBoard/>
       
      <div className='row ' style={{ marginLeft: "7rem" }} >
        <Chart title="Line High chart" component={  <HighChartReact />  } description="chart description if required... " />
        <Chart title="Pie High chart" component={  <HighChartPie />  } description="chart description if required... " />

        {/* <Chart title="Line High chart" component={  <HighChartReact />  } description="chart description if required... " />
        <Chart title="Pie High chart" component={  <HighChartPie />  } description="chart description if required... " />
        <Chart title="Bar chart"  component={  <LineGraph />  } description="chart is usually ... " />
        <Chart title=" graph."  component={  <LineGraph />  } description="chart is usually used a... " />
        <Chart title="Area graph."  component={  <LineGraph />  } description="chart is usually used .. " /> */}
      </div>
      <div className='border justify-content-center m-5'>
          <FileDataDisplay/>
      </div>
      
    </div>
  )
}

export default TrainingDataDashboard