import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ContactMe from "./components/Contactme"
import Aboutme from "./components/Aboutme";
import Skills from "./components/Skills";
import Blogs from "./components/Blogs";
import Blogs1 from "./components/Blogs1"
import Blogs2 from "./components/Blogs2"

import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Aboutme />
      <Skills />
      <Blogs />
      <Blogs1 />
      <Blogs2 />
      <br/><br/><br/><br/>
      <ContactMe/>
      <Footer/>
    </div>



  );
}

export default App;
