import { act } from "react-dom/test-utils";

let initialState = {
    number:0,
    id:"",
    password:""
}



function reducer(state=initialState, action) {
    console.log('액션은 뭘까?', action);
    if (action.type === "INCREMENT") {
        return {...state, number:state.number + action.payload.count}
    }else if(action.type === "LOGIN") {
        return {...state, id:action.payload.id, password:action.payload.password}
    }else if(action.type === "DECREMENT") {
        return {...state, number:state.number - 1}
    }

    // switch (action.type) {
    //     case "INCREMENT":
    //         return {...state, number:state.count + 1};
    //     default:
    //         return {...state};
    // }

    return {...state};
}

export default reducer;