import React from 'react'
import "./mainbar.css";
import KeyboardRight from '@material-ui/icons/KeyboardArrowRight';
import PowerSettingsNew from '@material-ui/icons/PowerSettingsNew';
import CalendarToday from '@material-ui/icons/CalendarToday';
import Add from '@material-ui/icons/Add'
import CameraAlt from '@material-ui/icons/CameraAlt';
import  ShareSharp  from '@material-ui/icons/ShareSharp';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import Edit from "@material-ui/icons/Edit"
import FileCopy  from '@material-ui/icons/FileCopy';
import Delete from "@material-ui/icons/Delete";
const Mainbar = () => {
    return (
        <div className='mainContainer'>
            <div className="mainHeader">
                <div className="mainbarLocation">
                    <span className="location">Dashboard</span>
                    <span className="location"><KeyboardRight /></span>
                    <span className="location">Booth</span>
                    <span className="location"><KeyboardRight /></span>
                    <span className="location">All</span>
                </div>
                <div className="mainbarlog">
                    <div className="email">Is77@biz.com</div>
                    <span className='Logout'><PowerSettingsNew /></span>
                </div>
            </div>
            <div className='mainCenter'>
                <div className="mainCenterHeader">
                    <div className="mainCenterHeaderText">events</div>
                    <button className="newEvent">
                        <span className='btnEvent1'><Add /></span>
                        <span className='btnEvent2'>New Event</span>
                    </button>
                </div>
                <div className="mainCenterCard1">
                    <div className="mainCenterCard1heading">Activity</div>
                    <hr className="mainCenterCard1headingline" />
                    <div className="mainCenterIcons">
                        <div className="eventsCreated">
                            <div className="eventsIcon"><CalendarToday fontSize='large' /></div>
                            <div className="eventsText">
                                <span className="eventscnt">3</span>
                                <div className="eventtext">
                                    Events Created
                                </div>
                            </div>
                        </div>
                        <div className="photoCaptured">
                            <div className="photoIcon"><CameraAlt fontSize='large' /></div>
                            <div className="photoText">
                                <span className="photocnt">18</span>
                                <div className="phototext">
                                    Photos Captured
                                </div>
                            </div>
                        </div>
                        <div className="sharesCollected">
                            <div className="sharesIcon"><ShareSharp fontSize='large' fontWeight='bold' /></div>
                            <span className="shareText">
                                <span className="sharecnt">-</span>
                                <div className="sharetext">
                                    Shares Collected
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="mainCenterCard2">
                    <div className="searchBar">
                        <input type="text" placeholder='Search..' className="searchbar" />
                    </div>
                    <hr className='mainCenterCard2HeadingLine' />
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Slug</th>
                            <th>Event Start Date</th>
                            <th>Photos</th>
                            <th><span> </span></th>
                            <th><span> </span></th>
                        </tr>
                        <tr className='line'>
                            <td>77777</td>
                            <td>7777test</td>
                            <td>11/29/2021,2:09:36Pm</td>
                            <td>6</td>
                            <td>
                                <button className="deactivate">
                                    <div className="Deactivate">
                                        <KeyboardArrowDown />
                                        <div className="deactivateText">De-activate</div>
                                    </div>
                                </button>
                            </td>
                            <td>
                                <div className="crud">
                                    <span><Edit/></span>
                                    <span><FileCopy/></span>
                                    <span><Delete/></span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>77777</td>
                            <td>7777test</td>
                            <td>11/29/2021,2:09:36Pm</td>
                            <td>6</td>
                            <td>
                                <button className="deactivate">
                                    <div className="Deactivate">
                                        <KeyboardArrowDown />
                                        <div className="deactivateText">De-activate</div>
                                    </div>
                                </button>
                            </td>
                            <td>
                                <div className="crud">
                                    <span><Edit/></span>
                                    <span><FileCopy/></span>
                                    <span><Delete/></span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>77777</td>
                            <td>7777test</td>
                            <td>11/29/2021,2:09:36Pm</td>
                            <td>6</td>
                             <td>
                                <button className="deactivate">
                                    <div className="Deactivate">
                                        <KeyboardArrowDown />
                                        <div className="deactivateText">De-activate</div>
                                    </div>
                                </button>
                            </td>
                            <td>
                                <div className="crud">
                                    <span><Edit/></span>
                                    <span><FileCopy/></span>
                                    <span><Delete/></span>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Mainbar;
