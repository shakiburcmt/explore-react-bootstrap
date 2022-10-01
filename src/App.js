import { Button, Spinner } from 'react-bootstrap';
import './App.css';
import GridCard from './components/GridCard/GridCard';
import Navigation from './components/Navigation/Navigation';
import Toasting from './components/Toasting/Toasting';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <button>Normal</button>
      <br />
      <Button variant='warning'>React Bootstrap</Button>
      <br />
      <Toasting></Toasting>
      <br />
      <Spinner animation="border" variant="danger" />
      <GridCard></GridCard>
    </div>
  );
}

export default App;
