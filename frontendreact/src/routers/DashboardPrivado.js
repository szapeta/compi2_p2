import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { HomeAdmin } from "../components/private/admin/homeadmin/HomeAdmin";
import { Gaussiano } from "../components/private/Gauss/Gaussiano";
import { RegresionLineal } from "../components/private/lineal/RegresionLineal";
import { RegresionPolinomial } from "../components/private/polinomial/RegresionPolinomial";
import FooterAuth from "../components/rol/FooterAuth";
import { NavAuth } from "../components/rol/NavAuth";

export const DashboardPrivado = () => {
  return (
    <>
      <NavAuth />
      <div className="container mt-2">
        <Switch>
          <Route exact path="/homeadmin" component={HomeAdmin} />
          <Route exact path="/lineal" component={RegresionLineal} />
          <Route exact path="/polinomial" component={RegresionPolinomial} />
          <Route exact path="/gausiano" component={Gaussiano} />
          <Redirect to="/homeadmin" />
        </Switch>
      </div>
      <FooterAuth />
    </>
  );
};
