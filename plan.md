# Nexora Digital — fundação da interface

## Escopo
Implementar Navbar, Hero, BentoGrid, Workflow, BudgetEstimator, FAQ e Footer conforme ARCHITECTURE.md, utilizando os três PNGs transparentes existentes. Sem preços fixos, clientes fictícios ou resultados apresentados como reais.

## Decisões
- Preservar Next.js 16.4 / React 19 existentes no scaffold. O pedido menciona Next.js 15, enquanto o blueprint menciona Vite; não migrar o runtime neste PR.
- Obsidiana #08090d, ciano #67e8f9 e violeta #a78bfa; Geist para títulos e Inter para texto.
- Widgets de serviços explicitamente demonstrativos; âncora Projetos leva às prévias conceituais, não a cases de clientes.
- PNGs locais com transparência e dimensões 1024 × 1024. Não há cena Spline fornecida: usar as artes aprovadas, sem carregar WebGL adicional.
- WhatsApp depende de NEXT_PUBLIC_WHATSAPP_NUMBER (formato internacional, somente dígitos). Sem configuração válida, disponibilizar briefing para cópia e explicar que não foi enviado.
- Não armazenar dados pessoais no navegador, nem enviar automaticamente.
- Remover ESLint e usar exclusivamente oxlint. Testes Vitest/Testing Library e smoke tests Playwright.

## Validação planejada
Testes de validação e configurador, menu por teclado, FAQ, responsividade em 320/390/768/1280px, movimento reduzido, carregamento de assets, oxlint, typecheck, build e scan de secrets antes do commit.
