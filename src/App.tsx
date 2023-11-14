import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Routes from "./components/Routes";

const App = () => {
  return (
    <div className="dark">
      <div className="bg-gray-900 text-gray-200 min-h-screen">
        <Navbar />
        <Routes />
        <Footer />
      </div>
    </div>
  );
};

export default App;
