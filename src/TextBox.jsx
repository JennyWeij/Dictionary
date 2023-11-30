import { FaRegCirclePlay } from "react-icons/fa6";

// Function to play audio based on the audio URL
function TextBox({ searchResult }) {
  const playAudio = (audioUrl) => {
    const audioElement = new Audio(audioUrl);
    audioElement.play();
  };

  // If no search result is available, return null (nothing to display)
  if (!searchResult) {
    return null;
  }

  return (
    // Container for displaying search result information
    <div style={{ backgroundColor: "#043606" }}>
      {/* Display the word */}
      <h2>{searchResult[0].word}</h2>

      {/* Phonetics Section */}
      <h3>Phonetics:</h3>
      {searchResult[0].phonetics.map((phonetic, index) => (
        <div key={index}>
          {phonetic.text} <br />
          {/* Play audio button if audio URL is available */}
          {phonetic.audio && (
            <button style={{ backgroundColor:"#043606", color: "beige", transition:"none", border: "none" }} onClick={() => playAudio(phonetic.audio)}>
              <FaRegCirclePlay style={{ fontSize: '48px', cursor: "pointer", transition:"none" }} />
            </button>
          )}
          {/* Display source URL if available */}
          {phonetic.sourceUrl && (
            <p>
              Source URL: <a href={phonetic.sourceUrl} target="_blank" rel="noopener noreferrer">{phonetic.sourceUrl}</a>
            </p>
          )}
          {/* Display license information if available */}
          {phonetic.license && (
            <div>
              <p>License Name: {phonetic.license.name}</p>
              <p>License URL: <a href={phonetic.license.url} target="_blank" rel="noopener noreferrer">{phonetic.license.url}</a></p>
            </div>
          )}
        </div>
      ))}

      {/* Meanings Section */}
      <h3>Meanings:</h3>
      {searchResult[0].meanings.map((meaning, index) => (
        <div key={index}>
          <h4>{meaning.partOfSpeech}</h4>
          <div>
            {/* Display definitions and examples */}
            {meaning.definitions.map((definition, idx) => (
              <div key={idx}>
                {definition.definition}
                {definition.example && (
                  <p>Example: {definition.example}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Synonyms Section */}
      <h3>Synonyms:</h3>
      {searchResult[0].meanings.map((meaning, index) => (
        <div key={index}>
          {/* Display synonyms if available */}
          {meaning.synonyms && meaning.synonyms.length > 0 && (
            <div>
              {meaning.synonyms.map((synonym, idx) => (
                <div key={idx}>{synonym}</div>
              ))}
            </div>
          )}
        </div>
      ))}
      {/* Display a message if no synonyms are found */}
      {searchResult[0].meanings.every((meaning) => !meaning.synonyms || meaning.synonyms.length === 0) && (
        <p>No synonyms found.</p>
      )}

      {/* Antonyms Section */}
      <h3>Antonyms:</h3>
      {searchResult[0].meanings.map((meaning, index) => (
        <div key={index}>
          {/* Display antonyms if available */}
          {meaning.antonyms && meaning.antonyms.length > 0 && (
            <div>
              {meaning.antonyms.map((antonym, idx) => (
                <div key={idx}>{antonym}</div>
              ))}
            </div>
          )}
        </div>
      ))}
      {/* Display a message if no antonyms are found */}
      {searchResult[0].meanings.every((meaning) => !meaning.antonyms || meaning.antonyms.length === 0) && (
        <p>No antonyms found.</p>
      )}

      {/* License Section */}
      <h3>License:</h3>
      {searchResult[0].license && (
        <div>
          {/* Display license information if available */}
          <p>License Name: {searchResult[0].license.name}</p>
          <p>License URL: <a href={searchResult[0].license.url} target="_blank" rel="noopener noreferrer">{searchResult[0].license.url}</a></p>
        </div>
      )}

      {/* Source URLs Section */}
      <h3>Source URLs:</h3>
      {searchResult[0].sourceUrls && searchResult[0].sourceUrls.length > 0 && (
        <div>
          {/* Display source URLs if available */}
          {searchResult[0].sourceUrls.map((url, index) => (
            <div key={index}><a href={url} target="_blank" rel="noopener noreferrer">{url}</a></div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TextBox;
