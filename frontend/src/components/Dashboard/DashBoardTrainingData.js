import React from 'react'
import MenuDashBoard from './DashBoardMenu'
import InputVideoData from '../UploadFiles/InputVideoData'

const TrainingDataDashboard = () => {


  return (
    //  ======= Training Data Dash-Board ======= 
    <>
      <MenuDashBoard />
      
      <div className=' align-items-center justify-content-center '>
        <InputVideoData />
      </div>
    </>
  )
}

export default TrainingDataDashboard