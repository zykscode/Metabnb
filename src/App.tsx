import './App.css';
import './general.css'
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from "react-router-dom"
import Header from './components/Header';
import Footer from './components/Footer';
import Meta from './Layouts/Meta';
import Place from './Layouts/Place';

function App() {
  return (
    <Router>
    <div className="App py-2 md:px-4 px-2 lg:px-[100px] ">
        <Header/>

      
<Routes>
  <Route path='/' element={<Meta/>} />
  <Route path='/place-to-stay' element={<Place/>} />
</Routes>
    <Footer/>
    </div>
    </Router>
  );
}

export default App;
