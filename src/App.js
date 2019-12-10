//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow"; 
 let t4, t3 = 60;
function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [home, homenew] = useState(0);
  const [away, awaynew] = useState(0);
  let [timer, timeout] = useState(false);

  let run = function(){
   timer === false ? 
    clearTimeout(timer):
    timer = setTimeout(function(){
      t3-=.015;
      t4 = t3.toFixed(1);
      t4 < 0 ? t4 = 60:t4=t4;
      return t4;
    })
  };
 run()

  // const [time, timenew] = userState(60);
console.log(timer)
  
const newdate = new Date().toLocaleTimeString();


  return (
    <div id= "hmm" className="container">
      <section className="scoreboard">
      <div className="time">{newdate}</div>
        <div className="topRow">
        
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
           
            <div className="home__score">{home}</div>
          </div>
          <div className="timer">{t4}</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{away}</div>
          </div>
        </div>
        <button onClick={()=> timer === false ? timeout(true):timeout(false)} className="to btns">T/O</button>
        
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={() => homenew(home + 6)} className="home__td btns">TD home team</button>
          <button onClick={() => homenew(home + 1)} className="home__ex btns">Extra point</button>
          <button onClick={() => homenew(home + 3)} className="home__fg btns">FG home team</button>
        </div>
      
        <div className="awayButtons">
          <button onClick={() => awaynew(away+ 6)} className="away__td btns">TD away team</button>
          <button onClick={() => awaynew(away + 1)} className="away__ex btns">Extra point</button>
          <button onClick={() => awaynew(away + 3)} className="away__fg btns">FG away team</button>
        </div>
      </section>
    </div>
  );
}



export default App;
