import './App.css';
import CardContainer from './components/Card/CardContainer';
import SearchFieldContainer from './components/SearchField/SearchFieldContainer';

function App() {
  return (
    <div className="App">
      <SearchFieldContainer />
      <CardContainer />
    </div>
  );
}

export default App;
