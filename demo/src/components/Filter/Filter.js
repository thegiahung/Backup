import './Filter.css'
import React from 'react'

const Filter = (props) => {
    const data = props.data;
  return (
    <div onClick={() => props.filterHouse(data.filterName)} className='filterNode'>
        <img src={data.image} className='filtered'/>
        <div>{data.filterName}</div>
    </div>
  )
}

export default Filter