
/*import React, { useState } from 'react';
import './App.css';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleAddClick = () => {
    // Handle add button click event
    console.log('Add button clicked!');
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">BookStack</div>
      <div className="navbar-search">
        <input
          type="text"
          placeholder="Search for a book"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button onClick={handleAddClick}>Add</button>
      </div>
    </nav>
  );
};

export default Navbar; */

/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; */


//import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleAddClick = () => {
    // Handle add button click event
    console.log('Add button clicked!');
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">BookStack</div>
      <div className="navbar-search">
        <input
          type="text"
          placeholder="Search for a book"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button onClick={handleAddClick}>Add a new book</button>
      </div>
    </nav>
  );
}

export default App; 
