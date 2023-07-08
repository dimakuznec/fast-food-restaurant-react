import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Download from "./components/download/Download";
import Home from "./Home";
import OurOffer from "./OurOffer";
import Pages from "./Pages";
import Pricing from "./Pricing";
import Shop from "./Shop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
     <Router>
        <Header />

        <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/OurOffer" element={<OurOffer />} />
            <Route path="/Pages" element={<Pages />} />
            <Route path="/Pricing" element={<Pricing />} />
            <Route path="/Shop" element={<Shop />} />
        </Routes>

        <Download />
        <Footer />
     </Router>
    </div>
  );
}

export default App;
