import React from "react";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";

import "./App.scss";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      {/* Pages */}
      <Home />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
