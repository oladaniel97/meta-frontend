
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Homepage from './home';
import About from './about';
import Menu from './menu';
import Reservations from './reservation';
import Order from './order';
import Login from './login';
import BookingPage from './bookingpage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/reservation' element={<Reservations/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/bookingpage' element={<BookingPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
