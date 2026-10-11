# Nexora Digital — evidências da implementação

## Entrega
Os sete componentes solicitados estão em `src/components/` e a composição está em `src/app/page.tsx:1-19`. O Hero usa `3d-chip.png`; o Bento Grid usa `3d-chart.png` e `3d-shield.png`. As imagens originais têm 1024 × 1024 pixels e canal RGBA. Os widgets são rotulados como conceituais, sem apresentar simulações como resultados reais.

## Validações executadas

| Comando / verificação | Resultado |
| --- | --- |
| `npm test` | 3 arquivos, 12 testes passando |
| `npm run test:e2e` | 6 testes passando, Chromium |
| `npx oxlint --deny-warnings` | 0 warnings, 0 errors, 19 arquivos |
| `npm run typecheck` | Tipos de rota gerados; TypeScript sem erros |
| `npm run build` após limpar `.next` | Build otimizado e pré-renderização concluídos; rota `/` estática |
| `npm audit --audit-level=high` | 0 vulnerabilidades |
| `git diff --cached --check` | Sem erros de whitespace |
| Gitleaks 8.24.2 em snapshot completo do index | 107.20 KB analisados; `no leaks found` |
| HTTP local e público | 200 / 200 |

A matriz Playwright cobre 320, 390, 768 e 1280 pixels: ausência de overflow horizontal, imagens carregadas, idioma pt-BR e erros de página ausentes. Inclui menu móvel com foco inicial e retorno por Escape, FAQ nativo, widgets interativos, preferência de movimento reduzido e configurador completo sem destinatário configurado. Os testes Testing Library também exercitam o link de WhatsApp com configuração válida e a exigência de consentimento. São verificações dirigidas, não certificação integral de acessibilidade ou performance.

## Correções verificadas
O foco inicial do configurador não desloca mais a página para baixo. O ano do rodapé respeita Cache Components por `use cache`. O Hero contém o overflow das órbitas e da arte 3D. O loader Tailwind/Turbopack do scaffold reutilizou CSS antigo durante build incremental; a correção foi confirmada na regra compilada e no build limpo. Capturas finais mediram `scrollWidth=1280` e `scrollWidth=390`, respectivamente.

## Escolhas e pendências
O scaffold usa Next.js 16.4 e React 19.3; esta branch preserva essas versões, embora o pedido mencione Next.js 15 e o blueprint mencione Vite. Nenhuma migração de framework foi feita. Não existe cena Spline fornecida; as artes 3D locais foram utilizadas sem dependência WebGL adicional.

O número real do estúdio não foi fornecido. Configure `NEXT_PUBLIC_WHATSAPP_NUMBER` no ambiente de build para habilitar a conversa direta. Sem valor válido, o briefing pode ser copiado e a interface informa que nada foi enviado. Não há backend de captação de leads, armazenamento de dados pessoais, preços fixos ou envio automático.

O preview é temporário do Sandbox, não publicação de produção: https://3000-iu1dtf9ou9ribe2pdhyzn-e3d20375.us1.manus.computer . O PR não implica merge nem deploy confirmado.
