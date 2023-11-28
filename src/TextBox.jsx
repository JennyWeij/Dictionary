import React from 'react';

function TextBox({ searchResult }) {
  if (!searchResult) {
    return null; // You might want to render a loading indicator or default message
  }
  console.log(searchResult);

  return (
    <div style={{ backgroundColor: "#043606" }}>
      <h2>Word: {searchResult[0].word}</h2>     

      <h3>Phonetics:</h3>
      <ul>
        {searchResult[0].phonetics.map((phonetic, index) => (
          <li key={index}>
            {phonetic.text}{' '}
            {phonetic.audio && (
              <audio controls>
                <source src={phonetic.audio} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            )}
          </li>
        ))}
      </ul> 

      <h3>Meanings:</h3>
      {searchResult[0].meanings.map((meaning, index) => (
        <div key={index}>
          <h4>{meaning.partOfSpeech}</h4>
          <ul>
            {meaning.definitions.map((definition, idx) => (
              <li key={idx}>
                {definition.definition}
                {definition.example && (
                  <p>Example: {definition.example}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default TextBox;
