import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Filter from "./Filter";
import {data} from "./data" 

const App = () => {
  return <Filter data={data}/>
};

export default App;
