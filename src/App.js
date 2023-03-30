import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Users/Home';
// import MainPage from './components/Users/MainPage';
import SideBar from './components/UI/SideBar';
import Shop from './components/Users/Shop';
import Info from './components/Users/Info';
// import LogIn from './components/Users/SignUp';
import './App.css';

function App() {
	return <Routes>
		<Route path="/" element={<Home />}/>
		<Route path="/users" element={<SideBar />}/>
		<Route path="/shop" element={<Shop />}/>
		<Route path="/info" element={<Info />}/>

	</Routes>
}

export default App;
