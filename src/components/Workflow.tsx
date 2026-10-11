import { ArrowUpRight, MessagesSquare, PenTool, Code2, Rocket } from "lucide-react";
import { Reveal } from "./Motion";

const steps = [
  { number: "01", icon: MessagesSquare, title: "Consulta Estratégica", description: "Alinhamos suas necessidades e expectativas. Uma conversa 100% gratuita para entender o que seu negócio precisa.", tag: "Ouvimos primeiro" },
  { number: "02", icon: PenTool, title: "Arquitetura & Design", description: "Prototipamos o fluxo e o visual da solução. Você enxerga a direção antes de qualquer linha de código.", tag: "Clareza antes do código" },
  { number: "03", icon: Code2, title: "Engenharia & Construção", description: "Desenvolvimento limpo, performático e seguro. Cada decisão técnica a serviço de uma experiência melhor.", tag: "Precisão em cada detalhe" },
  { number: "04", icon: Rocket, title: "Lançamento & Suporte", description: "Deploy assistido, documentação e acompanhamento de evolução. A entrega é o começo da próxima etapa.", tag: "Construído para evoluir" },
];

export default function Workflow() {
  return <section id="processo" className="section shell" aria-labelledby="workflow-heading"><div className="section-intro"><div><p className="section-kicker">02 / UM PROCESSO, SEM CAIXA-PRETA</p><h2 id="workflow-heading" className="section-heading">Da primeira conversa<br /><span className="muted-heading">ao próximo grande passo.</span></h2></div><a className="text-link" href="#orcamento">Vamos construir juntos <ArrowUpRight size={18} aria-hidden="true" /></a></div><div className="workflow-grid">{steps.map(({ number, icon: Icon, title, description, tag }) => <Reveal className="workflow-step" key={number}><div className="step-top"><span>{number}</span><Icon size={22} aria-hidden="true" /></div><h3>{title}</h3><p>{description}</p><span className="step-tag">{tag}</span></Reveal>)}</div></section>;
}
