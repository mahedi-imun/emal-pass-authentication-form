import './App.css';
import SignUpForm from './components/Form/SignUp/SignUpForm';
import LoginFrom from './components/Form/Login/LoginFrom';
import { Navigate, Route, Routes, } from 'react-router-dom';
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<LoginFrom/>}></Route>
        <Route path='/' element={<LoginFrom/>}></Route>
        <Route path='/register' element={<SignUpForm></SignUpForm>}></Route>
      </Routes>
    </div>
  );
}

export default App;
