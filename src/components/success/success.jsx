import React from 'react'
import { Link } from 'react-router-dom';
import prod from "../../assets/success.gif"
import "./success.scss";
const success = () => {
  return (
    <>
    <div className='succ'>
    <img src={prod} alt="loading..." />
    <h1>Success</h1>
    <div className='text'>
    <span>Your Transaction Successful</span> <br/>
    <Link to="/">
    <button >Click to continue shopping</button>
    </Link>
    </div>
    </div>
    </>

  )
}

export default success