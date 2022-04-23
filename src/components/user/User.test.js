import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Users from "./index";

describe("Users Test", () => {
  let button, input;

  beforeEach(() => {
    render(<Users />);

    button = screen.getByText("Add");
    input = screen.getByTestId("input");
  });

  test("In document button and input", () => {
    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  test("Default users count", () => {
    const users = screen.getAllByText(/User/i);

    expect(users.length).toEqual(3);
  });

  test("User add", () => {
    const user = "Test";

    userEvent.type(input, user);
    userEvent.click(button);

    expect(screen.getByText(user)).toBeInTheDocument();
  });
});
