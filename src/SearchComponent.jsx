import React, { useState } from 'react';
import TextBox from './TextBox';

function SearchComponent ({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchResult, setSearchResult] = useState(null); 

  const handleSearch = async (word) => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
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
        placeholder="Enter word..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ height: '35px', color: "beige", marginBottom:"20px" }}
      />
      <br/>
      <button onClick={() => handleSearch(searchTerm)}>
        Search
      </button>
  
           {/* Pass searchResult to TextBox */}
           <TextBox searchResult={searchResult} />
    </div>

  );
}

export default SearchComponent