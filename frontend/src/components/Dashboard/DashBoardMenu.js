import React from "react";
import { Link } from "react-router-dom";
import SideNav, { NavItem, NavText, NavIcon } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { FaHome } from "@react-icons/all-files/fa/FaHome";
import { AiFillDashboard } from "@react-icons/all-files/ai/AiFillDashboard";
import { AiFillFolder } from "@react-icons/all-files/ai/AiFillFolder";
function MenuDashBoard() {
  return (
    <>
      <SideNav
        style={{
          backgroundColor: "#3b3d3d",
          width: "100px",
          position: "fixed",
        }}
      >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="dashboard">
          <NavItem eventKey="home">
            <NavIcon>
              <Link to="/">
                {" "}
                <FaHome size="27" />
              </Link>
            </NavIcon>

            <NavText>Home</NavText>
            <NavItem> </NavItem>
          </NavItem>

          <NavItem eventKey="dashboard">
            <NavIcon>
              <Link to="/dashboard">
                {" "}
                <AiFillDashboard size="27" />
              </Link>
            </NavIcon>
            <NavText>DashBoard</NavText>
            <NavItem></NavItem>
          </NavItem>
          <NavItem eventKey="charts">
            <NavIcon>
              <Link to="/DisplayFramesData">
                <AiFillFolder size="27" />
              </Link>
            </NavIcon>
            <NavText>Frames Capture</NavText>
            <NavItem eventKey="charts/linechart">
              {/* <NavText>
                                Line Chart
                            </NavText> */}
            </NavItem>
          </NavItem>
          {/* <NavItem eventKey="charts">
              <NavIcon>
                <Link to="/graph">
                  <AiFillFolder size="27" />
                </Link>
              </NavIcon>
              <NavText> Graph </NavText>
              <NavItem eventKey="charts/linechart"></NavItem>
          </NavItem> */}
          {/* <NavItem eventKey="charts">
            <NavIcon>
              <Link to="/AddFrameData">
                <AiFillFolder size="27" />
              </Link>
            </NavIcon>
            <NavText>Add Frame Data </NavText>
            <NavItem eventKey="charts/linechart"></NavItem>
          </NavItem>
          <NavItem eventKey="video">
            <NavIcon>
              <Link to="/video">
                {" "}
                <AiFillFolder size="27" />
              </Link>
            </NavIcon>

            <NavText>Video capturing</NavText>
            <NavItem> </NavItem>
          </NavItem> */}
        </SideNav.Nav>
      </SideNav>
    </>
  );
}

export default MenuDashBoard;
