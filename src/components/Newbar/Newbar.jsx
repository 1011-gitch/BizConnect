import React,{useState,useEffect} from 'react'
import "./newbar.css"
import { KeyboardArrowRight, KeyboardArrowLeft, PowerSettingsNew} from '@material-ui/icons'
const Newbar = () => {
    const [startDate,setStartDate] = useState(null);
        function handleChange(e) {
            setStartDate(e.target.value);
        }
        const [endDate,setEndDate] = useState(null);
       useEffect(()=>{
        if(startDate != null) {
            var newEndDate = startDate.substring(0,startDate.lastIndexOf('-')+1)+(parseInt(startDate.substring(startDate.lastIndexOf('-')+1,startDate.length))+7).toString();
            setEndDate(newEndDate);
        }
       },[startDate])

        
    return (
        <div className='newbarContainer'>
            <div className="newbarHeader">
                <div className="newbarLocation">
                    <span className="newbarHeadingLocation">Dashboard</span>
                    <span className="newbarHeadingLocation"><KeyboardArrowRight /></span>
                    <span className="newbarHeadingLocation">Booth</span>
                    <span className="newbarHeadingLocation"><KeyboardArrowRight /></span>
                    <span className="newbarHeadingLocation">New</span>
                </div>
                <div className="newbarLog">
                    <div className="email">Is77@biz.com</div>
                    <span className='Logout'><PowerSettingsNew /></span>
                </div>
            </div>
            <div className="newbarCenter">
                <div className="newbarCenterHeading">
                    <div className="virtualBooth"><h2>Virtual Booth</h2></div>
                    <div className="path">
                        <img src="assets/path.png" alt="" className="pathImg" />
                    </div>
                    <div className="goback-continue">
                        <button className="goBack">
                            <span className='goBackIcon'><KeyboardArrowLeft fontSize='large' /></span>
                            <div className="goBackText">Go back</div>
                        </button>
                        <button className="continue">
                            <span className="continueText">Continue</span>
                            <span className="continueIcon"><KeyboardArrowRight fontSize='large' /></span>
                        </button>
                    </div>
                </div>
                <div className="navbarCenterMain">
                    <div className="navbarCenterMainHeading">
                        General
                    </div>
                    <div className="navbarCenterMainData">
                        <div className="eventName">
                            <label htmlFor="EventName">Event Name</label>
                            <div className="eventbar">
                                <input type="text" placeholder='Choose your event name' className='eventInput' />
                            </div>
                        </div>
                        <div className="eventtask">
                            <div className="StartDate">
                                <label htmlFor="StartDate">Start Date</label><br/>
                                <div className="datebar">
                                    <input type="date" className='dateInput' value={startDate} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="StartTime">
                                <label htmlFor="StartTime">Start Time</label><br/>
                                <div className="timebar">
                                    <input type="time" className='timeInput' />
                                </div>
                            </div>
                            <div className="EndDate">
                                <label htmlFor="EndDate">End Date</label><br/>
                                <div className="datebar">
                                    <input type="date" className='dateInput' value={endDate} />
                                </div>
                            </div>
                            <div className="EndTime">
                                <label htmlFor="EndTime">End Time</label><br/>
                                <div className="timebar">
                                    <input type="time" className='timeInput' />
                                </div>
                            </div>
                        </div>
                        <div className="slug">
                            <label htmlFor="Slug">Slug</label>
                            <div className="eventbar">
                            <input type="text" placeholder='Choose your event name as Slug,min 6 characters' className='eventInput' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newbar
