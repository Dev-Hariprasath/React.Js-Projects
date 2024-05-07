import React, { useState } from 'react';

const MultipleStatesExample = () => {
  // Define multiple states using useState()
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Event handler to update count state
  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Event handler to update name state
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  // Event handler to toggle isLoggedIn state
  const toggleLoginStatus = () => {
    setIsLoggedIn(prevLoggedIn => !prevLoggedIn);
  };

  return (
    <div>
      <h2>Multiple States Example</h2>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment Count</button>

      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Enter your name"
      />
      <p>Hello, {name || 'Stranger'}!</p>

      <button onClick={toggleLoginStatus}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
      <p>User is {isLoggedIn ? 'logged in' : 'logged out'}.</p>
    </div>
  );
};

export default MultipleStatesExample;
