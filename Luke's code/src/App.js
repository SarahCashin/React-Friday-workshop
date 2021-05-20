import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import NavBar from './Components/NavBar';
import randomcolour from 'randomcolor';

export const pageType = {
  Home: 1,
  About: 2
}

function App() {

  const [counter, setCounter] = useState(0);
  const [currentPage, setCurrentPage] = useState(pageType.Home);
  const [colorString, setColorString] = useState('#ffffff');

  useEffect(() => {
    setColorString(randomcolour());
  }, [counter])

  const changePage = (event) => {
    setCurrentPage(Number(event.target.value));
  }

  const renderPage = () => {
    switch (currentPage) {
      case pageType.Home: return <p>This is my Home page</p>
      case pageType.About: return <p>This is my About page</p>
      default: return <p>This is my Home page</p>
    };
  }

  return (
    <div className="App">
      <header style={{ backgroundColor: colorString }} className="App-header">
        <NavBar changePage={(e) => changePage(e)} />
        <p>---------------------------</p>
        {renderPage()}
        <p>---------------------------</p>
        <button onClick={() => setCounter(counter + 1)}>plus</button>
        <h1>{counter}</h1>
        <button onClick={() => setCounter(counter - 1)}>minus</button>
      </header>
    </div>
  );
}

export default App;
