
import './App.css';
import CardBack from './components/CardBack';
import CardFront from './components/CardFront';
import FormDetails from './components/FormDetails'

function App() {
  return (
    <div className="App">
      <div className='cards'>
      <CardFront/>
        <CardBack/>
      </div>
      <FormDetails/>
    </div>
  );
}

export default App;
