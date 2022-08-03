import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'
export default function Header() {
  const navigate = useNavigate();
  function handleCreate(){
    navigate('/create-task')
  }
  return (
  <div className='header header-container'>
  <button className='btn btn--header' onClick={handleCreate}>
      Create New Task

      </button>
  
    <div style={{display: 'flex',gap: '20px'}}>
      <input className='input input--header' type={'text'} placeholder={'Type some thing to search...'} />
      <button className='btn btn--header'>Search</button>
    </div>
  </div>
  )
}
