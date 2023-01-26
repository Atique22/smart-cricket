import React from 'react';
import { Link } from "react-router-dom";
import SideNav, { NavItem, NavText, NavIcon } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { FaHome } from '@react-icons/all-files/fa/FaHome';
import { AiFillDashboard } from '@react-icons/all-files/ai/AiFillDashboard';
import { AiFillFolder } from '@react-icons/all-files/ai/AiFillFolder';
function MenuDashBoard() {

    return (
        <>
            <SideNav
                // onSelect={(selected) => {
                //     // Add your code here
                // }}
                style={{ backgroundColor: '#3b3d3d', width: '100px' }}
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="dashboard" >
                    <NavItem eventKey="home">
                        <NavIcon><Link to="/"> <FaHome /></Link></NavIcon>

                        <NavText>
                            Go Back to Home
                        </NavText>
                    </NavItem>

                    <NavItem eventKey="dashboard">
                        <NavIcon><Link to="/dashboard"> <AiFillDashboard /></Link></NavIcon>
                        <NavText>
                            Dash Board
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="charts">
                        <NavIcon><AiFillFolder /></NavIcon>
                        <NavText>
                            Charts
                        </NavText>
                        <NavItem eventKey="charts/linechart">
                            <NavText>
                                Line Chart
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="charts/barchart">
                            <NavText>
                                Bar Chart
                            </NavText>
                        </NavItem>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
        </>
    );
}

export default MenuDashBoard;