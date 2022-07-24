import React from 'react'
import './style.css'
export default function Sidebar() {
  return (
    <div className='sidebar sidebar-container'>
        <ul>
          <li className='task'>All Task</li>
          <li  className='task'>New Task</li>
          <li  className='task'>Doing Task</li>
          <li  className='task'>Done Task</li>
        </ul>
    </div>
  )
}
