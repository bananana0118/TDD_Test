import { render, screen, fireEvent } from '@testing-library/react';
import { logRoles } from '@testing-library/react';
import App from './App';

test('button color initial, and update color and text', () => {
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


test("initial conditions", () => {
  render(<App />)

  //initial
  const colorButton = screen.getByRole("button", { name: "Change to blue" })
  expect(colorButton).toBeEnabled()

  //initial
  const checkBox = screen.getByRole("checkbox")
  expect(checkBox).not.toBeChecked();

})

test("선택후 비활성화 및 재선택 후 다시활성화", () => {
  render(<App />)
  //initial
  const colorButton = screen.getByRole("button", { name: "Change to blue" })
  //initial
  const checkBox = screen.getByRole("checkbox")

  //버튼이 체크되면
  fireEvent.click(checkBox)

  //버튼이 비활성화 되도록
  expect(colorButton).toBeDisabled();

  //버튼이 체크되면
  fireEvent.click(checkBox)

  //버튼이 활성화 되도록
  expect(colorButton).toBeEnabled();

})