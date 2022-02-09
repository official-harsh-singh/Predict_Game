import React from "react";
import "..//Images/icon.png"
import "..//CSS/profile.css";

const profile = () => {
    return(
        <div id="body">
            <img src={icon} className="logo" />
     <a href="#" className="btn btn-info btn-lg">
        <span className="glyphicon glyphicon-log-out"></span> Log out
      </a>
    <center>
        <div className="pcard">
            <u>
                <h2> USER PROFILE: </h2>
            </u>
            <div className="staticcard">
                <img src="..//Photos/pic.png" alt="studenticon" className="userlogo"> </img> <br />
                <div className="clr"> Name:</div> &nbsp; <br />
                <div className="name"> Harsh </div> <br />
                <div className="clr"> Roll No :</div> &nbsp; <br />
                <div className="roll"> 107 </div> <br />
                <div className="clr"> Email:</div> &nbsp; <br />
                <div className="email">harsh@gmail.com </div> <br />
                <div className="clr"> Phone Number:</div> &nbsp; <br />
                <div className="phone"> 9939102831 </div> <br />
            </div>
        </div> <br />
        <div className="scores">
            <h4> Test Performances: </h4>
            <div className="levelscores">
                <div className="clr"> HTML : </div><div id="html_m"> 90/100 </div><br />
                <div className="clr"> CSS : </div><div id="css_m">  79/100  </div><br />
                <div className="clr"> Javascript :</div><div id="javascript_m"> 73/100 </div><br />
                <div className="clr"> Node.js :</div><div id="node_m"> 73/100 </div> 
            </div>
            <label for="last"> Last quiz: </label>
            <progress className="last" value="6" max="10"> </progress> <br />
            <label for="avg"> Overall Average: </label>
            <progress className="avg" value="77" max="100"> </progress>
        </div>
    </center>
        </div>
    );
}

export default profile;