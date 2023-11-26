import "./App.css";
import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ParentComponent from "./Components/ParentComponent";
import InputComponent from "./Components/InputState";
import CounterComponent from "./Components/Counter";

//Some people will set a lot of state at app level and pass it down to the children components
//This is called prop drilling and it is not a good practice to do it from such a high level

function App() {
  return (
    <main>
      <Header />
      <div className="content"> 
        <ParentComponent />
        <InputComponent />
        <CounterComponent />
      </div>
      <Footer />
    </main>
  );
}

export default App;
