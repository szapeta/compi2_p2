import React from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'

export const NavAdmin = () => {
    return (
        <>
            <div className="navbar-nav">
                <NavLink
                    activeClassName="active"
                    className="nav-item nav-link pr-5"
                    exact
                    to="/lineal"
                >
                    Lineal
                </NavLink>
            </div>
            <div className="navbar-nav">
                <NavLink
                    activeClassName="active"
                    className="nav-item nav-link pr-5"
                    exact
                    to="/polinomial"
                >
                    Polinomial
                </NavLink>
            </div>
            <div className="navbar-nav pr-5">
                <NavLink
                    activeClassName="active"
                    className="nav-item nav-link"
                    exact
                    to="/gausiano"
                >
                    Gaussiano
                </NavLink>
            </div>
            <div className="navbar-nav pr-5">
                <NavLink
                    activeClassName="active"
                    className="nav-item nav-link"
                    exact
                    to="/decision"
                >
                    Decision
                </NavLink>
            </div>
            <div className="navbar-nav pr-5">
                <NavLink
                    activeClassName="active"
                    className="nav-item nav-link"
                    exact
                    to="/redes"
                >
                    Redes
                </NavLink>
            </div>
        </>
    )
}