import Home from './components/Home/home'
import Addblog from './components/addBlog/addblog'
import Dashboard from './components/dashboard/dashboard'
import Blog from './components/dashboard/blog'
import Signup from './components/signup/signup'
import Signin from './components/signin/signin'
import Profile from './components/Home/profile'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App" style={{backgroundColor: '#000',minHeight : '100vh'}}>
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
        <Route path="/add" element={<Addblog />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/viewprofile' element={<Profile />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
