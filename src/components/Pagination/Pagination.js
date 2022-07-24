
import React from 'react'
import './style.css'
export default function Pagination() {
  return (
<div className='panigation-wrapper'>
    <button className='btn-pagination' style={{borderTopLeftRadius: 10,borderBottomLeftRadius: 10}}>{'<'}</button>
    <button className='btn-pagination'>1</button>
    <button className='btn-pagination'>2</button>
    <button className='btn-pagination' >3</button>
    <button className='btn-pagination' style={{borderTopRightRadius: 10,borderBottomRightRadius: 10}}>{'>'}</button>
  </div >
  )
}
