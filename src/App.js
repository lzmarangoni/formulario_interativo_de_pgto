
import { useState } from 'react';
import React from 'react';
import './App.css';
import CardBack from './components/CardBack';
import CardFront from './components/CardFront';
import FormDetails from './components/FormDetails'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Concluido from './components/pages/Concluido';


function App() {

  const [cardNumber, setCardNumber] = useState('0000 0000 0000 0000');
  const [cardHolder, setCardHolder] = useState('Luiz Souza');
  const [cardCvv, setCardCvv] = useState('123');
  const [cardMonth, setCardMonth] = useState('MM');
  const [cardYear, setCardYear] = useState(' AAAA');


  const captureNumber = (e) => {
    setCardNumber(e.target.value)
    console.log(cardNumber)
  }
  const captureCardHolder = (e) => {
    setCardHolder(e.target.value)
    console.log(cardHolder)
  }

  const captureCardCvv = (e) => {
    setCardCvv(e.target.value)
    console.log(cardCvv)
  }

  const captureMonth = (e) => {
    setCardMonth(e.target.value )
    console.log(cardMonth)
  }

  const captureYear = (e) => {
    setCardYear(e.target.value)
    console.log(cardYear)
  }

  const dadosDocartao = {
    nome: cardHolder,
    numero: cardNumber, 
    cvv: cardCvv,
    mesVenc: cardMonth,
    anoMes: cardYear 
  }

  

  return (
    <div className="App">
      <div className='cards'>
        <CardFront cardNumber={cardNumber}
          cardHolder={cardHolder}
          cardMonth={cardMonth}
          cardYear={cardYear}
        />

        <CardBack Cvv={cardCvv} />
      </div>

      <div className='form'>


        <BrowserRouter>
          <Routes>
            <Route path='/' element={<FormDetails
              captureHolderCard={captureCardHolder}
              captureCardNumber={captureNumber}
              captureMonth={captureMonth}
              captureYear={captureYear}
              captureCvv={captureCardCvv} />} />
              <Route path='/concluido' element={<Concluido/>}/>
          </Routes>
          
        </BrowserRouter>

      </div>

    </div>
  );
}

export default App;
