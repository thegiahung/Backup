import './HousePrice.css'
import houseImage from '../../static/house.webp'
import React from 'react'

const HousePrice = (props) => {
    const data = props.data;
    console.log(props.info)
  return (
    <div className='house-preview'>
        <img src={data.image} className='preview-image'/>
        <div className='location'>{data.location}</div>
        <div className=''>{data.bed}</div>
        <div>${data.price} AUD</div>
    </div>
  )
}

export default HousePrice