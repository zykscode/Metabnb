import "./App.css";
import "./general.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Meta from "./Layouts/Meta";
import Place from "./Layouts/Place";
import Connect from "./components/Connect";

function App() {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <>
      <Routes location={background || location}>
        <Route path='/' element={<Meta />} />
        <Route path='/place-to-stay' element={<Place />} />
      </Routes>
      {background && (
        <Routes>
          <Route path='/connect' element={<Connect />} />
        </Routes>
      )}
  </>
  );
}

export default App;
