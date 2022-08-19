import React from 'react'
import './style.css'
import { useState } from 'react';
export default function Form({
  isEdit = false
}) {
    const [formValue, setFormValue] = useState({
        name: "",
        price: "",
        img: ""
    });
    const [name, setName] = useState("");
  return (
    <div className='form'>
      <form>
        <h1>Add New Product </h1>
        <div className='form__input'>
          <label htmlFor='creator'>Name</label>
          <input type={'text'} id='creator' placeholder='Input Creator' required />
        </div>
        <div className='form__input'>
          <label htmlFor='create-at'>Img</label>
          <input type={'text'} id='create-at' disabled placeholder='Input img' required />
        </div>
        <div className='form__input'>
          <label htmlFor='description'>Price</label>
          <input type={'text'} id='description' placeholder='Input number' required />
        </div>
        {isEdit && <>
          <div className='form__radio'>
            <input type="radio" id="html" name="status" value="HTML" />
            <label style={{ marginLeft: '10px' }} htmlFor="html">HTML</label>
            <input type="radio" id="css" name="status" value="CSS" />
            <label style={{ marginLeft: '10px' }} htmlFor="css">CSS</label>
            <input type="radio" id="javascript" name="status" value="JavaScript" />
            <label style={{ marginLeft: '10px' }} htmlFor="javascript">JavaScript</label>
          </div>
          <div style={{
            margin: '30px auto',
            display: 'flex',
            gap: '20px',
            justifyContent: 'center'
          }}>
            <button className='form__btn'>Save</button>
            <button className='form__btn'>Reset</button>
            <button className='form__btn'>Delete</button>
          </div>
        </>
        }
        {!isEdit && <button className='form__btn form__btn--save'>Save</button>}
      </form >
    </div >
  )
}