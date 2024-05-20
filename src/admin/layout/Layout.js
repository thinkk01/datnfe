import React from "react";
import { BrowserRouter,Route,Slidebar } from "react-router-dom";

const Layout = (props) => {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <div className="layout">
            <Sidebar {...props} />
            <div className="layout__content">
              <TopNav></TopNav>
              <div className="layout__content-main">
                <Routes></Routes>
              </div>
            </div>
          </div>
        )}
      ></Route>
    </BrowserRouter>
  );
};

export default Layout;
