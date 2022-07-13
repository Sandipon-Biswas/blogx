
import './App.css';
import Header from './components/smallFile/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from './components/pages/Home';
import SinglePost from './components/clint/blog/SinglePost';
import Login from './components/pages/Login';
import Dashboard from './components/dashboard/Dashboard';
function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/singlepost/:id" element={<SinglePost></SinglePost>} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
