import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Text } from "@/app/components/elements/Text";

describe("<Text />", () => {
  it("テキストから対象のTextを取得できる", () => {
    render(<Text>テスト</Text>);
    expect(screen.getByText("テスト")).toBeInTheDocument();
  });
});
