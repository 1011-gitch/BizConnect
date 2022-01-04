import React from 'react'
import "./home.css";
import Sidebar from '../components/sidebar/sidebar';
import Mainbar from '../components/mainbar/mainbar';
const Home = () => {
    return (
        <div className='homeContainer'>
            <Sidebar/>
            <Mainbar/>
        </div>
    )
}

export default Home;
