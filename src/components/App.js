import "../styles/App.css";
import Header from "./Header";
import Footer from "./Footer";
import Home from "../pages/Home";
import Error from "../pages/Error";
import About from "../pages/About";
import Detail from "../pages/Detail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {

  const [lodgeList, setLodgeList] = useState([])

  useEffect(()=>{

    fetch('http://localhost:3000/logements.json')
    .then( response => response.json())
    .then( data => setLodgeList(data))
    .catch( err => console.log(err))

  },[])


  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home lodgeList = {lodgeList} />} />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:id" element={<Detail  />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
