import React from "react";
import "../styles/CurrencyRatesList.css";


const CurrencyRatesList = (props) => {

	if (props.error) {
		return (
			<div className = "error">{props.error.message}</div>
		);	
	}

	return (
		<div className="currency-rates-list"> 
			<div className="card" >
				<h3>RUB</h3>
				<p>{Math.round(props.rates.RUB*10000)/10000}</p>
			</div>
			<div className="card" >
				<h3>EUR</h3>
				<p>{Math.round(props.rates.EUR*10000)/10000}</p>
			</div>
			<div className="card" >
				<h3>GBP</h3>
				<p>{Math.round(props.rates.GBP*10000)/10000}</p>
			</div>
			<div className="card" >
				<h3>CAD</h3>
				<p>{Math.round(props.rates.CAD*10000)/10000}</p>
			</div>
			<div className="card" >
				<h3>CHF</h3>
				<p>{Math.round(props.rates.CHF*10000)/10000}</p> 
			</div>
			<div className="card" >
				<h3>USD</h3>
				<p>{Math.round(props.rates.USD*10000)/10000}</p>
			</div>
			<div className="card" >
				<h3>JPY</h3>
				<p>{Math.round(props.rates.JPY*10000)/10000}</p>
			</div>
			<div className="card" >
				<h3>CNY</h3>
				<p>{Math.round(props.rates.CNY*10000)/10000}</p>
			</div>
		</div>
	);
};

export default CurrencyRatesList;