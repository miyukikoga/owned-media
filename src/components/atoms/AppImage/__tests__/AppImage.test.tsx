import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AppImage } from "../AppImage";
import fileMock from "../../../../__mocks__/fileMock";

describe("<AppImage />", () => {
  it("表示する", () => {
    render(<AppImage alt="テスト" src={fileMock} />);
    const img = screen.getByRole("img", { name: "テスト" });
    expect(img).toBeInTheDocument();
  });
});
