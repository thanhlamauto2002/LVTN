import React from "react";
import './Nav.scss';
import {
    Link,
    NavLink
} from "react-router-dom";
class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">

                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <a class="active" href="/"><i class="fa fa-fw fa-home"></i> Home</a>
                <a href="/contact"><i class="fa fa-fw fa-envelope"></i> Contact</a>
                <a href="/about"><i class="fa fa-fw fa-sticky-note"></i> About</a>
                <a class="login" href="/login"><i class="fa fa-fw fa-user"></i> Login</a>
                <a class="alarm" href="/alarm"><i class="fa fa-fw fa-bell"></i> Alarm</a>

            </div>
        )
    }
}
export default Nav;