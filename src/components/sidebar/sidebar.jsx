import React from 'react'
import "./sidebar.css";
import AccessibilityNew from '@material-ui/icons/AccessibilityNew';
import Photo from '@material-ui/icons/Photo';
import Cropfree from '@material-ui/icons/CropFree';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
const Sidebar = () => {
    return (
        <div className='sidebarContainer'>
            <div className="sidebarMenu">
                <div className="logoContainer">
                    <img src="assets/logo.png" alt="" className="logo" />
                </div>
                <div className="menuContainer">
                    <ul className="menuList">
                        <li className="menu">
                            <div className="selfie">
                                <div className="menuIcon">
                                    <AccessibilityNew />
                                </div>
                                <span className="menuText">selfie booth</span>
                            </div>
                            <div className="down">
                            <KeyboardArrowDown/>
                            </div>
                        </li>
                        <li className="menu">
                            <div className="menuIcon">
                                <Photo />
                            </div>
                            <div className="menuText">gallery</div>
                        </li>
                        <li className="menu">
                            <div className="menuIcon">
                                <Cropfree />
                            </div>
                            <div className="menuText">templates</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
