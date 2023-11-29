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
      setSearchResult(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setSearchResult(null);
    }
    setIsLoading(false);
  };

  return (
    <>
      <SearchComponent />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <TextBox searchResult={searchResult} />
      )}
    </>
  );
}

export default App;
