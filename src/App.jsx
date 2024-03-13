import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRandomQuote } from './slice/QouteSlice'; // Corrected import path
import './App.css';

function App() {
  const dispatch = useDispatch();
  const quote = useSelector((state) => state.quotes.quote.content);
  const status = useSelector((state) => state.quotes.status); // Corrected the selector path
  const state = useSelector((state) => state);

  // Corrected the selector path

  const handleClick = () => {
    dispatch(fetchRandomQuote());
    console.log(quote);
  };

  useEffect(() => {
    dispatch(fetchRandomQuote());
  }, [dispatch]);

  return (
    <>
      <div>
        {quote && status === 'succeeded' && (
          <div style={{ color: 'black' }}>{quote}</div>
        )}
      </div>

      <button onClick={handleClick}>click here</button>
    </>
  );
}

export default App;
