import React from 'react'
import './style.css'
import {Link, useNavigate} from 'react-router-dom';
export default function Header() {
  const navigate = useNavigate();
  function handleButton() {
    navigate('/add')
  }
  return (
    <div className='header'>
        <h1>ShopFood</h1>
        <div className='btn'>

        <button onClick={handleButton}>Create Card</button>
 
        <button>View Card</button>
        </div>
    </div>
  )
}
