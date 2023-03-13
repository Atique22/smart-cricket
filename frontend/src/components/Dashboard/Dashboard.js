import React from "react";
import MenuDashBoard from "./DashBoardMenu";
import DashboardBody from "./DashboardBody";

const Dashboard = () => {
  return (
    //  ======= Training Data Dash-Board =======
    <>
      <MenuDashBoard />
      <div className=" align-items-center justify-content-center ">
        <DashboardBody />
      </div>
    </>
  );
};

export default Dashboard;
