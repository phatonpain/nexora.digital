import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: false,
  workers: 1,
  use: { baseURL: "http://127.0.0.1:3000", browserName: "chromium" },
  webServer: { command: "npm run start -- --hostname 0.0.0.0", url: "http://127.0.0.1:3000", reuseExistingServer: !process.env.CI },
});
