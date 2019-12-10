import React, {useState} from "react";
import "./App.css";

const BottomRow = () => {
  let [down, downnew] = useState(1);
  let [togo, togonew] = useState(10);
  let [yard, yardnew] = useState(20);
  let [quarter, quarternew] = useState(1);

  function qsom(quarter){
    return quarter < 4 ? quarter+1:quarter =1;
  }

  function ysom(yard){
    togonew(tsom(togo))
   yard = (Math.random().toFixed(1)*10)+ yard;
   return yard < 100 ? yard:yard=20;
  //  return down < 4 ? down+1:down =1;
  }

  function dsom(down){
    return down < 4 ? down+1:down =1;
  }

  function tsom(togo){
    return yard - togo;
  }
    return (
     
    <div className="bottomRow">
  

      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{down}</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">{togo}</div>
      </div>
      <button className = "play" onClick={()=> downnew(dsom) + yardnew(ysom(yard)) +quarternew(qsom(quarter))}>Play</button>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">{yard}</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarter}</div>
      </div>
    </div>
    )

 }


export default BottomRow;
