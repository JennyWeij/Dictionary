// import { useEffect, useState } from 'react';
// import './App.css';
// import SearchComponent from './SearchComponent';

// const ApiComponent = ({ searchQuery }) => {
//   const [data, setData] = useState(null);   
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const encodedQuery = encodeURIComponent(searchQuery);
//         const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodedQuery}`);
//         const result = await response.json();
//         setData(result);
//       } catch (error) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []); // Empty dependency array ensures the effect runs once on mount

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error.message}</p>;
//   }

//   // Check if the API response indicates no definitions found
//   if (data && data.title === "No Definitions Found") {
//     return <p>No definitions found for the word.</p>;
//   }

//   // Assuming the API response is an array with a single object
//   const dictionaryEntry = data[0];

//   return (
//     <>
//     <SearchComponent onSearch={handleSearch} />
//     <div>
//       <h2>Word: {dictionaryEntry.word}</h2>

//       <h3>Phonetics:</h3>
//       <ul>
//         {dictionaryEntry.phonetics.map((phonetic, index) => (
//           <li key={index}>
//             {phonetic.text && <span>{phonetic.text}</span>}
//             {phonetic.audio && (
//               <audio controls>
//                 <source src={phonetic.audio} type="audio/mpeg" />
//                 Your browser does not support the audio tag.
//               </audio>
//             )}
//           </li>
//         ))}
//       </ul>

//       <h3>Meanings:</h3>
//       <ul>
//         {dictionaryEntry.meanings.map((meaning, index) => (
//           <li key={index}>
//             <h4>Part of Speech: {meaning.partOfSpeech}</h4>
//             <ul>
//               {meaning.definitions.map((definition, index) => (
//                 <li key={index}>
//                   <p>Definition: {definition.definition}</p>
//                   {definition.synonyms.length > 0 && (
//                     <p>Synonyms: {definition.synonyms.join(', ')}</p>
//                   )}
//                   {definition.antonyms.length > 0 && (
//                     <p>Antonyms: {definition.antonyms.join(', ')}</p>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </li>
//         ))}
//       </ul>

//       <h3>Source URL:</h3>
//       <ul>
//         {dictionaryEntry.sourceUrls.map((url, index) => (
//           <li key={index}>
//             <a href={url} target="_blank" rel="noopener noreferrer">
//               {url}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div></>
// );
// };

// export default ApiComponent
