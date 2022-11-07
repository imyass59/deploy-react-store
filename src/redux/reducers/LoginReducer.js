import { LOGIN_USER, LOGOUT_USER } from "../actions/types";

const initialState = { 
    loginIn : false,
};

const LoginReducer = (state = initialState ,action) =>
{
    switch(action.type)
    {
        case LOGIN_USER:
            return {...state,loginIn : true};
        case LOGOUT_USER:
            return {...state,loginIn : false};
        default:
            return state;
    }
}


export default LoginReducer;