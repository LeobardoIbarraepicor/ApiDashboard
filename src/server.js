const express = require('express');
const app = express();
const port = 3000;

// Simulación de resultados del pipeline
const getPipelineResults = () => {
  return [
    { name: 'Step 1', status: 'Success', duration: 120 },
    { name: 'Step 2', status: 'Failed', duration: 45 },
  ];
};

// Endpoint para obtener los resultados del pipeline
app.get('/api/pipeline-results', (req, res) => {
  const results = getPipelineResults();
  res.json(results);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});