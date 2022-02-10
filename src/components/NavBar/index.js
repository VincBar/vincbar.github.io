import React, { Component } from 'react'
import { MenuItems } from "./MenuItems"
import './Navbar.css'
import { NavLink } from 'react-router-dom';
import logo from "../../img/logo_website.png"

export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <img className="empty-logo" />
                <ul className="navbar-nav">
                    {MenuItems.map((item, index) => {
                        return (
                            <li className="navbar-link" key={index}>
                                <NavLink className="navbar-inner-link" to={item.url}>{item.title}</NavLink>
                            </li>
                        )
                    })
                    }
                </ul>
                <NavLink to="/">
                    <img className="logo" src={logo} />
                </NavLink>
            </nav>
        )
    }
}