import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AppImage } from "../AppImage";

describe("<AppImage />", () => {
  it("表示する", () => {
    render(<AppImage alt="テスト" src="" />);
    const img = screen.getByRole("img", { name: "テスト" });
    expect(img).toBeInTheDocument();
  });
});
