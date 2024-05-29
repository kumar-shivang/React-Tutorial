import { describe, it, expect } from "vitest";
import { UsernameDisplay } from "../components/UsernameDisplay";
import { render } from "@testing-library/react";
describe("UsernameDisplay", () => {
  it("should render username", () => {
    const result = render(<UsernameDisplay username={"user1"} />);
    expect(result.container).toMatchSnapshot();
  });
});
