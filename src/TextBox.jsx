import { FaRegCirclePlay } from "react-icons/fa6";

function TextBox({ searchResult }) {
  const playAudio = (audioUrl) => {
    const audioElement = new Audio(audioUrl);
    audioElement.play();
  };

  if (!searchResult) {
    return null; // You might want to render a loading indicator or default message
  }
  console.log(searchResult);

  return (
    
    <div style={{ backgroundColor: "#043606" }}>
      <h2>Word: {searchResult[0].word}</h2>     

      {/* Phonetics */}
      <h3>Phonetics:</h3>
      {searchResult[0].phonetics.map((phonetic, index) => (
        <div key={index}>
          {phonetic.text} <br />
          {phonetic.audio && (
            <div onClick = {() => playAudio(phonetic.audio)}>
              <FaRegCirclePlay style={{ fontSize: '48px', cursor: "pointer" }} />
            </div>
          )}
          {phonetic.sourceUrl && (
            <p>
              Source URL: <a href={phonetic.sourceUrl} target="_blank" rel="noopener noreferrer">{phonetic.sourceUrl}</a>
            </p>
          )}
          {phonetic.license && (
            <div>
              <p>License Name: {phonetic.license.name}</p>
              <p>License URL: <a href={phonetic.license.url} target="_blank" rel="noopener noreferrer">{phonetic.license.url}</a></p>
            </div>
          )}
        </div>
      ))}


      {/*Meanings*/}
      <h3>Meanings:</h3>
      {searchResult[0].meanings.map((meaning, index) => (
        <div key={index}>
          <h4>{meaning.partOfSpeech}</h4>
          <div>
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

      {/* Synonyms */}
      <h3>Synonyms:</h3>
      {searchResult[0].meanings.map((meaning, index) => (
        <div key={index}>
          {meaning.synonyms && meaning.synonyms.length > 0 && (
            <div>
              {meaning.synonyms.map((synonym, idx) => (
                <div key={idx}>{synonym}</div>
              ))}
            </div>
          )}
        </div>
      ))}
      {searchResult[0].meanings.every((meaning) => !meaning.synonyms || meaning.synonyms.length === 0) && (
        <p>No synonyms found.</p>
      )}

      {/* Antonyms */}
      <h3>Antonyms:</h3>
      {searchResult[0].meanings.map((meaning, index) => (
        <div key={index}>
          {meaning.antonyms && meaning.antonyms.length > 0 && (
            <div>
              {meaning.antonyms.map((antonym, idx) => (
                <div key={idx}>{antonym}</div>
              ))}
            </div>
          )}
        </div>
      ))}
      {searchResult[0].meanings.every((meaning) => !meaning.antonyms || meaning.antonyms.length === 0) && (
        <p>No antonyms found.</p>
      )}

      {/* License */}
      <h3>License:</h3>
      {searchResult[0].license && (
        <div>
          <p>License Name: {searchResult[0].license.name}</p>
          <p>License URL: <a href={searchResult[0].license.url} target="_blank" rel="noopener noreferrer">{searchResult[0].license.url}</a></p>
        </div>
      )}

      {/* Source URLs */}
      <h3>Source URLs:</h3>
      {searchResult[0].sourceUrls && searchResult[0].sourceUrls.length > 0 && (
        <div>
          {searchResult[0].sourceUrls.map((url, index) => (
            <div key={index}><a href={url} target="_blank" rel="noopener noreferrer">{url}</a></div>
          ))}
        </div>
      )}

</div>
)}

export default TextBox;
