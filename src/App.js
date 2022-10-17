import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <div className="content">
        <Home />
      </div>
      <Footer />
    </div>
  );
};

export default App;
