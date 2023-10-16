import './App.css';
import Animal from './components/Animal';
import animalsData from './components/animals'


function App() {
  return (
    <div className="App">
        <h1 className="additionalinformation">Animal Information</h1>
      {animalsData.map((animal, index) => (
        <Animal key={index} name={animal.name} isMammal={animal.isMammal}/>
      ))}
    </div>
  );
}

export default App;
