"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  ["01 / SHOWCASE", "#showcase"],
  ["02 / SERVIÇOS", "#servicos"],
  ["03 / METODOLOGIA", "#processo"],
  ["04 / ORÇAMENTO", "#orcamento"],
  ["05 / FAQ", "#faq"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    menu.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    const dismiss = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const outside = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !menu.current?.contains(event.target) &&
        !toggle.current?.contains(event.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", dismiss);
    document.addEventListener("pointerdown", outside);
    return () => {
      document.removeEventListener("keydown", dismiss);
      document.removeEventListener("pointerdown", outside);
    };
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f5f5f3]/85 backdrop-blur-md border-b border-black/[0.06] transition-all">
      <div className="shell flex items-center justify-between h-20">
        <a href="#inicio" className="flex items-center gap-3 group" aria-label="Nexora Digital — início">
          <span className="w-8 h-8 rounded-full bg-[#0a0a0d] text-white flex items-center justify-center font-mono text-xs font-bold transition-transform group-hover:scale-105">
            N
          </span>
          <div className="flex flex-col">
            <span className="font-bold tracking-tight text-sm text-[#0c0c0e]">
              NEXORA<span className="text-neutral-400 font-mono text-xs">®</span>
            </span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#71717a]">
              STUDIO : FELIPE INÁCIO
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8 text-[11px] font-mono tracking-widest text-[#52525b]" aria-label="Navegação principal">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="hover:text-[#0c0c0e] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#0c0c0e] hover:after:w-full after:transition-all"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#orcamento"
            className="hidden sm:inline-flex items-center gap-2 bg-[#0a0a0d] text-white px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider hover:bg-[#222228] transition-all transform hover:-translate-y-0.5 shadow-sm"
          >
            <span>Orçamento Gratuito</span>
            <ArrowUpRight size={14} className="text-neutral-400" />
          </a>

          <button
            ref={toggle}
            className="lg:hidden p-2 text-[#0c0c0e] hover:bg-black/5 rounded-full transition-colors"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div
          ref={menu}
          id="mobile-menu"
          className="lg:hidden border-t border-black/[0.06] bg-[#f5f5f3] px-8 py-6 flex flex-col gap-4 shadow-xl"
        >
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between font-mono text-xs tracking-wider text-[#0c0c0e] py-3 border-b border-black/[0.04]"
            >
              <span>{label}</span>
              <ArrowUpRight size={14} className="text-neutral-400" />
            </a>
          ))}
          <a
            href="#orcamento"
            onClick={() => setOpen(false)}
            className="mt-4 flex items-center justify-center gap-2 bg-[#0a0a0d] text-white py-3.5 rounded-full text-xs font-medium uppercase tracking-wider text-center"
          >
            <span>Iniciar Consulta Gratuita</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      )}
    </header>
  );
}
