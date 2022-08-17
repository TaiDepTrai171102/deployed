import React from 'react'

export default function FormCard() {
    const handleCreate = () =>{

    }
    return (
    <div className='container'>
        <form onSubmit={handleCreate}>
            <label>Name:</label>
            <input value='' placeholder='Name'/>
            <label>Img:</label>
            <button>Upload</button>
            <label>Price:</label>
            <input value='' placeholder='Price'/>
        </form>
    </div>
  )
}
