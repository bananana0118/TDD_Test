import { render, screen, fireEvent } from '@testing-library/react';
import { logRoles } from '@testing-library/react';
import App from './App';

test('button color initial', () => {
  const { container } = render(<App></App>)
  //find an element with a role of button and text "Change to blue"
  logRoles(container)
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toHaveStyle({ "background-color": "red" })

  //click button
  fireEvent.click(colorButton);
  //expect the background color to be blue
  expect(colorButton).toHaveStyle({ "background-color": "blue" })

  expect(colorButton).toHaveTextContent("Change to red")

});



