# Blueprint de Arquitetura — Novo Projeto (Inspirado no Axonix)

## 1. Visão Geral e Posicionamento
* **Proprietário:** Felipe Inácio
* **Conceito:** Estúdio de Engenharia de Software e Design de Alto Padrão (Elite Web & Mobile).
* **Referência Estética:** [Axonix](https://axonix.framer.ai/) — Dark mode luxuoso, Bento Grid interativo, tipografia Geist/Inter, glassmorphism sub-pixel e estética de software de alta performance.
* **Modelo Comercial:** Zero preços tabelados. Foco 100% em **Consulta e Orçamento Gratuito**, escopo transparente e propostas sob medida para qualquer tamanho de projeto.

---

## 2. Stack Técnica Oficial
* **Frontend:** React 19 + TypeScript + Vite + Tailwind CSS v4
* **Animações & Física:** Framer Motion (micro-interações de spring, cursores magnéticos, Bento hovers)
* **3D & Efeitos:** Spline 3D (fundo sutil e integrado sem sobreposição opaca)
* **Linter & Qualidade:** `oxlint` (sem ESLint)
* **Testes:** Vitest + Testing Library
* **Ícones:** Lucide React

---

## 3. Arquitetura de Informação & Seções (Estrutura Axonix Adaptada)

### A. Header Flutuante (Glass Pill)
* Barra de navegação em cápsula flutuante (`backdrop-filter: blur(24px)`).
* Links rápidos: *Serviços*, *Projetos*, *Processo*, *Orçamento*.
* CTA de Ação: `Solicitar Orçamento Gratuito` com micro-interação magnética.

### B. Hero Section (Primeira Impressão de Impacto)
* **Badge Dinâmico:** `DISPONÍVEL PARA NOVOS PROJETOS · ORÇAMENTO SEM COMPROMISSO` com indicador de pulso neon.
* **Headline Principal:** *"Engenharia digital de elite para marcas que exigem presença inesquecível."*
* **Sub-headline:** *"Desenvolvimento sob medida de Sites Institucionais, Aplicativos Mobile, E-commerces de Luxo e Vitrines Virtuais. Sem templates genéricos, 100% focado no seu resultado."*
* **Ações Principais:**
  * Botão Primário: `Iniciar Consulta Gratuita` (abre modal/scroll para o formulário interativo).
  * Botão Secundário: `Explorar Soluções` (scroll suave para o Bento Grid).

### C. Bento Grid Interativo (O que Desenvolvemos)
Malha modular assimétrica com mini-widgets de software vivos:
1. **Card 1 (Destaque 2 Colunas) — Sites Institucionais & Landing Pages de Elite:**
   * Mini-widget: Simulador de métricas de conversão e performance 100/100 no Google PageSpeed.
2. **Card 2 — Aplicativos Mobile (iOS & Android):**
   * Mini-widget: Mockup de smartphone flutuante com interface moderna e tags de React Native / Flutter.
3. **Card 3 — E-commerces & Inventários de Alta Performance:**
   * Mini-widget: Checkout ultra-rápido simulado com micro-animação de pagamento aprovado.
4. **Card 4 — Vitrines Virtuais & Catálogos Digitais:**
   * Mini-widget: Card com visualização de produto 3D interativa e navegação suave.
5. **Card 5 — Sistemas Customizados & Automações com IA:**
   * Mini-widget: Nó de fluxo inteligente com status de sincronização e automação.

### D. Processo Transparente em 4 Passos
1. **01 / Consulta Estratégica:** Alinhamento das suas necessidades e expectativas (100% gratuito).
2. **02 / Arquitetura & Design:** Prototipação do fluxo e visual da solução antes de qualquer linha de código.
3. **03 / Engenharia & Construção:** Desenvolvimento limpo, performático e seguro na stack mais moderna do mercado.
4. **04 / Lançamento & Suporte:** Deploy assistido, documentação e acompanhamento de evolução.

### E. Módulo de Atendimento & Orçamento Inteligente (Conversão Direta)
* Em vez de preços fixos, um **Configurador Interativo de Projeto**:
  * **Passo 1 — Tipo de Projeto:** [ ] Site Institucional [ ] Aplicativo Mobile [ ] E-commerce [ ] Vitrine Virtual [ ] Outro.
  * **Passo 2 — Prazo Estimado:** [ ] Urgente (até 15 dias) [ ] Médio (30-45 dias) [ ] Flexível.
  * **Passo 3 — Contato Direto:** Nome, E-mail, WhatsApp e breve descrição da ideia.
  * **Opção de Ação Rápida:** Botão para abrir conversa direta no **WhatsApp** com a mensagem já pré-formatada com as escolhas do cliente.

### F. FAQ Estratégico (Quebra de Objeções)
* Como funciona o orçamento gratuito?
* Eu já tenho um design (Figma), vocês programam?
* Vocês aceitam propostas e formatos flexíveis de pagamento?
* Qual é o suporte após a entrega do projeto?

---

## 4. Tokens de Design & Identidade Visual
* **Fundo Base:** `#08090d` (Dark Obsidian Profundo)
* **Superfícies de Vidro:** `rgba(255, 255, 255, 0.03)` com borda `rgba(255, 255, 255, 0.08)`
* **Acentos:** Neon Ciano (`#67e8f9`) e Violeta Elétrico (`#a78bfa`)
* **Tipografia:** `Geist` para títulos de impacto tecnológico e `Inter` para leitura fluida
