import React from "react";
import '../styles/home.css'
function Home() {


    return (
        <div className="Home">
            <div className="Home_heading">
                <h1>
                    <a className="bookinglink" href="/login">
                        LOGIN
                    </a>
                    &nbsp;&nbsp; 
                    /
                    &nbsp;&nbsp; 
                    <a className="bookinglink" href="/signup">
                        SIGNUP
                    </a>
                </h1>
            </div>
        </div>

    )
}



export default Home;

