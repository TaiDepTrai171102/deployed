import React from 'react'
import './style.css'
import Card from './Cardtask'
export default function ListTask(props) {
  return (
    <div className='all-task'>
        <Card title="Task 1" creator="Author" status="Doing"/>
        <Card title="Task 2" creator="Author"/>
        <Card title="Task 3" creator="Author"/>
        <Card title="Task 4" creator="Author"/>
        <Card title="Task 5" creator="Author"/>
        <Card title="Task 6" creator="Author"/>
        <Card title="Task 7" creator="Author"/>
        <Card title="Task 8" creator="Author"/>
      
    </div>
  )
}
