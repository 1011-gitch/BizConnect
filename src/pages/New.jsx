import React from 'react'
import "./new.css"
import Sidebar from '../components/sidebar/sidebar'
import Newbar from "../components/Newbar/Newbar"
const New = () => {
    return (
        <div class="newContainer">
            <Sidebar/>
            <Newbar/>
        </div>
    )
}

export default New
