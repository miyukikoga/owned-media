import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Button } from "../Button";

describe("<Button />", () => {
  it("表示する", () => {
    render(<Button label="テスト" />);
    const button = screen.getByRole("button", { name: "テスト" });
    expect(button).toBeInTheDocument();
  });

  it("クリックする", async () => {
    const onClickMock = jest.fn();
    render(<Button label="テスト" onClick={onClickMock} />);
    const button = screen.getByRole("button");
    await userEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
