import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ProfileTable } from "@/components/organisms/ProfileTable";

describe("<ProfileTable />", () => {
  it("表ロールから対象のProfileTableを取得できる", () => {
    render(<ProfileTable />);
    const table = screen.getByRole("table");
    expect(table).toBeInTheDocument();
  });

  it("行グループロールから対象のProfileTableを取得できる", () => {
    render(<ProfileTable />);
    const rowGroups = screen.getAllByRole("rowgroup");
    for (const rowGroup of rowGroups) {
      expect(rowGroup).toBeInTheDocument();
    }
  });

  it("行ロールから対象のProfileTableを取得できる", () => {
    render(<ProfileTable />);
    const rows = screen.getAllByRole("row");
    for (const row of rows) {
      expect(row).toBeInTheDocument();
    }
  });
});
