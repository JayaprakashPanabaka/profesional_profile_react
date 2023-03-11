//import logo from './logo.svg';
//import './App.css';
import Navbar from './components/Navbar';
import Card1 from './components/Card1';
import Card2 from './components/Card2';

function App() {
  return (
    <div className='bg-container'>
      <Navbar/>
      <Card1/>
      <hr/>
      <Card2 skills= "UI DESIGN"/>
    </div>
  );
}

export default App;


