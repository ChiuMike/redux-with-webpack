import React from "react";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from 'react-redux';
import {addStared} from './action/weather.js'
const SelectCity=(props)=>{
    const {item}=props;
    const dispatch=useDispatch();
    return(
        <div className={`card ${item['Status']==='良好' && 'status-aqi1'||
             item['Status']==='普通' && 'status-aqi2'||
             item['Status']==='對敏感族群不健康' && 'status-aqi3'||
             item['Status']==='對所有族群不健康' && 'status-aqi4'||
             item['Status']==='非常不健康' && 'status-aqi5'||
             item['Status']==='危害' && 'status-aqi6'}`}>
            <div className="card-header">
                {item['County']} - {item['SiteName']}
                <a href="#" className="float-right" 
                onClick={()=>{dispatch(addStared(item))}}><i className="far fa-star"></i></a>
            </div>
            <div className="card-body">
                <ul className="list-unstyled">
                <li>AQI 指數: {item.AQI}</li>
                <li>PM2.5: {item['PM2.5']}</li>
                <li>說明: {item.Status}</li>
                </ul>
                {item.PublishTime}
            </div>
        </div>
    )
}

export default SelectCity;