const { types } = require("../types/types");


export const authReducer = ( state={}, action ) =>{

    switch (action.type) {
        case types.login:
            return {
                ...action.payload,
                logged: true
            }
        case types.logout:
            return {
                logged: true
            }          
        default:
            return state;
    }
}