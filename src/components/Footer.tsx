import { ArrowUpRight } from "lucide-react";
import { cacheLife } from "next/cache";

export default async function Footer() {
  "use cache";
  cacheLife("days");
  const year = new Date().getFullYear();

  return (
    <footer className="footer shell mt-20">
      <div className="footer-top">
        <div>
          <a className="flex items-center gap-2 font-bold tracking-tight text-xl text-[#0c0c0e]" href="#inicio" aria-label="Nexora Digital — início">
            <span className="w-6 h-6 rounded-full bg-[#0a0a0d] text-white flex items-center justify-center font-mono text-xs">N</span>
            <span>NEXORA<span className="text-neutral-400 font-mono text-xs">®</span></span>
          </a>
          <p className="mt-4 text-xs text-[#52525b] leading-relaxed max-w-sm">
            Arquitetura de software de elite e design editorial para empresas que operam com rigor. Do Brasil para o mundo.
          </p>
        </div>

        <a
          href="#orcamento"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0a0a0d] text-white font-mono text-xs uppercase tracking-wider hover:bg-[#202028] transition-all"
        >
          <span>Sua próxima ideia começa aqui</span>
          <ArrowUpRight size={15} />
        </a>
      </div>

      <div className="py-12 border-b border-black/[0.08] flex justify-center overflow-hidden select-none pointer-events-none">
        <span className="font-mono text-5xl sm:text-8xl md:text-9xl lg:text-[140px] font-black tracking-tighter text-black/[0.04]">
          NEXORA
        </span>
      </div>

      <div className="footer-bottom">
        <span>© {year} NEXORA DIGITAL · FELIPE INÁCIO</span>
        <nav aria-label="Navegação do rodapé" className="flex gap-6">
          <a href="#showcase" className="hover:text-black transition-colors">SHOWCASE</a>
          <a href="#servicos" className="hover:text-black transition-colors">SOLUÇÕES</a>
          <a href="#processo" className="hover:text-black transition-colors">PROCESSO</a>
          <a href="#faq" className="hover:text-black transition-colors">FAQ</a>
        </nav>
        <span className="footer-location hidden sm:inline">ALTO PADRÃO · ENGENHARIA DE SOFTWARE</span>
      </div>
    </footer>
  );
}
