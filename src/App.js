import './App.css';
import CardContainer from './components/Card/CardContainer';
import SearchFieldContainer from './components/SearchField/SearchFieldContainer';
import CrewContainer from './components/Crew/CrewContainer';
import CrewListContainer from './components/CrewList/CrewListContainer';
import OrderContainer from './components/Order/OrderContainer';

const App = () => {
  return (
    <div className="App">
      <SearchFieldContainer />
      <CrewContainer />
      <div className="mainContent">
        <CardContainer />
        <CrewListContainer />
      </div>
      <OrderContainer />
    </div>
  );
};

export default App;
