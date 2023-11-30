import React, { useState } from 'react';
import TextBox from './TextBox';

function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchResult, setSearchResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  //Allows the user to hit the enter key to search
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(searchTerm);
    }
  };

// Check if the input is empty and if so, display an error 
  const handleSearch = async (word) => {
    if (!word.trim()) {
      setErrorMessage('Please enter a word');
      return;
    }
    setErrorMessage(null);
    setIsLoading(true);

  // Fetch data from the API based on the entered word
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
      {/* Input field for the user to enter a word */}
      <input
        type="text"
        placeholder="Enter a word..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
        style={{ height: '35px', width: "250px", color: 'beige', marginBottom: '20px', marginTop: '10px', border: "3px solid beige" }}
      />
      <br />
      {/* Button to trigger the search function */}
      <button style={{ marginBottom: '30px', backgroundColor: "beige", color: "#043606" }} onClick={() => handleSearch(searchTerm)}>
        Search
      </button>
      <br />
      {/* Display error message if it exists */}
      {errorMessage && <p style={{ color: 'beige' }}>{errorMessage}</p>}

      <TextBox searchResult={searchResult} searchTerm={searchTerm} />
    </div>
  );
}

export default SearchComponent;
