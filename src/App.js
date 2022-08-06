import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from './components/User/User';
import Adduser from './components/Adduser/Adduser';
import Header from './components/Header/Header';
import Updateuser from './components/Updateuser/Updateuser';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header></Header>
     <Routes>
        <Route path="/" element={<User />} />
        <Route path="/users" element={<User />} />
        <Route path="/users/add" element={<Adduser />} />
        <Route path="/users/update/:id" element={<Updateuser />} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
