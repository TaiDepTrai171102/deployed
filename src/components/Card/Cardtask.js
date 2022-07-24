import React ,{useState} from 'react'
import './style.css'
export default function Card(props) {
    const [actionstatus,setActionstatus] = useState('New')
    const [status, setStatus] = useState('Start')
    const [color,setColor] = useState('orange')
  function handleAction(){
    if(status === 'Start' && actionstatus === 'New'){
        setStatus('Done')
        setActionstatus('Doing')
        setColor('yellow')
    }else if (status === 'Done' && actionstatus === 'Doing'){
        setStatus('Renew')
        setActionstatus('Done')
        setColor('#F88F14')
    }else if (status === 'Renew' && actionstatus ==='Done'){
        setStatus('Start')
        setActionstatus('New')
        setColor('green')
    }
  }
  return (
    <div className='card-container'>
        <h5>Title:{props.title}</h5>
        <p>Creator:{props.creator}</p>
        <p style={{color: color}}>Status:{actionstatus}</p>
        <hr />
        <h5>Description: </h5>
        <p className='description'>some thing to task, info task some thing to task, info task some thing to task, info task some thing to task, info task</p>
        <button onClick={handleAction} style={{outline: 'none', border: 'none',background:'#675BF1',color:'white',borderRadius:10}}>{status}</button>    
  </div>
  )
}
