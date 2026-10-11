export const PROJECT_TYPE_OPTIONS = [
  {
    value: "site-institucional",
    label: "Site Institucional",
    description: "Uma presença digital clara, rápida e confiável.",
  },
  {
    value: "aplicativo-mobile",
    label: "Aplicativo Mobile",
    description: "Experiências nativas para iOS e Android.",
  },
  {
    value: "e-commerce",
    label: "E-commerce",
    description: "Venda online com uma operação preparada para crescer.",
  },
  {
    value: "vitrine-virtual",
    label: "Vitrine Virtual",
    description: "Catálogos digitais para apresentar seus produtos.",
  },
  {
    value: "outro",
    label: "Outro",
    description: "Uma solução sob medida para o seu desafio.",
  },
] as const;

export const DEADLINE_OPTIONS = [
  {
    value: "urgente",
    label: "Urgente",
    description: "Até 15 dias.",
  },
  {
    value: "medio",
    label: "Médio",
    description: "De 30 a 45 dias.",
  },
  {
    value: "flexivel",
    label: "Flexível",
    description: "Priorizamos o melhor ritmo para o projeto.",
  },
] as const;

export type ProjectType = (typeof PROJECT_TYPE_OPTIONS)[number]["value"];
export type Deadline = (typeof DEADLINE_OPTIONS)[number]["value"];

export interface BudgetFormData {
  projectType: ProjectType | string;
  deadline: Deadline | string;
  name: string;
  email: string;
  whatsapp: string;
  description: string;
  consent: boolean;
}

export type BudgetField = keyof BudgetFormData;
export type BudgetValidationErrors = Partial<Record<BudgetField, string>>;
export type BudgetErrors = BudgetValidationErrors;

export const NAME_MIN_LENGTH = 2;
export const NAME_MAX_LENGTH = 80;
export const EMAIL_MAX_LENGTH = 254;
export const WHATSAPP_MAX_LENGTH = 20;
export const DESCRIPTION_MIN_LENGTH = 20;
export const DESCRIPTION_MAX_LENGTH = 1000;

export const DEFAULT_BUDGET_FORM: BudgetFormData = {
  projectType: "",
  deadline: "",
  name: "",
  email: "",
  whatsapp: "",
  description: "",
  consent: false,
};

export const EMPTY_BUDGET_FORM = DEFAULT_BUDGET_FORM;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_ALLOWED_PATTERN = /^[\d\s()+.-]+$/;
const INTERNATIONAL_NUMBER_PATTERN = /^[1-9]\d{7,14}$/;

function hasOption<T extends readonly { value: string }[]>(
  options: T,
  value: unknown,
): value is T[number]["value"] {
  return typeof value === "string" && options.some((option) => option.value === value);
}

export function isAllowedProjectType(value: unknown): value is ProjectType {
  return hasOption(PROJECT_TYPE_OPTIONS, value);
}

export function isAllowedDeadline(value: unknown): value is Deadline {
  return hasOption(DEADLINE_OPTIONS, value);
}

export const isValidProjectType = isAllowedProjectType;
export const isValidDeadline = isAllowedDeadline;

function localBrazilianPhone(value: string): string | null {
  const trimmed = value.trim();
  if (
    !trimmed ||
    trimmed.length > WHATSAPP_MAX_LENGTH ||
    !PHONE_ALLOWED_PATTERN.test(trimmed)
  ) return null;

  const digits = trimmed.replace(/\D/g, "");
  if ((digits.length === 12 || digits.length === 13) && !digits.startsWith("55")) return null;
  const local = digits.length === 12 || digits.length === 13 ? digits.slice(2) : digits;
  if (local.length !== 10 && local.length !== 11) return null;

  const areaCode = local.slice(0, 2);
  const subscriber = local.slice(2);
  if (!/^[1-9]\d$/.test(areaCode)) return null;
  if (local.length === 10 && !/^[2-5]\d{7}$/.test(subscriber)) return null;
  if (local.length === 11 && !/^9\d{8}$/.test(subscriber)) return null;
  return local;
}

export function normalizeBrazilianPhone(value: string): string | null {
  const local = localBrazilianPhone(value);
  return local ? `55${local}` : null;
}

export function isValidBrazilianPhone(value: unknown): value is string {
  return typeof value === "string" && localBrazilianPhone(value) !== null;
}

export const validateBrazilianPhone = isValidBrazilianPhone;

