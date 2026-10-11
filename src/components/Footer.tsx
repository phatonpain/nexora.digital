import { ArrowUpRight } from "lucide-react";
import { cacheLife } from "next/cache";

export default async function Footer() {
  "use cache";
  cacheLife("days");
  return <footer className="footer shell"><div className="footer-top"><div><a className="brand" href="#inicio" aria-label="Nexora Digital — início"><span className="brand-symbol" aria-hidden="true">N</span>nexora<span className="brand-dot">.</span></a><p>Engenharia de software.<br />Design que faz a diferença.</p></div><a className="text-link" href="#orcamento">Sua próxima ideia começa aqui <ArrowUpRight size={18} aria-hidden="true" /></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Nexora Digital · Felipe Inácio</span><nav aria-label="Navegação do rodapé"><a href="#servicos">Soluções</a><a href="#processo">Processo</a><a href="#faq">FAQ</a></nav><span className="footer-location">DO BRASIL, PARA SUA PRÓXIMA FASE.</span></div></footer>;
}
