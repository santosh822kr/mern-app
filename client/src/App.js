import Home from './pages/home/Home';
import Topbar from './components/topbar/Topbar';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { useContext } from 'react';
import { Context } from './context/Context';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

function App() {
  const { user } = useContext(Context);

  const LoginRoute = () => {
    return user ? <Navigate to='/' /> : <Login />;
  };
  const RegisterRoute = () => {
    return user ? <Navigate to='/' /> : <Register />;
  };
  const WriteRoute = () => {
    return user ? <Write /> : <Register />;
  };
  const SettingsRoute = () => {
    return user ? <Settings /> : <Register />;
  };

  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<RegisterRoute />} />
        <Route path='/login' element={<LoginRoute />} />
        <Route path='/write' element={<WriteRoute />} />
        <Route path='/settings' element={<SettingsRoute />} />
        <Route path='/post/:id' element={<Single />} />
        <Route path='/posts' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
