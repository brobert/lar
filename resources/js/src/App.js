import React, { Component } from 'react';
import {HashRouter, BrowserRouter} from 'react-router-dom';
import Routers from './Routers.js';

import '../node_modules/jquery/dist/jquery.min.js';
import './Vendor.js';

class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
          <Routers />
        </BrowserRouter>
    );
  }
}

export default App;
