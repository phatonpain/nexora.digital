import { Plus } from "lucide-react";

const questions = [
  ["Como funciona o orçamento gratuito?", "Você compartilha sua ideia, necessidades e prazo. A partir dessa conversa, definimos um escopo transparente e uma proposta sob medida. A consulta e o orçamento são gratuitos e sem compromisso; o desenvolvimento é contratado separadamente."],
  ["Eu já tenho um design no Figma. Vocês programam?", "Sim. Podemos partir do seu design, avaliar a viabilidade técnica e transformar os layouts em uma experiência responsiva. Se necessário, alinhamos ajustes de acessibilidade e interação antes da implementação."],
  ["Vocês aceitam propostas e formatos flexíveis de pagamento?", "Cada projeto tem um contexto. Escopo, etapas e condições de pagamento são alinhados na proposta, de forma transparente. Não trabalhamos com preços tabelados ou pacotes genéricos."],
  ["Qual é o suporte após a entrega do projeto?", "A entrega inclui deploy assistido e documentação. O período de suporte, a manutenção e o acompanhamento de evolução são definidos no escopo da proposta, para que você saiba exatamente o que está incluído."],
];

export default function FAQ() {
  return <section id="faq" className="section shell faq-layout" aria-labelledby="faq-heading"><div><p className="section-kicker">04 / ANTES DE COMEÇAR</p><h2 id="faq-heading" className="section-heading">Boas perguntas.<br /><span className="muted-heading">Respostas diretas.</span></h2><p className="section-copy">Sem letras miúdas. Uma parceria começa com clareza.</p></div><div className="faq-list">{questions.map(([question, answer]) => <details key={question} name="nexora-faq"><summary>{question}<Plus size={19} aria-hidden="true" /></summary><p>{answer}</p></details>)}</div></section>;
}
