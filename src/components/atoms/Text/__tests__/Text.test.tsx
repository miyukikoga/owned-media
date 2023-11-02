import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Text } from "../Text";

describe("<Text />", () => {
  it("表示する", () => {
    render(<Text>テスト</Text>);
    expect(screen.getByText("テスト")).toBeInTheDocument();
  });
});
