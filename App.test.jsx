// Import necessary libraries and components
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { expect } from "vitest";
import SearchComponent from './src/SearchComponent';

describe('Searchfield in SearchComponent', () => {
test("inputfield should proparly handle valid input in the search field", async () => {
  render(<SearchComponent errorMessageElement={""} />);
  
  const user = userEvent.setup();
  const searchField = screen.getByRole("textbox")
  await user.type(searchField, "hello");
  await waitFor(() => expect(searchField).toHaveValue("hello"));
  const searchButton = screen.getByRole("button", { name: "Search" });
  await user.click(searchButton);

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
