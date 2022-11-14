import './App.css';
import './general.css'
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from "react-router-dom"
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
    <div className="App py-2 px-2 ">
        <Header/>

      

    <Footer/>
    </div>
    </Router>
  );
}

export default App;
