import './App.css';
import User from './components/users/User';
import Navbar from './components/layout/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import UserItem from './components/users/UserItem';
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="container mt-4">
       <Routes>
        <Route exact path='/users' element={<User/>} />
        <Route exact path='/users/:login' element={<UserItem/>} />
        <Route exact path='/' element={<User/>} />
       </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
