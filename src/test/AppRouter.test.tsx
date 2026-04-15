import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import App from "@/App";

describe("App routing", () => {
  beforeEach(() => {
    cleanup();
  });

  it("renders the dashboard at the app base path", () => {
    window.history.pushState({}, "", "/tri/");
    render(<App />);

    expect(screen.queryByText(/404/i)).not.toBeInTheDocument();
    expect(screen.getByText(/Return to Home/i)).not.toBeInTheDocument();
  });

  it("shows the 404 page for an unknown route under the app base path", () => {
    window.history.pushState({}, "", "/tri/unknown-route");
    render(<App />);

    expect(screen.getByText("404")).toBeInTheDocument();
    expect(screen.getByText(/Oops! Page not found/i)).toBeInTheDocument();
    expect(screen.getByText(/Return to Home/i)).toBeInTheDocument();
  });
});
