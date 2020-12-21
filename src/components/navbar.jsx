import React, { useState, useEffect } from "react";
import logo from "../images/logo.svg";
import bars from "../images/icon-hamburger.svg";
import close from "../images/icon-close.svg";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    const iniState = {
        show: false,
    };

    const [state, setState] = useState(iniState);

    // toggles the state and ensure the navbar shows when the trigger
    // is clicked in mobile
    const toggle = () => {
        setState({
            show: !state.show,
        });
    };

    // links for mobile navbar
    const mobilelinks = (
        <ul id="mobilelinks">
            <NavLink onClick={toggle} className="navli" to="#">
                <img src={close} alt="close" />
            </NavLink>
            <li>
                <NavLink className="mobli" to="#">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink className="mobli" to="#">
                    About
                </NavLink>
            </li>
            <li>
                <NavLink className="mobli" to="#">
                    Contact
                </NavLink>
            </li>
            <li>
                <NavLink className="mobli" to="#">
                    Blog
                </NavLink>
            </li>
            <li>
                <NavLink className="mobli" to="#">
                    Careers
                </NavLink>
            </li>
        </ul>
    );

    // this ensures the mobilelinks show when the state is set to true
    const mobile = () => {
        let moblink;
        if (state.show === true) {
            moblink = mobilelinks;
            return moblink;
        }
    };

    return (
        <main>
            <nav className="navbar">
                <ul id="mobile">
                    <NavLink id="trigger" className="mobileli" to="#">
                        <img  src={logo} alt="logo" />
                    </NavLink>
                    <li onClick={toggle}>
                        <NavLink className="endli" to="#">
                            <img src={bars} alt="bar" />
                        </NavLink>
                    </li>
                </ul>
                <ul id="Desktop">
                    <NavLink className="navli" to="#">
                        <img src={logo} alt="logo" />
                    </NavLink>
                    <li>
                        <NavLink className="navli" to="#">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="navli" to="#">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="navli" to="#">
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="navli" to="#">
                            Blog
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="navli" to="#">
                            Careers
                        </NavLink>
                    </li>
                    <li className="but">
                        <button type="button">
                            <NavLink to="#">Request Invite</NavLink>
                        </button>
                    </li>
                </ul>
            </nav>

            {mobile()}
        </main>
    );
}
