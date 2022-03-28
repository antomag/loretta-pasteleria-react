import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import CardListContainer from './components/CardListContainer/CardListContainer.js'
import CardDetailConteiner from './components/CardDetailContainer/CardDetailContainer'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <CardListContainer/>
      <hr></hr>
      <CardDetailConteiner/>
    </div>
  );
}

export default App;
