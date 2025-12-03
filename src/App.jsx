import React, { useState } from 'react'
import './App.css'
import Header from './Component/Header/Header'
import SideBar from './Component/Sidebar/SideBar'
// import Layout from './Component/Pages/Layout/Layout'
import Page1Container from './Component/Pages/Page1/Page1Container';
import Page2Container from './Component/Pages/Page2/Page2Container';
import Page3Container from './Component/Pages/Page3/Page3Container';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
export default function App() {

    const [showSidebar, setSidebar] = useState(false);
    const sidebarHandler = () => {
        setSidebar(true);
        // alert();
    }

    const hidesidebarHandler = () => {
        setSidebar(false);
    }

    return (
        <div style={{ display: 'flex' }}>
            <Router>
                <SideBar showSidebar={showSidebar} hidesidebarHandler={hidesidebarHandler} />
                <div className="wrapper" style={{ width: '100%' }}>
                    <Header sidebarHandler={sidebarHandler} />
                    <Switch>
                        <Route exact path="/">
                            <Page1Container />
                        </Route>
                        <Route exact path="/transactions">
                            <Page2Container />
                        </Route>
                        <Route exact path="/support">
                            <Page3Container />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}
