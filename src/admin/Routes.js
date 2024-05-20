import React from "react";
import { Switch, Route } from "react-router-dom";
import Account from "./pages/Account";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/accounts" exact>
        <Account></Account>
      </Route>
      <Route path="/orders" exact>
        <Order></Order>
      </Route>
      <Route path={`/order-detail/:id`} exact>
        <OrderForm></OrderForm>
      </Route>
    </Switch>
  );
};

export default Routes;
