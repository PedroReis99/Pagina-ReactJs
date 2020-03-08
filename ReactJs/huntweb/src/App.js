import React from 'react';
import Header from './componentes/Header';
import "./style.css";
import Main from "./pages/main/index";
import Routes from './routes';
import { Route } from 'react-router-dom';

const App = () => (
  <div className="App">
  <Header />
  <Routes />
  </div>
);

export default App;
