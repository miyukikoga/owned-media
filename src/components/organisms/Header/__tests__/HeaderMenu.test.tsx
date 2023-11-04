import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Header } from "../Header";

describe("<HeaderMenu />", () => {
  it("対象のHeaderMenuを取得できる", () => {
    render(<Header>テスト</Header>);
    expect(screen.getByText("テスト")).toBeInTheDocument();

    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", `/profile`);
  });
});
