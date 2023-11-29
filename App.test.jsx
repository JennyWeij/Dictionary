// Import necessary libraries and components
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { expect } from "vitest";
import SearchComponent from './src/SearchComponent';

test("should show an error message when searchfield is invalid or empty", async () => {
  // Render the SearchComponent
  render(<SearchComponent />);
  
  // Perform user interaction (click the search button)
  const user = userEvent.setup();
  const searchButton = screen.getByRole("button", { name: "Search" });
  await user.click(searchButton);

  // Use a custom matcher function to find the error message
  const errorMessageElement = screen.getByText((content, element) => {
    return element.tagName.toLowerCase() === 'p' && content.toLowerCase().includes('please enter a word');
  });

  // Assert that the error message element is in the document
  expect(errorMessageElement).toBeInTheDocument();
});
