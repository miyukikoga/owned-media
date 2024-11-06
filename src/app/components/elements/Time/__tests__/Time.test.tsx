import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Time } from "@/app/components/elements/Time";

describe("<Time />", () => {
  it("テキストから対象のTimeを取得できる", () => {
    render(<Time dateTime="2023-10-10T21:53:43.952Z">2023年10月10日</Time>);
    expect(screen.getByText("2023年10月10日")).toBeInTheDocument();
  });
});
