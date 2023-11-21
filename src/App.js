import './App.css';
import CreateRecipe from './Components/CreateRecipe';
import Home from './Components/Home';
import Login from './Components/Login';
import NavGation from './Components/Nav';
import Register from './Components/Register';
import {Route,Routes } from 'react-router-dom'
import SaveRecipe from './Components/SaveRecipe';
import Details from './Components/Details';

function App() {
  return (
    <div className="App">
      <NavGation />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/create' element={<CreateRecipe/>}/>
        <Route path='/saved' element={<SaveRecipe/>}/>
        <Route path='/recipe/:id' element={<Details/>}/>
      </Routes>
    </div>
  );
}

export default App;
