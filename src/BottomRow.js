import React, {useState} from "react";
import "./App.css";

const BottomRow = () => {
  let [down, downnew] = useState(1);
  let [togo, togonew] = useState(10);
  let [yard, yardnew] = useState(20);
  let [quarter, quarternew] = useState(1);
  let holder =0;
  function qsom(quarter){
    return quarter < 4 ? quarter+1:quarter =1;
  }

  function ysom(yard){
    
   let yardage = (Math.random().toFixed(1)*10)+ yard;
   console.log(yardage-yard)
   holder = yardage - yard;
   togonew(tsom(togo))
   return yard < 100 ? yardage:yard=20 + holder;
  //  return down < 4 ? down+1:down =1;
  }

  function dsom(down){
    return down < 4 ? down+1:down =1;
  }

  function tsom(togo){
    // yard = yard - togo
    console.log(yard);
    let acc = holder +holder;
    togo = togo < 0 ? togo = 10: togo; 
    return acc >= 10 ? togo = 10: togo = togo - acc;
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
