import { ArrowUpRight, MessagesSquare, PenTool, Code2, Rocket } from "lucide-react";
import { Reveal } from "./Motion";

const steps = [
  {
    number: "01",
    icon: MessagesSquare,
    title: "Consulta Estratégica",
    description: "Alinhamos suas necessidades, ambições e prazos. Uma conversa 100% gratuita para entender seu modelo de negócio e sugerir a melhor abordagem técnica.",
    tag: "DIAGNÓSTICO GRATUITO",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Arquitetura & Design",
    description: "Prototipamos o fluxo do usuário e a direção de arte da interface em alta fidelidade. Você visualiza cada detalhe da solução antes de qualquer linha de código.",
    tag: "DIREÇÃO DE ARTE",
  },
  {
    number: "03",
    icon: Code2,
    title: "Engenharia & Construção",
    description: "Desenvolvimento estrito em Next.js 15, TypeScript e Tailwind CSS. Código limpo, componentizado, com SEO nativo e pontuação máxima de performance.",
    tag: "ENGENHARIA PURA",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Lançamento & Evolução",
    description: "Deploy assistido em nuvem, documentação técnica entregue e suporte pós-lançamento. Construímos relações de longo prazo para manter seu produto relevante.",
    tag: "SUPORTE CONTÍNUO",
  },
];

export default function Workflow() {
  return (
    <section id="processo" className="section shell" aria-labelledby="workflow-heading">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-8 border-b border-black/[0.08]">
        <div>
          <div className="editorial-kicker mb-3">03 / METODOLOGIA EDITORIAL</div>
          <h2 id="workflow-heading" className="text-3xl sm:text-5xl font-medium tracking-tight text-[#0c0c0e]">
            Processo transparente. Sem caixa-preta.
          </h2>
        </div>
        <a href="#orcamento" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#0c0c0e] hover:opacity-70 transition-opacity">
          <span>Iniciar Diagnóstico Gratuito</span>
          <ArrowUpRight size={15} />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map(({ number, icon: Icon, title, description, tag }) => (
          <Reveal key={number} className="bg-white border border-black/[0.08] rounded-xl p-8 flex flex-col justify-between hover:border-black/30 transition-colors shadow-sm">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-black/[0.06] mb-6">
                <span className="font-mono text-2xl font-light text-[#0c0c0e]">{number}</span>
                <div className="w-9 h-9 rounded-full bg-black/[0.04] flex items-center justify-center text-[#0c0c0e]">
                  <Icon size={16} />
                </div>
              </div>
              <h3 className="text-lg font-medium text-[#0c0c0e] tracking-tight mb-3">{title}</h3>
              <p className="text-xs text-[#6a6a75] leading-relaxed">{description}</p>
            </div>
            <div className="pt-6 mt-6 border-t border-black/[0.04]">
              <span className="font-mono text-[9px] tracking-widest text-[#9696a4] uppercase">{tag}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
