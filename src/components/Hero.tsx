"use client";

import Image from "next/image";
import { ArrowDown, ArrowUpRight, Layers } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="inicio" className="pt-28 pb-20 overflow-hidden relative" aria-labelledby="hero-heading">
      {/* Background Dot Matrix Accent */}
      <div className="dot-matrix-bg" aria-hidden="true" />

      <div className="shell">
        {/* Editorial Top Metadata Strip (Satto style) */}
        <div className="editorial-top-strip">
          <span className="meta-tag">BUILT FOR VISIONARY BRANDS · FELIPE INÁCIO</span>
          <span className="meta-tag hidden md:inline">EDITION : 2026 // NXR-01</span>
          <span className="meta-tag text-[#0c0c0e] font-semibold">CONSULTA & ORÇAMENTO GRATUITO</span>
        </div>

        {/* Main Editorial Headline */}
        <div className="max-w-4xl mt-6 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/[0.04] border border-black/[0.08] mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#52525b]">
              DISPONÍVEL PARA NOVOS PROJETOS · ORÇAMENTO SEM COMPROMISSO
            </span>
          </div>

          <h1 id="hero-heading" className="text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-medium leading-[1.05] tracking-[-0.04em] text-[#0c0c0e]">
            Arquitetura digital para marcas que operam no <span className="underline decoration-black/20 underline-offset-8">mais alto padrão.</span>
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-[#52525b] max-w-2xl font-normal leading-relaxed">
            Desenvolvimento sob medida de Sites Institucionais, Aplicativos Mobile, E-commerces de Luxo e Vitrines Virtuais. Sem templates genéricos, 100% focado no seu resultado e posicionamento.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-10">
            <a href="#orcamento" className="button-editorial-dark">
              <span>Iniciar Consulta Gratuita</span>
              <ArrowUpRight size={16} />
            </a>
            <a href="#showcase" className="button-editorial-light">
              <span>Explorar Showcase</span>
              <ArrowDown size={15} />
            </a>
          </div>
        </div>

        {/* Satto Studio Signature: The Floating Looping Editorial Mockup Suite */}
        <motion.div
          id="showcase"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 relative"
        >
          {/* Main Floating Editorial Frame (Gallery Canvas with Swiss Typography) */}
          <div className="bg-[#f6f6f4] rounded-2xl sm:rounded-3xl border border-black/[0.12] p-6 sm:p-10 md:p-12 shadow-[0_30px_90px_rgba(0,0,0,0.12)] relative overflow-hidden group">
            {/* Corner Swiss Typography - Top Left */}
            <div className="flex justify-between items-start mb-6">
              <div className="font-mono text-[10px] uppercase tracking-wider text-[#0c0c0e]">
                <div className="font-bold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#0c0c0e]" />
                  NEXORA DIGITAL / 2026
                </div>
                <div className="text-[#71717a] text-[9px] tracking-widest mt-0.5">
                  BESPOKE SOFTWARE & DESIGN ARCHITECTURE
                </div>
              </div>

              {/* Corner Swiss Typography - Top Right */}
              <div className="font-mono text-[10px] uppercase tracking-wider text-[#0c0c0e] text-right">
                <div className="font-bold">
                  SELECTED WORKS & SYSTEMS
                </div>
                <div className="text-[#71717a] text-[9px] tracking-widest mt-0.5">
                  EDITION // VOL. 01 — HIGH-STANDARDS
                </div>
              </div>
            </div>

            {/* Central 3D Isometric Artwork */}
            <div className="relative mx-auto flex justify-center items-center py-4 sm:py-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-3xl flex justify-center"
              >
                <Image
                  src="/assets/editorial-hero-showcase-clean.png"
                  alt="Nexora Digital - Mostruário Isométrico 3D de Websites, Aplicativos Mobile, Dashboards, E-commerce e Código"
                  width={1890}
                  height={1950}
                  priority
                  className="w-full h-auto object-contain drop-shadow-xl"
                />
              </motion.div>
            </div>

            {/* Corner Swiss Typography - Bottom Bar */}
            <div className="flex justify-between items-end mt-6 pt-4 border-t border-black/[0.08]">
              <div className="font-mono text-[10px] uppercase tracking-wider text-[#0c0c0e] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>SYSTEM STATUS : OPERATIONAL · BH / BR</span>
              </div>

              <div className="font-mono text-[10px] uppercase tracking-wider text-[#0c0c0e] text-right">
                <a
                  href="#orcamento"
                  className="hover:underline inline-flex items-center gap-1 font-semibold text-[#0c0c0e]"
                >
                  SOLICITAR PROPOSTA EXCLUSIVA →
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Conversion Banner */}
          <div className="bg-[#121217] rounded-xl border border-white/10 p-6 sm:p-8 mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6 items-center shadow-xl">
            <div className="lg:col-span-1 flex flex-col justify-center">
              <span className="font-mono text-[10px] tracking-widest text-neutral-400 uppercase mb-2">
                PARCERIA & VISÃO
              </span>
              <h3 className="text-xl sm:text-2xl font-medium text-white tracking-tight leading-snug">
                Do primeiro traço ao lançamento com você.
              </h3>
              <p className="text-xs text-neutral-400 mt-3 leading-relaxed">
                Trabalhamos lado a lado para traduzir a ambição da sua empresa em uma presença digital impecável, rápida e duradoura.
              </p>
            </div>

            <div className="lg:col-span-2 bg-[#18181f] rounded-lg p-6 border border-white/[0.06] flex items-center justify-between gap-6 overflow-hidden">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-amber-400">
                  <Layers size={24} />
                </div>
                <div>
                  <div className="font-mono text-[11px] text-white tracking-wider uppercase font-semibold">
                    CONSULTA ESTRATÉGICA DIRETA
                  </div>
                  <div className="text-xs text-neutral-400 mt-0.5">
                    Diagnóstico gratuito das suas necessidades com Felipe Inácio.
                  </div>
                </div>
              </div>

              <a
                href="#orcamento"
                className="shrink-0 bg-white text-black px-5 py-2.5 rounded-full font-mono text-[11px] uppercase tracking-wider font-semibold hover:bg-neutral-200 transition-colors"
              >
                Falar Agora →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
