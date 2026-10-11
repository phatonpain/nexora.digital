"use client";

import Image from "next/image";
import { ArrowDown, ArrowUpRight, Sparkles, Shield, Layers } from "lucide-react";
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
          {/* Main Floating Editorial Frame (Dark Luxury Container) */}
          <div className="satto-frame p-4 sm:p-8 md:p-12">
            <div className="satto-screen-header">
              <span className="font-mono text-[9px] uppercase tracking-widest">
                NEXORA STUDIO® — CURATED MOCKUPS & INTERACTIVE SCREENS
              </span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-400">
                SCENE : E26 // VOL. 01
              </span>
            </div>

            {/* Top Showcase Screen: The "ABOUT" Editorial Layout */}
            <div className="bg-[#121217] rounded-xl border border-white/10 p-6 sm:p-10 my-6 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.08]">
                <h2 className="text-2xl sm:text-4xl font-medium tracking-tight text-white uppercase font-mono">
                  ABOUT / NEXORA
                </h2>
                <span className="font-mono text-[10px] text-neutral-400 tracking-widest">
                  ESTÚDIO DE ENGENHARIA & DESIGN
                </span>
              </div>

              {/* Split Cards: Avant-garde visual showcase */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                {/* Left Card: 3D Core with Amber Glow */}
                <div className="bg-[#18181f] rounded-xl p-8 border border-white/[0.08] relative group overflow-hidden flex flex-col justify-between min-h-[280px]">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-500/20 transition-all duration-700" />
                  
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] tracking-widest text-amber-400/90 uppercase flex items-center gap-2">
                      <Sparkles size={12} /> ALTA FIDELIDADE
                    </span>
                    <span className="text-xs font-mono text-neutral-500">01</span>
                  </div>

                  <div className="my-6 relative z-10 flex justify-center">
                    <Image
                      src="/assets/3d-chip.png"
                      alt="Microchip holográfico central"
                      width={180}
                      height={180}
                      className="object-contain drop-shadow-[0_20px_35px_rgba(245,158,11,0.25)] transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-white tracking-tight">Sistemas Exclusivos & IA</h3>
                    <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                      Infraestruturas escaláveis e código de alta performance projetados para liderar mercados.
                    </p>
                  </div>
                </div>

                {/* Right Card: High-contrast Minimal Typography & Metric */}
                <div className="bg-[#18181f] rounded-xl p-8 border border-white/[0.08] relative flex flex-col justify-between min-h-[280px]">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] tracking-widest text-cyan-400 uppercase flex items-center gap-2">
                      <Shield size={12} /> SEGURANÇA & RIGOR
                    </span>
                    <span className="text-xs font-mono text-neutral-500">02</span>
                  </div>

                  <div className="my-6 flex justify-center">
                    <Image
                      src="/assets/3d-shield.png"
                      alt="Escudo de segurança e confiabilidade"
                      width={170}
                      height={170}
                      className="object-contain drop-shadow-[0_20px_35px_rgba(6,182,212,0.25)] transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-white tracking-tight">Arquitetura de Conversão</h3>
                    <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                      Interfaces desenhadas com psicologia de produto para transformar visitas em contratos.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Showcase Screen: The Automotive / High-Tech Editorial Banner */}
            <div className="bg-[#121217] rounded-xl border border-white/10 p-6 sm:p-8 mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
