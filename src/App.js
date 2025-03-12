import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Chart from './components/chart';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/pipeline-results')
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <Chart data={data} />
    </div>
  );
};

export default App;