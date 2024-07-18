import axios from "axios";
import React, { useEffect, useState } from "react";
import { FcSynchronize } from "react-icons/fc";
import "./Valyuta.css";
const Valyuta = () => {
  const [option, setoption] = useState(0);
  const [names, setName] = useState([]);
  const[amount , setAmount] = useState(0)
  const[fromCurrency , setFromCurrency] = useState('USD')
  const[toCurrency , setToCurrency] = useState('TRY')
const [result,setresult]=useState(0);
  const [data , setData] = useState();

  useEffect(()=>{
    getData();

  }, [])

  const getData = async () => {
    const request = await axios.get(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_NzcIIlJH0vjxtDCMnDsYCNr6e9IzxRqXzRRUViCh&base_currency=${fromCurrency}`);
    console.log(request.data.data);
    setData(request.data.data)
    setName(Object.keys(request.data.data));
  };

  const convert = ()=>{
  let   cavab = amount * data[toCurrency]
 setresult(cavab);
  }


  return (
    <>
   <h1>Exchange Rate</h1>
   <div className="container">
      <input type="text" placeholder="Enter Amount"  value={amount} onChange={(e)=> setAmount(e.target.value)} />
      <select  id=""  value={fromCurrency} onChange={(e)=> setFromCurrency(e.target.value)}>
         <option  >Choose...</option> 
        {names.map((item, i) => {
          return <option >{item}</option>;
        })}
      </select>
      <button onClick={convert}>Convert<FcSynchronize /></button>
      
       <select  id="" value={toCurrency}  onChange={(e)=> setToCurrency(e.target.value)}>
         <option  >Choose...</option> 
        {names.map((item, i) => {
          return <option >{item}</option>;
        })}
      </select>
      <input type="text" value={result} />
      </div>
 
    </>
  );
};

export default Valyuta;
