import React, { Component } from 'react'
import { MenuItems } from "./MenuItems"
import './Navbar.css'
import { NavLink } from 'react-router-dom';

export class Navbar extends Component {
    render() {
        return (
            <nav className="NavBarItems">
                <ul>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <NavLink to={item.url}>{item.title}</NavLink>
                            </li>
                        )
                    })
                    }
                    <p id="header_vinc">
                        Vincent
                    </p>
                </ul>

            </nav>
        )
    }
}