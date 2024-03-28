import Filter from './Filter';
import './Filter.css'
import React from 'react'



const FilterList = (props) => {
    const dummyFilter = [
        {image: "https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg", filterName: "Beachfront"},
        {image: "https://a0.muscache.com/pictures/3271df99-f071-4ecf-9128-eb2d2b1f50f0.jpg", filterName: "Tinyhome"},
        {image: "https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg", filterName: "OMG!"},
        {image: "https://a0.muscache.com/pictures/5cdb8451-8f75-4c5f-a17d-33ee228e3db8.jpg", filterName: "Windmills"},
        {image: "https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg", filterName: "NationalPark"}
      ]
    return (
        <div className='filter'>{dummyFilter.map(data => (<Filter data={data} filterHouse={props.filterHouse}/>))} </div>
      );
}

export default FilterList