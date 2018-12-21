import React, { Component } from "react"

class Header extends Component {

    render() {

        return (
            <div className="header">
                <div className="top-header">
                    <div className="initials">

                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">Hi Mike</button>
                        <div className="dropdown-content">
                            <a href="#">Settings</a>
                            <a href="#">Logout</a>
                        </div>
                    </div>
                </div>
                <div className="main-header">
                    <img src="../images/cover.png" alt="Cover"/>
                    <div className="picture">
                        <img src="../images/image.png" alt="Profle"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header