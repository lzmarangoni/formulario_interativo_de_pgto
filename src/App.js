
import { useState } from 'react';
import './App.css';
import CardBack from './components/CardBack';
import CardFront from './components/CardFront';
import FormDetails from './components/FormDetails'

function App() {

  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('Luiz Souza');

  const captureNumber = (e)=>{
    setCardNumber(e.target.value) 
    console.log(cardNumber)
  }
  const captureCardHolder = (e)=>{
    setCardHolder(e.target.value) 
    console.log(cardHolder)
  }

  return (
    <div className="App">
      <div className='cards'>
        <CardFront cardHolder={cardHolder} cardNumber={cardNumber}/>
        <CardBack/>
      </div>
      <div className='form'>
      <FormDetails captureCardNumber={captureNumber} captureHolderCard={captureCardHolder}/>
      </div>
      
    </div>
  );
}

export default App;
