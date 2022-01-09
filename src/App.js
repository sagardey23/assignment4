import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Students from './Components/Students';
import ContactUs from './Components/ContactUs'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
          <Route path="" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/students" element={<Students/>}/>
          <Route path="/contactus" element={<ContactUs/>}/>
      </Routes>
    </Router>
  )
}

export default App


