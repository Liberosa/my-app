import './App.css';
import CurrencyInput from "./CurrencyInput";
<<<<<<< HEAD
import SubmitButton from "./SubmitButton";
import { useState, useEffect } from "react";
import axios from "axios";
import bootstrap from 'bootstrap';
=======
import { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
>>>>>>> b06ac7cfe898e30ddd2bc9fa6ae74e4e9f30bde1

function App() {
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [amount3, setAmount3] = useState(1);
  const [currency1, setcurrency1] = useState('BYN');
  const [currency2, setcurrency2] = useState('USD');
  const [currency3, setcurrency3] = useState('EUR');
  const [rates, setRates] = useState([]);
<<<<<<< HEAD
  const [focus, setFocus] = useState('');
=======

>>>>>>> b06ac7cfe898e30ddd2bc9fa6ae74e4e9f30bde1

  useEffect(() => {
    axios.get('http://data.fixer.io/api/latest?access_key=5868ceabb7db8aa91bbab9ad61887f9b&format=1')
      .then(response => {
        setRates(response.data.rates);
      })
  }, []);


  function handleAmount1Change(amount1) {
    setAmount2(amount1 * rates[currency2] / rates[currency1]);
    setAmount3(amount1 * rates[currency3] / rates[currency1]);
    setAmount1(amount1);
  }

  function handleCurrency1Change(currency1) {
    setAmount2(amount1 * rates[currency2] / rates[currency1]);
    setAmount3(amount1 * rates[currency3] / rates[currency1]);
    setcurrency1(currency1);
  }

  function handleAmount2Change(amount2) {
    setAmount1(amount2 * rates[currency1] / rates[currency2]);
    setAmount3(amount2 * rates[currency3] / rates[currency2]);
    setAmount2(amount2);
    
  }

  function handleCurrency2Change(currency2) {
    setAmount1(amount2 * rates[currency1] / rates[currency2]);
    setAmount3(amount2 * rates[currency3] / rates[currency2]);
    setcurrency2(currency2);
<<<<<<< HEAD
    console.log(typeof(amount2))
=======
>>>>>>> b06ac7cfe898e30ddd2bc9fa6ae74e4e9f30bde1
  }

  function handleAmount3Change(amount3) {
    setAmount1(amount3 * rates[currency1] / rates[currency3]);
    setAmount2(amount3 * rates[currency2] / rates[currency3]);
    setAmount3(amount3);
  }

  function handleCurrency3Change(currency3) {
    setAmount1(amount1 * rates[currency1] / rates[currency3]);
    setAmount2(amount2 * rates[currency2] / rates[currency3]);
    setcurrency3(currency3);
  }
<<<<<<< HEAD
  function handle(){

  }
  
  
  function handleSubmit(){


  }

  return (
    <div >
=======

  return (
    <div >
      <Header/>
>>>>>>> b06ac7cfe898e30ddd2bc9fa6ae74e4e9f30bde1
      <CurrencyInput
        name
        onAmountChange={handleAmount1Change}
        onCurrencyChange={handleCurrency1Change}
        currencies={Object.keys(rates)}
        amount={amount1}
        currency={currency1} />

      <CurrencyInput
        onCurrencyChange={handleCurrency2Change}
        onAmountChange={handleAmount2Change}
        currencies={Object.keys(rates)}
        amount={amount2}
        currency={currency2} />

      <CurrencyInput
        onCurrencyChange={handleCurrency3Change}
        onAmountChange={handleAmount3Change}
        currencies={Object.keys(rates)}
        amount={amount3}
        currency={currency3} />
<<<<<<< HEAD
      <SubmitButton onClick ={handleSubmit}/>
=======
>>>>>>> b06ac7cfe898e30ddd2bc9fa6ae74e4e9f30bde1
    </div>
  );
}

export default App;
