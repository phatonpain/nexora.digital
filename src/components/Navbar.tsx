"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { MagneticLink } from "./Motion";

const links = [["Serviços", "#servicos"], ["Projetos", "#projetos"], ["Processo", "#processo"], ["Orçamento", "#orcamento"]];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    menu.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    const dismiss = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); toggle.current?.focus(); }
    };
    const outside = (event: PointerEvent) => {
      if (event.target instanceof Node && !menu.current?.contains(event.target) && !toggle.current?.contains(event.target)) setOpen(false);
    };
    document.addEventListener("keydown", dismiss);
    document.addEventListener("pointerdown", outside);
    return () => { document.removeEventListener("keydown", dismiss); document.removeEventListener("pointerdown", outside); };
  }, [open]);
  return (
    <header className="nav-wrap">
      <nav className="nav-pill" aria-label="Navegação principal">
        <a href="#inicio" className="brand" aria-label="Nexora Digital — início"><span className="brand-symbol" aria-hidden="true">N</span>nexora<span className="brand-dot">.</span></a>
        <div className="desktop-links">{links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</div>
        <MagneticLink href="#orcamento" className="button-primary nav-cta">Solicitar Orçamento Gratuito <ArrowUpRight size={15} aria-hidden="true" /></MagneticLink>
        <button ref={toggle} className="menu-toggle" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Fechar menu" : "Abrir menu"} onClick={() => setOpen(!open)}>{open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button>
      </nav>
      {open && <div ref={menu} id="mobile-menu" className="mobile-menu">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}<ArrowUpRight size={16} aria-hidden="true" /></a>)}</div>}
    </header>
  );
}
