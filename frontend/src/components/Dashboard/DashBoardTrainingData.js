import React from 'react'
// import DisplayCard from './DisplayCard'
import MenuDashBoard from './DashBoardMenu'
// import FileDataDisplay from '../UploadFiles/FileDataDisplay'
import InputVideoData from '../UploadFiles/InputVideoData'
// import LineGraph from './LineGraph'
// import HighChartReact from '../Charts/HighChartReact'
// import HighChartPie from '../Charts/HighChartPie'
// import Video from '../UploadFiles/Video'
const TrainingDataDashboard = () => {


  return (
    //  ======= Training Data Dash-Board ======= 
    <div id="dashboard" className='container'>
      {/* ======= menu Dashboard =======  */}
       <MenuDashBoard/>
      {/* ======= InputVideoData =======  */}
       
       
      <div className='row ' style={{ marginLeft: "1rem" }} >
      <div className=''>
         <InputVideoData/>
       </div>
         {/* <Chart title="Line High chart" component={  <Video />  } description="chart description if required... " /> */}

        {/* <Chart title="Line High chart" component={  <HighChartReact />  } description="chart description if required... " />
        <Chart title="Pie High chart" component={  <HighChartPie />  } description="chart description if required... " /> */}
      </div>
      
      
      {/* <div className='border justify-content-center m-5'>
          <FileDataDisplay/>
      </div> */}
      
    </div>
  )
}

export default TrainingDataDashboard