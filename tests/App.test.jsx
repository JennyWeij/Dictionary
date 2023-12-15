import { render, screen, waitFor } from "@testing-library/react";
import { userEvent } from '@testing-library/user-event';
import { expect } from "vitest";
import App from "../src/App";
import SearchComponent from '../src/SearchComponent';

// Test if input field is rendering
describe('Searchfield in SearchComponent', () => {
  test("renders input field", () => {
    render(<SearchComponent />);
    const inputElement = screen.getByPlaceholderText("Enter a word...");
    expect(inputElement).toBeInTheDocument();
  });
});

// Test for inputfield
describe('Input in Searchfield', () => {
  test("valid input is processed by the search field", async () => {
    render(<SearchComponent errorMessageElement={""} />);
    // Set up the user event
    const user = userEvent.setup();
    // Find the search field
    const searchField = screen.getByRole("textbox");
    // Type "hello" into the search field
    await user.type(searchField, "hello");
    // Wait for the value in the search field to be updated
    await waitFor(() => expect(searchField).toHaveValue("hello"));
    // Find the search button
    const searchButton = screen.getByRole("button", { name: "Search" });
    // Click the search button
    await user.click(searchButton);
  });
});

// Test for fetching and rendering data from the API when the button is clicked in App
describe('Button in SearchComponent', () => {
  test("fetches and renders data from the API when the button is clicked", async () => {
    render(<App />);
    const user = userEvent.setup();
    const searchField = screen.getByPlaceholderText("Enter a word...");
    const searchButton = screen.getByRole("button", { name: "Search" });
    
    await user.type(searchField, "hello");
    await user.click(searchButton);

    // Wait for the data to be rendered
    await waitFor(() => {
      // Find the word element in the rendered content
      const wordElement = screen.getByText("hello");
      // Verify that the word element is in the document
      expect(wordElement).toBeInTheDocument();
    });
  });
});

// Test for rendering an audio file if available in TextBox
describe('Audio in TextBox', () => {
  test("should render an audio file if available", () => {
    // Render the SearchComponent with a search result containing an audio file
    render(<SearchComponent searchResult={{ phonetics: [{ text: "example", audio: "example.mp3" }] }} />);
    const user = userEvent.setup();
    const searchField = screen.getByRole("textbox");
    const searchButton = screen.getByRole("button", { name: "Search" });
    user.type(searchField, "book");
    user.click(searchButton);

    // Find the audio element in the rendered content
    const audioElement = screen.queryByRole("button");
    // Verify that the audio element is in the document
    expect(audioElement).toBeInTheDocument();
  });
});

// Test for showing an error message when the search field is invalid in SearchComponent
describe('Errormessage in SearchComponent', () => {
  test("should show an error message when searchfield is invalid or empty", async () => {
    render(<SearchComponent />);
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

// Test for showing an error message when the search field is empty in SearchComponent


