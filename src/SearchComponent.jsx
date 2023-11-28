import React, { useState } from 'react';
import TextBox from './TextBox';

function SearchComponent({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchResult, setSearchResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null); // Add error message state

  const handleSearch = async (word) => {
    if (!word.trim()) {
      setErrorMessage('Please enter a word');
      return;
    }

    setErrorMessage(null); // Reset error message
    setIsLoading(true);

    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      const data = await response.json();
      setSearchResult(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setSearchResult(null);
    }

    setIsLoading(false);
  };

  return (
    <div>
      <h1>Dictionary</h1>
      <h2>Find your word</h2>
      <input
        type="text"
        placeholder="Enter a word..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ height: '35px', width:"250px", color: 'beige', marginBottom: '20px', marginTop: '10px', border: "3px solid beige" }}
      />
      <br />
      <button style={{ marginBottom: '30px' }} onClick={() => handleSearch(searchTerm)}>
        Search
      </button>
      <br />
      {/* Display error message if it exists */}
      {errorMessage && <p style={{ color: 'beige' }}>{errorMessage}</p>}

      {/* Pass searchResult to TextBox */}
      <TextBox searchResult={searchResult} />
    </div>
  );
}

export default SearchComponent;
