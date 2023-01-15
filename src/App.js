import './App.css';
import Home from './screens/Home';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from './screens/Login';
import Footer from './components/Footer';
import Signup from './screens/Signup';
// import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/signup' element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
