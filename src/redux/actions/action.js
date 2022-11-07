import { DECREMENT, INCREMENT, LOGIN_USER, LOGOUT_USER } from "./types"


export const IncrementAction = (value) =>
{
    return {
        type : INCREMENT,
        payload : value
    }
}

export const DecrementAction = (value) =>
{
    return {
        type : DECREMENT,
        payload : value
    }
}
export const LoginAction = () =>
{
    return {
        type : LOGIN_USER
    }
}

export const LogoutAction = () =>
{
    return {
        type : LOGOUT_USER
    }
}