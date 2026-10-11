import Image from "next/image";
import { ArrowDown, ArrowUpRight, Code2, Layers3, Sparkles } from "lucide-react";
import { MagneticLink } from "./Motion";

export default function Hero() {
  return (
    <section id="inicio" className="hero shell" aria-labelledby="hero-heading">
      <div className="hero-copy">
        <div className="availability"><span className="status-dot" /> Disponível para novos projetos <span className="availability-detail">· orçamento sem compromisso</span></div>
        <p className="eyebrow">DESIGN COM INTENÇÃO. ENGENHARIA SEM LIMITES.</p>
        <h1 id="hero-heading">Engenharia digital de elite para marcas que exigem <span className="gradient-text">presença inesquecível.</span></h1>
        <p className="hero-description">Desenvolvimento sob medida de Sites Institucionais, Aplicativos Mobile, E-commerces de Luxo e Vitrines Virtuais. Sem templates genéricos, 100% focado no seu resultado.</p>
        <div className="hero-actions"><MagneticLink href="#orcamento" className="button-primary">Iniciar Consulta Gratuita <ArrowUpRight size={18} aria-hidden="true" /></MagneticLink><a href="#servicos" className="button-secondary">Explorar Soluções <ArrowDown size={17} aria-hidden="true" /></a></div>
        <div className="hero-assurance"><span><Code2 size={15} aria-hidden="true" /> Código sob medida</span><span><Layers3 size={15} aria-hidden="true" /> Design de alto padrão</span></div>
      </div>
      <div className="hero-visual" aria-label="Ilustração conceitual de engenharia digital">
        <div className="orbital orbital-one" /><div className="orbital orbital-two" /><div className="hero-glow" />
        <Image src="/assets/3d-chip.png" width={1024} height={1024} alt="Microchip tridimensional luminoso em ciano e violeta" sizes="(max-width: 800px) 85vw, 48vw" loading="eager" className="hero-chip" />
        <div className="floating-label label-top"><span className="status-dot" /> ENGINEERING / DESIGN</div>
        <div className="floating-label label-bottom"><Sparkles size={15} aria-hidden="true" /><div>Ideias complexas.<br /><strong>Experiências simples.</strong></div></div>
        <span className="visual-coordinate">NXR / DIGITAL SYSTEMS — 001</span>
      </div>
      <div className="hero-bottom"><span>DA SUA VISÃO À PRÓXIMA VERSÃO DO SEU NEGÓCIO</span><a href="#servicos" aria-label="Descobrir nossos serviços"><ArrowDown size={18} aria-hidden="true" /></a></div>
    </section>
  );
}
