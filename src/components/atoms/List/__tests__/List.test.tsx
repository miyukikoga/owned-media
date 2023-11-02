import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { List } from "../List";

describe("<List />", () => {
  it("表示する", () => {
    render(<List childrenList={["a", "b", "c"]} />);

    const items = screen.getAllByRole("listitem");
    expect(items.length).toBe(3);

    const itemNames = items.map((item) => item.textContent);
    expect(itemNames).toMatchInlineSnapshot(
      `
      [
        "a",
        "b",
        "c",
      ]
    `
    );
  });
});
