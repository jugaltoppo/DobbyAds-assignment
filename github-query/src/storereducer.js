import React from "react";

const initialState = {
    userDetail : []
}



function reducer(state = initialState, action){
    switch (action.type){
        case "store":
        return {
            ...state, userDetail:
            [...state.userDetail, action.payload]
        }
        default:
        return state;
    }
}

export default reducer;