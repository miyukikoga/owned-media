import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ProfileHeader } from "@/components/organisms/ProfileHeader";

describe("<ProfileHeader />", () => {
  it("見出しロールから対象のProfileHeaderを取得できる", () => {
    render(<ProfileHeader />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
});
