import React, { useState } from "react";
import Header from "../common/header/Header";
import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import Product from "../pages/product/Product";

const ForUser = () => {
  const [header, setHeader] = useState(1);
  const [user, setUser] = useState(null);
  const changeHeader = (e) => {
    setHeader(e);
  };
  const changeHeaderHandler = (value) => {
    setHeader(value);
  };
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <HomePage transparent={true} />
        </Route>
        <Route path="/product" exact>
          <Header transparent={false} />
          <Product
            changeHeaderHandler={changeHeaderHandler}
            user={user}
          ></Product>
        </Route>
      </Switch>
    </div>
  );
};

export default ForUser;
