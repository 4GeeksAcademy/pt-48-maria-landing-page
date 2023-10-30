import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import CardBody from './components/CardBody';
import CardsDown from './components/CardsDown';

function App() {
  return (
    <div className='container'>
      <div className='row body rounded-top-5'>
        <NavBar />
        <CardBody />
        <CardsDown />
      </div>
    </div>
  );
}

export default App;

