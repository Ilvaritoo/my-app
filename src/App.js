import React, { useState, useEffect } from 'react'
import Loading from './components/Loading';
import Tours from './components/Tours';

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    setTours(tours.filter(tour => tour.id !== id))
  }


  const fetchTours = async () => {
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }


  }

  useEffect(() => fetchTours(), [])

  if (loading) {
    return (
      <div className="App">
        <Loading />
      </div>
    );
  }

  if (tours.length === 0) {
    return (
      <div>
        <h2>No tours left</h2>
        <button className='refreshBtn' onClick={fetchTours}>refresh</button>
      </div>)
  }
  return (
    <Tours tours={tours} removeTour={removeTour} />
  )

}

export default App;
