"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clipboard,
  ExternalLink,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import {
  buildBudgetMessage,
  buildWhatsAppUrl,
  DEFAULT_BUDGET_FORM,
  DEADLINE_OPTIONS,
  getConfiguredWhatsAppNumber,
  PROJECT_TYPE_OPTIONS,
  type BudgetField,
  type BudgetFormData,
  type BudgetValidationErrors,
  validateBudgetForm,
} from "../lib/budget";

const STEP_FIELDS: Record<number, BudgetField[]> = {
  1: ["projectType"],
  2: ["deadline"],
  3: ["name", "email", "whatsapp", "description", "consent"],
};

const FIELD_ERROR_IDS: Record<BudgetField, string> = {
  projectType: "project-type-error",
  deadline: "deadline-error",
  name: "name-error",
  email: "email-error",
  whatsapp: "whatsapp-error",
  description: "description-error",
  consent: "consent-error",
};

const STEP_TITLES = ["Tipo de Projeto", "Prazo Estimado", "Contato Direto"];

function errorsForStep(
  errors: BudgetValidationErrors,
  step: number,
): BudgetValidationErrors {
  const visibleErrors: BudgetValidationErrors = {};
  for (const field of STEP_FIELDS[step] ?? []) {
    if (errors[field]) visibleErrors[field] = errors[field];
  }
  return visibleErrors;
}

function firstErrorField(errors: BudgetValidationErrors, step: number): BudgetField | null {
  return STEP_FIELDS[step]?.find((field) => Boolean(errors[field])) ?? null;
}

