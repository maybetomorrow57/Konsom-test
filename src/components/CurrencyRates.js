import React from "react";
import { useState, useEffect } from "react";
import "../styles/CurrencyRates.css";
import CurrencyRatesList from "./CurrencyRatesList";


const CurrencyRates = () => {
	const [basicCurrency, setBasicCurrency] = useState("USD");
	const [rates, setRates] = useState({});
	const [error, setError] = useState(null);
	
	useEffect(() => {
		fetchCurrencyRates(basicCurrency);
	}, []);
	
	const handleChange = e => {
		setBasicCurrency(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		fetchCurrencyRates(basicCurrency);
	};

	const fetchCurrencyRates = (basicCurrency) => {
		fetch(`https://openexchangerates.org/api/latest.json?app_id=289b166bf9be4727882605312b5cd7f0&base=${basicCurrency}`)
		.then(res => res.json())
		.then(
			result => setRates(result.rates), 
			error => setError(error)
		);
	};

	return (
		<div className="currency-rates"> 
			<h2>Текущий курс валюты</h2>
			<form onSubmit = {handleSubmit}>
				<label>Базовая валюта </label>
				<select
					name = "basicCurrency" 
					value = {basicCurrency}
					onChange = {handleChange} >
						<option value = "USD">USD (Американский доллар)</option>
						<option value = "RUB">RUB (Российский рубль)</option>
						<option value = "EUR">EUR (Евро)</option>
						<option value = "GBP">GBP (Фунт стерлингов)</option>
						<option value = "CAD">CAD (Канадский доллар)</option>
						<option value = "CHF">CHF (Швейцарский франк)</option>
						<option value = "JPY">JPY (Японская йена)</option>
						<option value = "CNY">CNY (Китайский юань)</option>
				</select>
				<button>Применить</button>
			</form>
			<CurrencyRatesList rates = {rates} error = {error} /> 
		</div>
	);
};

export default CurrencyRates;