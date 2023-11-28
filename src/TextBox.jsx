import React from 'react';

function TextBox({ searchResult }) {
  if (!searchResult) {
    return null; // You might want to render a loading indicator or default message
  }
  console.log(searchResult);

  return (
    
    <div style={{ backgroundColor: "#043606" }}>
      <h2>Word: {searchResult[0].word}</h2>     

      {/* <h3>Phonetics:</h3> */}
      {searchResult[0].phonetics.map((phonetic, index) => (
      <div key={index}>
        {phonetic.text}{' '}
        <br />
        {phonetic.audio && (
      <audio controls>
         <br />
        <source src={phonetic.audio} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      )}
      </div>
  ))}

      {/* <h3>Meanings:</h3> */}
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
          {meaning.synonyms && meaning.synonyms.length > 0 ? (
            <div>
              {meaning.synonyms.map((synonym, idx) => (
                <div key={idx}>{synonym}</div>
              ))}
            </div>
          ) : (
            <p>No synonyms found.</p>
          )}
        </div>
      ))}

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

</div>
)}

export default TextBox;
