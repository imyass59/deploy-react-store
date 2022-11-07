import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LoginAction, LogoutAction } from '../redux/actions/action';
import Counter from './Counter';
import Dashboard from './Dashboard';

export default function NavBar() {
    const loginIn = useSelector(state => state.LoginIn.loginIn);
    const dispatch = useDispatch();
    const HandleLogin = () =>
    {
        dispatch(LoginAction());
    }

    const HandleLogout = () =>
    {
        dispatch(LogoutAction());
    }
  return (
    <>
        <section>
            <ul>
                <li>Home</li>
                <li>Service</li>
                <li>About</li>
            </ul>
            {/*
                (loginIn)
                ?
                <>
                    <Dashboard />
                    <br />
                    <button onClick={HandleLogout}>
                        Logout
                    </button>
                </>
                :
                <>
                    <button onClick={HandleLogin}>
                        Login
                    </button>
                </>
            */}
            <Dashboard />
        </section>
    </>
  )
}
