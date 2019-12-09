import React, {useState} from "react";
import "./App.css";

const BottomRow = () => {
  let [down, downnew] = useState(1);
let [togo, togonew] = useState(10);
let [yard, yardnew] = useState(20);
let [quarter, quarternew] = useState(1);


    return (
     
    <div className="bottomRow">
  
       <button className = "play" onClick={()=> downnew(down+1) + yardnew((Math.random().toFixed(1)*10)+ yard) + togonew(yard - togo)}>Play</button>
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{down}</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">{togo}</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">{yard}</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarternew}</div>
      </div>
    </div>
    )

 }



export default BottomRow;
