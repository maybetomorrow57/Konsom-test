import React from "react";
import { useState, useEffect } from "react";
import "../styles/CurrencyConverter.css";


const CurrencyConverter = () => {
	const [quantity, setQuantity] = useState("1");
	const [currencyIn, setCurrencyIn] = useState("USD");
	const [currencyOut, setCurrencyOut] = useState("RUB");
	const [currencyInValue, setCurrencyInValue] = useState(1);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetchCurrencyInValue(currencyIn, currencyOut);
	}, []);

	const handleChangeQuantity = e => {
		setQuantity(e.target.value);
	};

	const handleChangeCurrencyIn = e => {
		setCurrencyIn(e.target.value);
	};

	const handleChangeCurrencyOut = e => {
		setCurrencyOut(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		fetchCurrencyInValue(currencyIn, currencyOut);
	};

	const fetchCurrencyInValue = (currencyIn, currencyOut) => {
		fetch(`https://openexchangerates.org/api/latest.json?app_id=289b166bf9be4727882605312b5cd7f0&base=${currencyIn}`)
		.then(res => res.json())
		.then(
			result => setCurrencyInValue(result.rates.[currencyOut]), 
			error => setError(error)
		);
	};

	if (error) {
		return (
			<div className = "error">{error.message}</div>
		); 
	}

	const totalPrice = Math.round(quantity*currencyInValue*10000)/10000;

	return (
		<div className="currency-converter"> 
			<h2>Онлайн калькулятор валют</h2>
			<form onSubmit = {handleSubmit}>
				<input 
					type = "number" 
					name = "quantity" 
					value = {quantity} 
					onChange = {handleChangeQuantity} />
				<select
					name = "currencyIn" 
					value = {currencyIn} 
					onChange = {handleChangeCurrencyIn} >
						<option value = "USD">USD (Американский доллар)</option>
						<option value = "RUB">RUB (Российский рубль)</option>
						<option value = "EUR">EUR (Евро)</option>
						<option value = "GBP">GBP (Фунт стерлингов)</option>
						<option value = "CAD">CAD (Канадский доллар)</option>
						<option value = "CHF">CHF (Швейцарский франк)</option>
						<option value = "JPY">JPY (Японская йена)</option>
						<option value = "CNY">CNY (Китайский юань)</option>
				</select>
				<label> in </label> 
				<select
					name = "currencyOut" 
					value = {currencyOut} 
					onChange = {handleChangeCurrencyOut} >
						<option value = "USD">USD (Американский доллар)</option>
						<option value = "RUB">RUB (Российский рубль)</option>
						<option value = "EUR">EUR (Евро)</option>
						<option value = "GBP">GBP (Фунт стерлингов)</option>
						<option value = "CAD">CAD (Канадский доллар)</option>
						<option value = "CHF">CHF (Швейцарский франк)</option>
						<option value = "JPY">JPY (Японская йена)</option>
						<option value = "CNY">CNY (Китайский юань)</option>
				</select>
				<button>рассчитать</button>
			</form>
			<p>Сумма: {totalPrice}</p>
		</div>
	);
};

export default CurrencyConverter;