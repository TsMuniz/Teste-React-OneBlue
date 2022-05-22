import {
  Route,
  Routes,
} from 'react-router-dom';

import Home from './pages/home/Home';
import Register from './pages/register/Register';
import Login from './pages/login/Login';

function App() {
  return (
   <section>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cadastro" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
   </section>
  );
}

export default App;
