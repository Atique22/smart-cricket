import React from "react";
import MenuDashBoard from "./DashBoardMenu";
import DashboardBody from "./DashboardBody";
import Footer from "../Footer"
const Dashboard = () => {
  return (
    //  ======= Training Data Dash-Board =======
    <>
      <MenuDashBoard />
      <div className=" align-items-center justify-content-center ">
        <DashboardBody />
        <Footer/>
      </div>

    </>
  );
};

export default Dashboard;
