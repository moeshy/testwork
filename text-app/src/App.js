
import './App.css';
import React from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {
  return (
    <main>
    <Header />
    <div className="content">
     <p>This is the content</p>
    </div>
    <Footer />
    </main>
  );
}

export default App;
