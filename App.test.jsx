// Import necessary libraries and components
import { render, screen, waitFor } from "@testing-library/react";
import { userEvent } from '@testing-library/user-event';
import { expect } from "vitest";
import SearchComponent from './src/SearchComponent';


describe('Searchfield in SearchComponent', () => {
test("renders input field", () => {
  render(<SearchComponent />);
  const inputElement = screen.getByPlaceholderText("Enter a word...");
  expect(inputElement).toBeInTheDocument();
});
});

describe('Input in Searchfield', () => {
test("valid input is processed by the search field", async () => {
  render(<SearchComponent errorMessageElement={""} />);
  
  const user = userEvent.setup();
  const searchField = screen.getByRole("textbox")
  await user.type(searchField, "hello");
  await waitFor(() => expect(searchField).toHaveValue("hello"));
  const searchButton = screen.getByRole("button", { name: "Search" });
  await user.click(searchButton);

});

});


// test("fetches data when the button is clicked", async () => {
//   render(<SearchComponent />);
//   const searchField = screen.getByPlaceholderText("Enter a word...");
//   const searchButton = screen.getByRole("button", { name: "Search" });

//   fireEvent.change(searchField, { target: { value: "test" } });
//   fireEvent.click(searchButton);

//   // Wait for the data to be rendered
//   await waitFor(() => {
//     const wordElement = screen.getByText("test", { exact: false });
//     expect(wordElement).toBeInTheDocument();
//   });
// });



describe('Audio in TextBox', () => {
test("should render an audio file if available", () => {
  render(<SearchComponent searchResult={{ phonetics: [{ text: "example", audio: "example.mp3" }] }} />);
  const user = userEvent.setup();

  const searchField = screen.getByRole("textbox")
  const searchButton = screen.getByRole("button", { name: "Search" });

  user.type(searchField, "book");
  user.click(searchButton);

  // Add assertions for the audio element
  const audioElement = screen.queryByRole("button");
  expect(audioElement).toBeInTheDocument();
});
});


describe('Errormessage in SearchComponent', () => {
test("should show an error message when searchfield is invalid or empty", async () => {
  // Render the SearchComponent
  render(<SearchComponent />);
  
  // Performs the user interaction (click the search button)
  const user = userEvent.setup();
  const searchButton = screen.getByRole("button", { name: "Search" });
  await user.click(searchButton);

  // Use a matcher function to find the error message inside the <p>
  const errorMessageElement = screen.getByText((content, element) => {
    return element.tagName.toLowerCase() === 'p' && content.toLowerCase().includes('please enter a word');
  });
  // Verify that the error message element is in the document
  expect(errorMessageElement).toBeInTheDocument();
  });

});
