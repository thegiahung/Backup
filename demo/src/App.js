import { useState } from 'react';
import './App.css';
import FilterList from './components/Filter/FilterList';
import HousePrice from './components/Prices/HousePrice';
import houseImage from './static/house.webp'

const dummyData = [
  {image: houseImage, location: "Burraner, Australia", bed: "5 beds", price: "41000", category: "Beachfront"},
  {image: houseImage, location: "Talbingo, Australia", bed: "3 beds", price: "35000", category: "OMG!"},
  {image: houseImage, location: "Jindabyne, Australia", bed: "4 beds", price: "45000", category: "Tinyhome"},
  {image: houseImage, location: "Merimbula, Australia", bed: "2 beds", price: "30000", category: "Windmills"},
  {image: houseImage, location: "Cooma, Australia", bed: "6 beds", price: "50000", category: "Beachfront"},
  {image: houseImage, location: "Kiandra, Australia", bed: "3 beds", price: "38000", category: "Beachfront"},
  {image: houseImage, location: "Thredbo, Australia", bed: "4 beds", price: "47000", category: "Beachfront"},
  {image: houseImage, location: "Perisher Valley, Australia", bed: "5 beds", price: "52000", category: "National parks"},
  {image: houseImage, location: "Charlotte Pass, Australia", bed: "2 beds", price: "31000", category: "Beachfront"},
  {image: houseImage, location: "Mount Kosciuszko, Australia", bed: "3 beds", price: "40000", category: "Beachfront"}
]
function App() {
  const [houses, setHouses] = useState(dummyData)
  const filterHouse = (category) => {
    setHouses(prev => dummyData.filter(house => house.category===category))
  }
  return (
    <div className="App">
      <h1>Airbnb</h1>
      <FilterList filterHouse={filterHouse}/>
      <div className='image-grid'>{houses.map(data => (<HousePrice data={data}/>))}</div>
    </div>
  );
}

export default App;
