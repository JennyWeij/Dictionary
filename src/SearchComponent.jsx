import React, { useState } from 'react';

const SearchComponent = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(null);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchQuery}`);
      const data = await response.json();

      // Assuming the API returns an array of definitions
      setSearchResults(data);
      onSearch(data); // You can pass the data to the parent component if needed
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error, e.g., display an error message to the user
    }
  };

  return (
    <div>
      <h1>Dictionary</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>

      {searchResults && (
        <div>
          <h2>Search Results</h2>
          <h2>Word: {dictionaryEntry.word}</h2>

          <h3>Phonetics:</h3>
          <ul>
            {dictionaryEntry.phonetics.map((phonetic, index) => (
              <li key={index}>
                {phonetic.text && <span>{phonetic.text}</span>}
                {phonetic.audio && (
                  <audio controls>
                    <source src={phonetic.audio} type="audio/mpeg" />
                    Your browser does not support the audio tag.
                  </audio>
                )}
              </li>
            ))}
          </ul>
{/* 
          <h3>Meanings:</h3>
            <ul>
              {dictionaryEntry.meanings.map((meaning, index) => (
                <li key={index}>
                  <h4>Part of Speech: {meaning.partOfSpeech}</h4>
                  <ul>
                    {meaning.definitions.map((definition, index) => (
                      <li key={index}>
                        <p>Definition: {definition.definition}</p>
                        {definition.synonyms.length > 0 && (
                          <p>Synonyms: {definition.synonyms.join(', ')}</p>
                        )}
                        {definition.antonyms.length > 0 && (
                          <p>Antonyms: {definition.antonyms.join(', ')}</p>
                        )}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul> */}

          {/* Display the search results as needed */}
          {/* Customize this based on the actual structure of the API response */}
          <pre>{JSON.stringify(searchResults, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
