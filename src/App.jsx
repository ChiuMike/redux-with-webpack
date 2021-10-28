import React from "react";
import ReactDOM from "react-dom";
import { useState,useMemo,useEffect ,useCallback} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getWeatherStart,changeCity} from './action/weather.js'
import SelectCity from './SelectCity.jsx';
import FocusCity from './FocusCity.jsx';
function App() {
    const dispatch=useDispatch();
    const data=useSelector(state=>state.data);
    const location=useSelector(state=>state.location);
    const filter=useSelector(state=>state.filter);
    const stared=useSelector(state=>state.stared);

    useEffect(()=>{
        dispatch(getWeatherStart());
    },[])
    return (
    <div className="App">
      <select name="" id="" 
       onChange={(e)=>{dispatch(changeCity(e.target.value))}} className="form-control mb-3">
        <option value="">--- 請選擇城市 ---</option>
        {location.map((item)=>{
            return(
                <option value={item} key={item}>{item}</option>
            )
        })}
      </select>
      <div>
        <h4>關注城市</h4>
        {stared.map((item,key)=>{
            return(<FocusCity item={item}/>)
        })}
        
      </div>
      <hr />
      <h4>選取城市</h4>
      {data.map((item,key)=>{
          if(item.County===filter){
            return(
                <SelectCity item={item}/>
            )
          }
      })}
    </div>
  );
}
export default App;
