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

            <NavText>Go Back to Home</NavText>
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
              <Link to="/BackendViewData">
                <AiFillFolder size="27" />
              </Link>
            </NavIcon>
            <NavText>BackendViewData</NavText>
            <NavItem eventKey="charts/linechart">
              {/* <NavText>
                                Line Chart
                            </NavText> */}
            </NavItem>
            <NavItem eventKey="charts/barchart">
              {/* <NavText>
                                Bar Chart
                            </NavText> */}
            </NavItem>
          </NavItem>
          <NavItem eventKey="charts">
            <NavIcon>
              <Link to="/CreateBackendData">
                <AiFillFolder size="27" />
              </Link>
            </NavIcon>
            <NavText>CreateBackendData</NavText>
            <NavItem eventKey="charts/linechart"></NavItem>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    </>
  );
}

export default MenuDashBoard;
