import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import { Navigate } from 'react-router-dom';

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

function Order(props) {
  const [redirect, setRedirect] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    let id = e.target.order.value;
    console.log(e.target.order.value);
    axios.get(`${REACT_APP_SERVER_URL}/order/${id}`)
    .then((response) => {
      console.log(response.data);
      props.setOrder(response.data);
      setRedirect(true);
    }).catch((error) => {
      console.log("ERROR", error);
    });
  }
  if (redirect) return <Navigate to="/display" />


  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h4>Search by Order Number</h4>
        <input autoComplete='off' name='order'type="text" placeholder="Order Number" /><br />
        <button type='button submit' className='btn btn-primary'>Search</button>
      </form>
      <form onSubmit={handleSubmit}>
        <h4>Search by Name</h4>
        <input autoComplete='off' name='order'type="text" placeholder="Order Number" /><br />
        <button type='button' className='btn btn-primary'>Search</button>      </form>
      <form onSubmit={handleSubmit}>
        <h4>Search by Lead</h4>
        <input autoComplete='off' name='order'type="text" placeholder="Order Number" /><br />
        <button type='button' className='btn btn-primary'>Search</button>      </form>

    </div>
  );
}

export default Order;
