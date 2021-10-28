import * as actions from '../action/weather.js';
const initState={
    data:[],
    location:[],
    stared:[],
    filter:'',
}

const weatherReducer=(state=initState,action)=>{
    switch(action.type) {
        case (actions.GET_W_SUCCESS):
            state.stared = JSON.parse(localStorage.getItem("listData")) || [];
            return {
                ...state,
                data:[...action.payload.data],
                location: [...action.payload.origin]
            };
        case (actions.CHANGE_CITY):
            return {
                ...state,
                filter:action.payload.data
            }
        case (actions.STARED):
            if(!state.stared.includes(action.payload.data)){
                state.stared.push(action.payload.data)
                localStorage.setItem("listData", JSON.stringify(state.stared));
                return {
                    ...state,
                    stared:[...state.stared]
                }
            }else{
                return {
                    ...state,
                }
            }
        case (actions.CANCEL):
            var index=state.stared.indexOf(action.payload.data);
            state.stared.splice(index,1);
            localStorage.setItem("listData", JSON.stringify(state.stared));
            return {
                ...state,
                stared:[...state.stared],
            }
        default:
            return state;
    }
}

export default weatherReducer;