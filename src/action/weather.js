import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
export const GET_W_START="GET_W_START";
export const GET_W_SUCCESS="GET_W_SUCCESS";

const getWeatherSuccess=(data,origin)=>({
    type:GET_W_SUCCESS,
    payload:{data,origin},
});

function* fetchData(){
    const api = 'http://opendata2.epa.gov.tw/AQI.json';
    const data=yield call(() => axios.get(api).then((response)=>{
        return response.data
    }))
    let o=[];
    for(let i=0;i<data.length;i++){
        o.push(data[i].County);
    }
    let origin=Array.from(new Set(o));
    yield put(getWeatherSuccess(data,origin));
}

export const getWeatherStart=(data)=>{
    return({
        type:GET_W_START,
        payload:{data,},
    })
    
}
function* mySaga(){
    yield takeEvery(GET_W_START,fetchData)
}

export const CHANGE_CITY="CHANGE_CITY";
export const STARED="STARED";
export const CANCEL="CANCEL";

export const changeCity=(data)=>{
    return({
        type:CHANGE_CITY,
        payload:{data,},
    })
}

export const addStared=(data)=>{
    return({
        type:STARED,
        payload:{data,},
    })
}

export const cancel=(data)=>{
    return({
        type:CANCEL,
        payload:{data,},
    })
}
export default mySaga;
