import React from 'react';
import { Container, Typography } from '@mui/material';
import './Jumbotron.css';

const Jumbotron = () => {
    return (

      <Container
        maxWidth="md"
        className="jumbotron-container"
        style={{
          backgroundImage:`url(${process.env.PUBLIC_URL}/img/00540-442527059.png)`
,
        }}
      >
        <Typography className='jumbotron-text' variant="h2" component="h1" gutterBottom>
          Todo App
        </Typography>
        <Typography className='jumbotron-text' variant="h6" component="p">
          Organize your tasks with this simple todo app.
        </Typography>
      </Container>
    );
  };
  
  
export default Jumbotron;