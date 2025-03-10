import React from 'react';
import ReactDOM from 'react-dom/client';
import styled from 'styled-components';
import './index.css';
import App from './App';
import { BrowserRouter,Link,Route,Routes } from 'react-router-dom';
import AI from './pages/AI'
// import Mylayout from './components/Mylayout';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Container = styled.div`
  @media (min-width: 768px) {
    width: 768px;
    }
  @media (min-width: 1280px) {
    width: 1280px;
    }
  // display: flex;
  // justify-content: center;
`;


root.render(
  <Container >
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </Container>
);
