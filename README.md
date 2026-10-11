This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Nexora Digital — UI foundation

A página usa o App Router existente (Next.js 16.4 / React 19), Tailwind v4, Framer Motion, Geist e Inter. O blueprint em `ARCHITECTURE.md` cita Vite e o pedido original cita Next.js 15; esta implementação preserva o runtime já versionado, sem migração. As três artes PNG de `public/assets/` são reutilizadas; nenhuma cena Spline foi fornecida.

### Quality checks

```bash
npm ci
npm test
npx oxlint --deny-warnings
npm run typecheck
npm run build
npx playwright install chromium
npm run test:e2e
```

O linter oficial é exclusivamente oxlint. Os widgets de serviços são demonstrações conceituais, não cases ou resultados medidos de clientes. Não há preços tabelados.

### WhatsApp

Configure `NEXT_PUBLIC_WHATSAPP_NUMBER` no ambiente de build com o número real do estúdio em formato internacional, somente dígitos (DDI + DDD + número). O valor é público, não uma credencial. Sem configuração válida, o configurador gera um briefing copiável e informa explicitamente que nada foi enviado. Ele não salva dados pessoais em storage nem realiza envio automático; a conversa só abre após a ação do visitante.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
