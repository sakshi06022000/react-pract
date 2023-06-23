import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AppHeader from './AppHeader';
import Home from './Home';
import Contact from './Contact';
import Customer from './Customer';
import Error from './Error';
import AddCustomer from './AddCustomer';
import EditCustomer from './EditCustomer';
import { ToastContainer } from 'react-toastify';
import Registration from './Registration';
import Login from './Login';


function App() {
  return (
    <div className="App">
<Router>
      {/* <BrowserRouter> */}
        {/* <AppHeader /> */}
        <Routes>
          <Route path='home' element ={<Home/>}></Route>
          <Route path='contact' element ={<Contact/>}></Route>
          <Route path='customer' element ={<Customer/>}></Route>
          <Route path='customer/create' element ={<AddCustomer/>}></Route>
          <Route path='customer/edit/:code' element ={<EditCustomer/>}></Route>
          <Route path='customer/:code' element ={<Customer/>}></Route>
          <Route path='*' element ={<Error></Error>}></Route>
          <Route path='/' element = {<Registration/>}></Route>
          <Route path='login' element = {<Login/>}></Route>
        </Routes>
      {/* </BrowserRouter> */}
      </Router>
      <ToastContainer></ToastContainer>
      {/* <h1>Welcome to World!</h1> */}

    </div>
  );
}

export default App;
