import { test, expect } from "@playwright/test";

for (const width of [320, 390, 768, 1280]) {
  test(`responsive page and local artwork at ${width}px`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Engenharia digital de elite");
    await expect(page.locator("html")).toHaveAttribute("lang", "pt-BR");
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    for (const image of await page.locator('img[src*="3d-"]').all()) {
      await image.evaluate((element) => element.scrollIntoView({ behavior: "instant", block: "center" }));
      await expect(image).toHaveJSProperty("complete", true);
      await expect.poll(() => image.evaluate((element) => (element as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
    }
    if (width < 801) {
      await page.goto("/");
      const toggle = page.getByRole("button", { name: "Abrir menu" });
      await toggle.click();
      await expect(page.locator("#mobile-menu a").first()).toBeFocused();
      await page.keyboard.press("Escape");
      await expect(toggle).toBeFocused();
      await expect(toggle).toHaveAttribute("aria-expanded", "false");
    }
    expect(errors).toEqual([]);
  });
}

test("conceptual widgets, FAQ and reduced motion", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page.getByRole("button", { name: "Simular checkout" }).click();
  await expect(page.getByRole("button", { name: "Pagamento simulado aprovado" })).toBeVisible();
  const artwork = page.locator(".catalog-widget img");
  await page.getByRole("button", { name: "Girar objeto da vitrine" }).click();
  await expect(artwork).toHaveAttribute("style", /rotate\(30deg\)/);
  await page.getByText("Como funciona o orçamento gratuito?").click();
  await expect(page.locator("details[open] p")).toContainText("gratuitos e sem compromisso");
  expect(await page.locator(".hero-chip").evaluate((element) => getComputedStyle(element).animationName)).toBe("none");
});

test("budget flow validates each step and prepares a briefing without pretending to send it", async ({ page }) => {
  await page.goto("/");
  expect(await page.evaluate(() => window.scrollY)).toBe(0);
  const form = page.locator(".budget-form");
  await form.getByRole("button", { name: "Continuar" }).click();
  await expect(form.getByRole("alert")).toContainText("Selecione o tipo");
  await page.getByRole("radio", { name: /Site Institucional/ }).check();
  await form.getByRole("button", { name: "Continuar" }).click();
  await expect(page.getByRole("heading", { name: "Passo 2 — Prazo Estimado" })).toBeFocused();
  await page.getByRole("radio", { name: /Flexível/ }).check();
  await form.getByRole("button", { name: "Continuar" }).click();
  await page.getByLabel("Nome completo").fill("Ana Souza");
  await page.getByLabel("E-mail", { exact: true }).fill("ana@example.com");
  await page.getByLabel("WhatsApp", { exact: true }).fill("11999999999");
  await page.getByLabel("Conte sobre a sua ideia").fill("Preciso de um site institucional para minha empresa.");
  await page.getByRole("checkbox").check();
  await form.getByRole("button", { name: "Preparar briefing" }).click();
  await expect(page.getByRole("heading", { name: "Seu briefing está pronto" })).toBeVisible();
  await expect(page.locator(".briefing-text")).toContainText("Tipo de projeto: Site Institucional");
  await expect(page.locator(".briefing-note")).toContainText("Nada foi enviado");
  await expect(page.getByRole("link", { name: "Abrir no WhatsApp" })).toHaveCount(0);
});
