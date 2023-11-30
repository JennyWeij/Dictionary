import { useState } from 'react';
import './App.css';
import SearchComponent from './SearchComponent';
import TextBox from './TextBox';

// Function to handle the search logic when user initiates a search
function App() {
  const [searchResult, setSearchResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (word) => {
    setIsLoading(true);
    try {
      // Fetch data from the dictionary API based on the entered search word
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      const data = await response.json();
      // Store the search result in state
      setSearchResult(data);
    } catch (error) {
      // Handle errors during the API request
      console.error('Error fetching data:', error);
      setSearchResult(null);
    }
    // Set loading state back to false after the API request is complete
    setIsLoading(false);
  };

  return (
    <>
      {/* Render the SearchComponent, passing the handleSearch function */}
      <SearchComponent handleSearch={handleSearch} />
      {/* Display loading message or render TextBox component based on loading state */}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <TextBox searchResult={searchResult} />
      )}
    </>
  );
}

export default App;
