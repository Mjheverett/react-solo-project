import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Booking from './components/Booking/Booking';

import { Column, Columns } from 'bloomer';

function App() {
  return (
    <div className="App">
      <Header />
      <Columns isCentered>
        <Column isSize='1/2'>
          <Booking />
        </Column>
      </Columns>
    </div>
  );
}

export default App;
