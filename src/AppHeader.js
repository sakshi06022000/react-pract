import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import './App.css';
import { useEffect, useState } from "react";

const AppHeader = () => {

    //menu visiblity
    const [menuvisible, menuvisiblechange] = useState(true)
    const location = useLocation();
    const navigate = useNavigate();


    //validatio which is first redirect to page 
    useEffect(() => {
        if (location.pathname == '/register' || location.pathname == '/login') {
            menuvisiblechange(false);
        } else {
            // save in localStorage
            let username = localStorage.getItem('username') != null ? localStorage.getItem('username').toString() : '';
            if (username === '') {
                //if username is ety
                navigate('/')
            }
            menuvisiblechange(true  );
        }


        // console.log(location)
    }, [location]);
    return (
        <div>{
            menuvisible &&
            <div className="App-header">
                <NavLink to="/" >Home</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/customer">Customer</NavLink>
                {/* <Link style={{ float: 'right' }} to="/register">Register</Link> */}
                <Link style={{ float: 'right' }} to="/login">Logout</Link>

                {/* page is refresh */}
                {/* <a href="">Home</a>
            <a href="contact">Contact</a>
            <a href="customer">Customer</a> */}
            </div>
        }
        </div>
    );
}

export default AppHeader;