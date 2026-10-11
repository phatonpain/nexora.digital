import { describe, expect, it } from "vitest";
import {
  buildBudgetMessage,
  buildWhatsAppUrl,
  DEFAULT_BUDGET_FORM,
  isAllowedDeadline,
  isAllowedProjectType,
  isValidBrazilianPhone,
  isValidEmail,
  normalizeBrazilianPhone,
  validateBudgetForm,
  type BudgetFormData,
} from "./budget";

const validForm: BudgetFormData = {
  ...DEFAULT_BUDGET_FORM,
  projectType: "site-institucional",
  deadline: "flexivel",
  name: "Ana Souza",
  email: "ana@example.com",
  whatsapp: "(11) 99999-9999",
  description: "Preciso de uma nova presença digital para a minha empresa.",
  consent: true,
};

describe("budget validation", () => {
  it("accepts only allowlisted project and deadline values", () => {
    expect(isAllowedProjectType("site-institucional")).toBe(true);
    expect(isAllowedProjectType("projeto-inventado")).toBe(false);
    expect(isAllowedDeadline("flexivel")).toBe(true);
    expect(isAllowedDeadline("amanhã")).toBe(false);
  });

  it("accepts Brazilian landline and mobile formats and normalizes them", () => {
    expect(isValidBrazilianPhone("(11) 99999-9999")).toBe(true);
    expect(isValidBrazilianPhone("11 3333-4444")).toBe(true);
    expect(isValidBrazilianPhone("+55 (11) 99999-9999")).toBe(true);
    expect(normalizeBrazilianPhone("+55 (11) 99999-9999")).toBe("5511999999999");
    expect(isValidBrazilianPhone("9999")).toBe(false);
    expect(isValidBrazilianPhone("(00) 99999-9999")).toBe(false);
    expect(isValidBrazilianPhone("+44 (11) 99999-9999")).toBe(false);
  });

  it("validates required fields, email, and length restrictions", () => {
    expect(validateBudgetForm(validForm)).toEqual({});
    expect(isValidEmail("ana@example.com")).toBe(true);
    expect(isValidEmail("ana@localhost")).toBe(false);

    const errors = validateBudgetForm({
      ...validForm,
      projectType: "unknown",
      deadline: "unknown",
      name: "A",
      email: "not-an-email",
      whatsapp: "123",
      description: "curto",
      consent: false,
    });

    expect(errors).toMatchObject({
      projectType: expect.any(String),
      deadline: expect.any(String),
      name: expect.any(String),
      email: expect.any(String),
      whatsapp: expect.any(String),
      description: expect.any(String),
      consent: expect.any(String),
    });
  });
});

describe("budget briefing and WhatsApp URL", () => {
  it("keeps the briefing in Portuguese and encodes it for wa.me", () => {
    const message = buildBudgetMessage(validForm);
    expect(message).toContain("Tipo de projeto: Site Institucional");
    expect(message).toContain("WhatsApp: +5511999999999");

    const url = buildWhatsAppUrl(validForm, "5511888888888");
    expect(url).toMatch(/^https:\/\/wa\.me\/5511888888888\?text=/);
    expect(url).toContain(encodeURIComponent("Olá! Gostaria de solicitar um orçamento gratuito."));
    expect(url).not.toContain("Ana Souza");
  });

  it("does not create a link without a valid configured recipient", () => {
    expect(buildWhatsAppUrl(validForm)).toBeNull();
    expect(buildWhatsAppUrl(validForm, "not-a-number")).toBeNull();
    expect(buildWhatsAppUrl({ ...validForm, consent: false }, "5511888888888")).toBeNull();
  });
});