export function isValidEmail(value: unknown): value is string {
  if (typeof value !== "string") return false;
  const email = value.trim();
  return email.length <= EMAIL_MAX_LENGTH && EMAIL_PATTERN.test(email);
}

export const validateEmail = isValidEmail;

export function isValidInternationalWhatsAppNumber(value: unknown): value is string {
  return typeof value === "string" && INTERNATIONAL_NUMBER_PATTERN.test(value);
}

export function getConfiguredWhatsAppNumber(value?: string): string | null {
  const configured = value ?? (
    typeof process !== "undefined" ? process.env.NEXT_PUBLIC_WHATSAPP_NUMBER : undefined
  );
  return isValidInternationalWhatsAppNumber(configured) ? configured : null;
}

function optionLabel<T extends readonly { value: string; label: string }[]>(
  options: T,
  value: string,
): string {
  return options.find((option) => option.value === value)?.label ?? value;
}

export function validateBudgetForm(form: BudgetFormData): BudgetValidationErrors {
  const errors: BudgetValidationErrors = {};
  const name = typeof form.name === "string" ? form.name.trim() : "";
  const email = typeof form.email === "string" ? form.email.trim() : "";
  const description = typeof form.description === "string" ? form.description.trim() : "";

  if (!isAllowedProjectType(form.projectType)) {
    errors.projectType = "Selecione o tipo de projeto.";
  }

  if (!isAllowedDeadline(form.deadline)) {
    errors.deadline = "Selecione um prazo estimado.";
  }

  if (!name) {
    errors.name = "Informe seu nome.";
  } else if (name.length < NAME_MIN_LENGTH) {
    errors.name = `Use pelo menos ${NAME_MIN_LENGTH} caracteres.`;
  } else if (name.length > NAME_MAX_LENGTH) {
    errors.name = `Use no máximo ${NAME_MAX_LENGTH} caracteres.`;
  }

  if (!email) {
    errors.email = "Informe seu e-mail.";
  } else if (!isValidEmail(email)) {
    errors.email = "Digite um e-mail válido.";
  }

  if (typeof form.whatsapp !== "string" || !form.whatsapp.trim()) {
    errors.whatsapp = "Informe seu WhatsApp.";
  } else if (!isValidBrazilianPhone(form.whatsapp)) {
    errors.whatsapp = "Digite um WhatsApp brasileiro válido, com DDD.";
  }

  if (!description) {
    errors.description = "Conte um pouco sobre a sua ideia.";
  } else if (description.length < DESCRIPTION_MIN_LENGTH) {
    errors.description = `Conte um pouco mais (mínimo de ${DESCRIPTION_MIN_LENGTH} caracteres).`;
  } else if (description.length > DESCRIPTION_MAX_LENGTH) {
    errors.description = `Use no máximo ${DESCRIPTION_MAX_LENGTH} caracteres.`;
  }

  if (form.consent !== true) {
    errors.consent = "Autorize a abertura do WhatsApp para continuar.";
  }

  return errors;
}

export function isBudgetFormValid(form: BudgetFormData): boolean {
  return Object.keys(validateBudgetForm(form)).length === 0;
}

export function buildBudgetMessage(form: BudgetFormData): string {
  const phone = normalizeBrazilianPhone(form.whatsapp) ?? form.whatsapp.trim();
  return [
    "Olá! Gostaria de solicitar um orçamento gratuito.",
    "",
    `Tipo de projeto: ${optionLabel(PROJECT_TYPE_OPTIONS, form.projectType)}`,
    `Prazo estimado: ${optionLabel(DEADLINE_OPTIONS, form.deadline)}`,
    `Nome: ${form.name.trim()}`,
    `E-mail: ${form.email.trim()}`,
    `WhatsApp: +${phone}`,
    "",
    "Sobre o projeto:",
    form.description.trim(),
  ].join("\n");
}

export const buildBudgetBriefing = buildBudgetMessage;

export function buildWhatsAppUrl(
  form: BudgetFormData,
  recipient?: string,
): string | null {
  if (!isBudgetFormValid(form)) return null;
  const number = getConfiguredWhatsAppNumber(recipient);
  if (!number) return null;
  return `https://wa.me/${number}?text=${encodeURIComponent(buildBudgetMessage(form))}`;
}

export const buildWhatsAppLink = buildWhatsAppUrl;
