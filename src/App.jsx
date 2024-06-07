import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Privacy from "./Pages/Privacy";
import Terms from "./Pages/Terms";

import About from "./Pages/About";

import ContactUs from "./Pages/ContactUs";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        
          <Route path="/contact-us" element={<ContactUs />} />
   

      
   

      

          <Route path="/privacy-policy" element={<Privacy />} />
        
 

          <Route path="/terms-conditions" element={<Terms />} />
     
        </Routes>
      </Router>
    </>
  );
}

export default App;
