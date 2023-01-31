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
       <MenuDashBoard/>
       <div className=' align-items-center justify-content-center'>
          <InputVideoData/>
       </div> 
    </div>
  )
}

export default TrainingDataDashboard