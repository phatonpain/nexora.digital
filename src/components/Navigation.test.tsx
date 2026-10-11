import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import Navbar from "./Navbar";
import FAQ from "./FAQ";

describe("Navigation", () => {
  it("opens the mobile disclosure, focuses its links and restores focus on Escape", async () => {
    const user = userEvent.setup();
    render(<Navbar />);
    const toggle = screen.getByRole("button", { name: "Abrir menu" });
    await user.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    expect(document.querySelector("#mobile-menu a")).toHaveFocus();
    await user.keyboard("{Escape}");
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(toggle).toHaveFocus();
  });
  it("renders four native FAQ disclosures without hidden interactive controls", () => {
    const { container } = render(<FAQ />);
    expect(container.querySelectorAll("details")).toHaveLength(4);
    expect(screen.getByText("Como funciona o orçamento gratuito?")).toBeVisible();
  });
});
