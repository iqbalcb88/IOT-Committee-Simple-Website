import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Candidates from './components/Candidates/Candidates';
import bg from '../src/img/bg.jpg';

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        objectFit: 'cover',
      }}
      className='App'
    >
      <Header />
      <Candidates />
    </div>
  );
}

export default App;
