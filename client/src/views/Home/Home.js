import React from 'react';
import { Link } from "react-router-dom";
import './Home.css'

function Home() {
    return(
        <div className="box">
            <h1>Welcome to STEM+C</h1>
            <input type="text" placeholder="Join Code" /><br />
            <input type="button" value="Join"/>
            <Link to={'/login'} className="boxLink">Click here if you are a teacher</Link>
        </div>
    )
}

export default Home;