import React from 'react';
import { Paper, Box } from '@mui/material';
import './App.css';


function App() {
  return (
    <div className="App">
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 128,
            height: 128,
          },
        }}
      >
        <Paper elevation={3} />
        <Paper elevation={3} />
        <Paper elevation={3} />
      </Box>
    </div>
  );
}

export default App;
