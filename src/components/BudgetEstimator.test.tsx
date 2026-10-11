// @vitest-environment jsdom

import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import BudgetEstimator from "./BudgetEstimator";

function renderEstimator() {
  return render(<BudgetEstimator />);
}

async function completeProjectAndDeadline(user: ReturnType<typeof userEvent.setup>) {
  await user.click(screen.getByRole("radio", { name: /Site Institucional/ }));
  await user.click(screen.getByRole("button", { name: /Continuar/i }));
  await user.click(screen.getByRole("radio", { name: /Flexível/ }));
  await user.click(screen.getByRole("button", { name: /Continuar/i }));
}

async function fillContact(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByLabelText("Nome completo"), "Ana Souza");
  await user.type(screen.getByLabelText("E-mail"), "ana@example.com");
  await user.type(screen.getByLabelText("WhatsApp"), "(11) 99999-9999");
  await user.type(
    screen.getByRole("textbox", { name: /Conte sobre a sua ideia/ }),
    "Preciso de uma nova presença digital para a minha empresa.",
  );
  await user.click(screen.getByLabelText(/Autorizo a abertura/));
}

afterEach(() => {
  vi.unstubAllEnvs();
});

describe("BudgetEstimator", () => {
  it("renders the first step and associates its validation error with the radio group", async () => {
    const user = userEvent.setup();
    renderEstimator();

    expect(screen.getByRole("heading", { name: "Passo 1 — Tipo de Projeto" })).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: /Continuar/i }));

    const error = screen.getByText("Selecione o tipo de projeto.");
    expect(error).toHaveAttribute("id", "project-type-error");
    expect(screen.getByRole("radio", { name: /Site Institucional/ })).toHaveAttribute(
      "aria-describedby",
      "project-type-error",
    );
  });

  it("moves between steps, focuses the heading, and preserves selected values when going back", async () => {
    const user = userEvent.setup();
    renderEstimator();

    await user.click(screen.getByRole("radio", { name: /Aplicativo Mobile/ }));
    await user.click(screen.getByRole("button", { name: /Continuar/i }));
    await user.click(screen.getByRole("radio", { name: /Médio/ }));
    await user.click(screen.getByRole("button", { name: /Continuar/i }));
    expect(screen.getByRole("heading", { name: "Passo 3 — Contato Direto" })).toHaveFocus();

    await user.click(screen.getByRole("button", { name: /Voltar/i }));
    expect(screen.getByRole("heading", { name: "Passo 2 — Prazo Estimado" })).toHaveFocus();
    expect(screen.getByRole("radio", { name: /Médio/ })).toBeChecked();

    await user.click(screen.getByRole("button", { name: /Voltar/i }));
    expect(screen.getByRole("heading", { name: "Passo 1 — Tipo de Projeto" })).toHaveFocus();
    expect(screen.getByRole("radio", { name: /Aplicativo Mobile/ })).toBeChecked();
  });

  it("shows a copyable preview and never invents a WhatsApp recipient when unconfigured", async () => {
    vi.stubEnv("NEXT_PUBLIC_WHATSAPP_NUMBER", "");
    const user = userEvent.setup();
    renderEstimator();
    await completeProjectAndDeadline(user);
    await fillContact(user);
    await user.click(screen.getByRole("button", { name: /Preparar briefing/i }));

    expect(screen.getByRole("heading", { name: "Seu briefing está pronto" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Copiar briefing/i })).toBeInTheDocument();
    expect(screen.getByText(/WhatsApp não está configurado/i)).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /Abrir no WhatsApp/i })).not.toBeInTheDocument();
    expect(screen.queryByText(/nada foi enviado/i)).toBeInTheDocument();
  });

  it("requires consent before preparing the briefing", async () => {
    const user = userEvent.setup();
    renderEstimator();
    await completeProjectAndDeadline(user);
    await user.type(screen.getByLabelText("Nome completo"), "Ana Souza");
    await user.type(screen.getByLabelText("E-mail"), "ana@example.com");
    await user.type(screen.getByLabelText("WhatsApp"), "(11) 99999-9999");
    await user.type(
      screen.getByRole("textbox", { name: /Conte sobre a sua ideia/ }),
      "Preciso de uma nova presença digital para a minha empresa.",
    );
    await user.click(screen.getByRole("button", { name: /Preparar briefing/i }));

    expect(screen.getByText("Autorize a abertura do WhatsApp para continuar.")).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "Seu briefing está pronto" })).not.toBeInTheDocument();
  });

  it("creates an encoded WhatsApp link only after a valid configured flow", async () => {
    vi.stubEnv("NEXT_PUBLIC_WHATSAPP_NUMBER", "5511888888888");
    const user = userEvent.setup();
    renderEstimator();
    await completeProjectAndDeadline(user);
    await fillContact(user);
    await user.click(screen.getByRole("button", { name: /Preparar briefing/i }));

    const link = screen.getByRole("link", { name: /Abrir no WhatsApp/i });
    expect(link).toHaveAttribute("href", expect.stringMatching(/^https:\/\/wa\.me\/5511888888888\?text=/));
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", expect.stringContaining("noopener"));
  });
});