export default function BudgetEstimator() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<BudgetFormData>(DEFAULT_BUDGET_FORM);
  const [errors, setErrors] = useState<BudgetValidationErrors>({});
  const [briefing, setBriefing] = useState<string | null>(null);
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">("idle");
  const stepHeadingRef = useRef<HTMLHeadingElement>(null);
  const previousStep = useRef(1);

  useEffect(() => {
    if (previousStep.current !== step) stepHeadingRef.current?.focus();
    previousStep.current = step;
  }, [step]);

  function updateField<K extends keyof BudgetFormData>(
    field: K,
    value: BudgetFormData[K],
  ) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
    if (briefing) setBriefing(null);
    setCopyState("idle");
  }

  function focusField(field: BudgetField | null) {
    if (!field) return;
    const element = document.getElementById(field) ?? document.querySelector(`[name="${field}"]`);
    if (element instanceof HTMLElement) element.focus();
  }

  function validateStep(currentStep: number): boolean {
    const visibleErrors = errorsForStep(validateBudgetForm(form), currentStep);
    setErrors(visibleErrors);
    if (Object.keys(visibleErrors).length > 0) {
      focusField(firstErrorField(visibleErrors, currentStep));
      return false;
    }
    return true;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (step < 3) {
      if (validateStep(step)) {
        setStep((current) => current + 1);
        setBriefing(null);
      }
      return;
    }

    const allErrors = validateBudgetForm(form);
    const visibleErrors = errorsForStep(allErrors, 3);
    setErrors(visibleErrors);
    if (Object.keys(allErrors).length > 0) {
      focusField(firstErrorField(visibleErrors, 3));
      return;
    }

    setBriefing(buildBudgetMessage(form));
    setCopyState("idle");
  }

  function handleBack() {
    setStep((current) => Math.max(1, current - 1));
    setBriefing(null);
    setCopyState("idle");
  }

  async function handleCopy() {
    if (!briefing) return;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(briefing);
      } else {
        const temporaryInput = document.createElement("textarea");
        temporaryInput.value = briefing;
        temporaryInput.setAttribute("readonly", "");
        temporaryInput.style.position = "fixed";
        temporaryInput.style.opacity = "0";
        document.body.appendChild(temporaryInput);
        temporaryInput.select();
        const copied = document.execCommand("copy");
        temporaryInput.remove();
        if (!copied) throw new Error("Clipboard unavailable");
      }
      setCopyState("copied");
    } catch {
      setCopyState("error");
    }
  }

  const configuredNumber = getConfiguredWhatsAppNumber();
  const whatsAppUrl = briefing && configuredNumber
    ? buildWhatsAppUrl(form, configuredNumber)
    : null;

  function renderError(field: BudgetField) {
    const message = errors[field];
    if (!message) return null;
    return (
      <p id={FIELD_ERROR_IDS[field]} className="field-error" role="alert">
        {message}
      </p>
    );
  }

  return (
    <section id="orcamento" className="section shell budget-section" aria-labelledby="budget-heading">
      <div className="section-kicker">03 / ORÇAMENTO GRATUITO</div>
      <h2 id="budget-heading" className="section-heading">
        Configurador Interativo de Projeto
      </h2>
      <p className="section-copy">
        Conte-nos o que você quer construir. Em poucos passos, organizamos as informações
        essenciais para uma conversa sob medida, sem compromisso.
      </p>

      <div className="panel budget-panel">
        <ol className="budget-steps" aria-label="Etapas do orçamento">
          {STEP_TITLES.map((title, index) => {
            const stepNumber = index + 1;
            const isCurrent = step === stepNumber;
            return (
              <li key={title} className={isCurrent ? "is-current" : undefined}>
                <span aria-hidden="true">{stepNumber.toString().padStart(2, "0")}</span>
                <span>{title}</span>
                {stepNumber < step && <Check size={15} aria-hidden="true" />}
                {isCurrent && <span className="sr-only"> etapa atual</span>}
              </li>
            );
          })}
        </ol>

        <form className="budget-form" noValidate onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="budget-step" key="project-step">
              <h3 ref={stepHeadingRef} className="budget-step-heading" tabIndex={-1}>
                Passo 1 — Tipo de Projeto
              </h3>
              <p className="budget-step-copy">Que solução você quer tirar do papel?</p>
              <fieldset
                className="field choice-fieldset"
                aria-describedby={errors.projectType ? FIELD_ERROR_IDS.projectType : undefined}
                aria-invalid={Boolean(errors.projectType)}
              >
                <legend className="sr-only">Selecione o tipo de projeto</legend>
                <div className="choice-grid">
                  {PROJECT_TYPE_OPTIONS.map((option) => (
                    <label className="choice" key={option.value}>
                      <input
                        id={option.value}
                        type="radio"
                        name="projectType"
                        value={option.value}
                        checked={form.projectType === option.value}
                        onChange={(event) => updateField("projectType", event.target.value)}
                        aria-describedby={errors.projectType ? FIELD_ERROR_IDS.projectType : undefined}
                        aria-invalid={Boolean(errors.projectType)}
                        required={option.value === PROJECT_TYPE_OPTIONS[0].value}
                      />
                      <span className="choice-content">
                        <span className="choice-title">{option.label}</span>
                        <span className="choice-description">{option.description}</span>
                      </span>
                    </label>
                  ))}
                </div>
                {renderError("projectType")}
              </fieldset>
            </div>
          )}

          {step === 2 && (
            <div className="budget-step" key="deadline-step">
              <h3 ref={stepHeadingRef} className="budget-step-heading" tabIndex={-1}>
                Passo 2 — Prazo Estimado
              </h3>
              <p className="budget-step-copy">Qual ritmo faz sentido para este projeto?</p>
              <fieldset
                className="field choice-fieldset"
                aria-describedby={errors.deadline ? FIELD_ERROR_IDS.deadline : undefined}
                aria-invalid={Boolean(errors.deadline)}
              >
                <legend className="sr-only">Selecione o prazo estimado</legend>
                <div className="choice-grid choice-grid--deadline">
                  {DEADLINE_OPTIONS.map((option) => (
                    <label className="choice" key={option.value}>
                      <input
                        id={option.value}
                        type="radio"
                        name="deadline"
                        value={option.value}
                        checked={form.deadline === option.value}
                        onChange={(event) => updateField("deadline", event.target.value)}
                        aria-describedby={errors.deadline ? FIELD_ERROR_IDS.deadline : undefined}
                        aria-invalid={Boolean(errors.deadline)}
                        required={option.value === DEADLINE_OPTIONS[0].value}
                      />
                      <span className="choice-content">
                        <span className="choice-title">{option.label}</span>
                        <span className="choice-description">{option.description}</span>
                      </span>
                    </label>
                  ))}
                </div>
                {renderError("deadline")}
              </fieldset>
            </div>
          )}

          {step === 3 && (
            <div className="budget-step" key="contact-step">
              <h3 ref={stepHeadingRef} className="budget-step-heading" tabIndex={-1}>
                Passo 3 — Contato Direto
              </h3>
              <p className="budget-step-copy">
                Deixe seus dados e uma breve descrição da ideia.
              </p>

              <div className="form-grid">
                <label className="field" htmlFor="name">
                  <span>Nome completo</span>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={(event) => updateField("name", event.target.value)}
                    maxLength={80}
                    autoComplete="name"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? FIELD_ERROR_IDS.name : undefined}
                    required
                  />
                  {renderError("name")}
                </label>

                <label className="field" htmlFor="email">
                  <span>E-mail</span>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={(event) => updateField("email", event.target.value)}
                    maxLength={254}
                    autoComplete="email"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? FIELD_ERROR_IDS.email : undefined}
                    required
                  />
                  {renderError("email")}
                </label>

                <label className="field" htmlFor="whatsapp">
                  <span>WhatsApp</span>
                  <input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    value={form.whatsapp}
                    onChange={(event) => updateField("whatsapp", event.target.value)}
                    maxLength={20}
                    autoComplete="tel"
                    placeholder="(11) 99999-9999"
                    aria-invalid={Boolean(errors.whatsapp)}
                    aria-describedby={errors.whatsapp ? FIELD_ERROR_IDS.whatsapp : undefined}
                    required
                  />
                  {renderError("whatsapp")}
                </label>

                <label className="field field--full" htmlFor="description">
                  <span>Conte sobre a sua ideia</span>
                  <textarea
                    id="description"
                    name="description"
                    value={form.description}
                    onChange={(event) => updateField("description", event.target.value)}
                    minLength={20}
                    maxLength={1000}
                    rows={5}
                    aria-invalid={Boolean(errors.description)}
                    aria-describedby={errors.description ? FIELD_ERROR_IDS.description : undefined}
                    required
                  />
                  <span className="field-hint">Mínimo de 20 caracteres.</span>
                  {renderError("description")}
                </label>

                <label className="field field--full consent-field" htmlFor="consent">
                  <span className="consent-control">
                    <input
                      id="consent"
                      name="consent"
                      type="checkbox"
                      checked={form.consent}
                      onChange={(event) => updateField("consent", event.target.checked)}
                      aria-invalid={Boolean(errors.consent)}
                      aria-describedby={errors.consent ? FIELD_ERROR_IDS.consent : undefined}
                      required
                    />
                    <span>
                      Autorizo a abertura do WhatsApp com este briefing preenchido.
                    </span>
                  </span>
                  {renderError("consent")}
                </label>
              </div>
            </div>
          )}

          <div className="budget-actions">
            {step > 1 ? (
              <button type="button" className="button-secondary" onClick={handleBack}>
                <ArrowLeft size={17} aria-hidden="true" />
                Voltar
              </button>
            ) : (
              <span />
            )}
            <button type="submit" className="button-primary">
              {step < 3 ? (
                <>
                  Continuar
                  <ArrowRight size={17} aria-hidden="true" />
                </>
              ) : (
                <>
                  Preparar briefing
                  <Sparkles size={17} aria-hidden="true" />
                </>
              )}
            </button>
          </div>
        </form>

        {briefing && (
          <aside className="briefing-preview" aria-labelledby="briefing-heading">
            <div className="briefing-heading-row">
              <div>
                <div className="section-kicker">PRONTO PARA A CONVERSA</div>
                <h3 id="briefing-heading" className="briefing-heading">
                  Seu briefing está pronto
                </h3>
              </div>
              <MessageCircle size={24} aria-hidden="true" />
            </div>
            <pre className="briefing-text">{briefing}</pre>
            <div className="briefing-actions">
              <button type="button" className="button-secondary" onClick={handleCopy}>
                {copyState === "copied" ? (
                  <Check size={17} aria-hidden="true" />
                ) : (
                  <Clipboard size={17} aria-hidden="true" />
                )}
                {copyState === "copied" ? "Briefing copiado" : "Copiar briefing"}
              </button>
              {whatsAppUrl ? (
                <a
                  className="button-primary"
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Abrir no WhatsApp
                  <ExternalLink size={17} aria-hidden="true" />
                </a>
              ) : (
                <p className="briefing-note" role="status">
                  O WhatsApp não está configurado. Nada foi enviado; copie o briefing para
                  continuar por outro canal.
                </p>
              )}
            </div>
            {copyState === "error" && (
              <p className="field-error" role="alert">
                Não foi possível copiar automaticamente. Selecione o texto do briefing e copie manualmente.
              </p>
            )}
          </aside>
        )}
      </div>
    </section>
  );
}
