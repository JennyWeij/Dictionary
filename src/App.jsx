import { useState } from 'react';
import './App.css';
import SearchComponent from './SearchComponent';
import TextBox from './TextBox';

function App() {
  const [searchResult, setSearchResult] = useState(null);   
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (word) => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      const data = await response.json();
      // Assuming the API returns an array of definitions
      setSearchResult(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error, e.g., display an error message to the user
      setSearchResult(null);
    }
    setIsLoading(false);
  };

  return (
    <>
      <SearchComponent onSearch={handleSearch} />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <TextBox searchResult={searchResult} />
      )}
    </>
    );
  }
export default App
