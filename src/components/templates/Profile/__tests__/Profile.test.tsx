import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Profile } from "@/components/templates/Profile";

describe("<Profile />", () => {
  it("見出しロールから対象のProfileを取得できる", () => {
    render(<Profile />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
});

describe("<Profile />", () => {
  it("表ロールから対象のProfileを取得できる", () => {
    render(<Profile />);
    const table = screen.getByRole("table");
    expect(table).toBeInTheDocument();
  });

  it("行グループロールから対象のProfileを取得できる", () => {
    render(<Profile />);
    const rowGroups = screen.getAllByRole("rowgroup");
    for (const rowGroup of rowGroups) {
      expect(rowGroup).toBeInTheDocument();
    }
  });

  it("行ロールから対象のProfileを取得できる", () => {
    render(<Profile />);
    const rows = screen.getAllByRole("row");
    for (const row of rows) {
      expect(row).toBeInTheDocument();
    }
  });
});
