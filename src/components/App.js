import React from "react";
import "../styles/App.css";
import CurrencyConverter from "./CurrencyConverter";
import CurrencyRates from "./CurrencyRates";


const App = () => {
  	return (
    	<div className="app">
    		<h1>Конвертер валют онлайн</h1>
    		<CurrencyRates />
     	 	<CurrencyConverter /> 
    	</div>
  	);
};

export default App;
