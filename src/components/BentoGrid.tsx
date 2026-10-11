"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, Check, CheckCheck, Code2, CreditCard, Globe2, Layers3, Smartphone, Workflow as WorkflowIcon } from "lucide-react";
import { Reveal } from "./Motion";

export default function BentoGrid() {
  const [approved, setApproved] = useState(false);
  const [rotation, setRotation] = useState(0);

  return (
    <section id="servicos" className="section shell" aria-labelledby="services-heading">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-8 border-b border-black/[0.08]">
        <div>
          <div className="editorial-kicker mb-3">02 / SOLUÇÕES & ENGENHARIA</div>
          <h2 id="services-heading" className="text-3xl sm:text-5xl font-medium tracking-tight text-[#0c0c0e]">
            O que projetamos e construímos.
          </h2>
        </div>
        <p className="max-w-md text-sm text-[#52525b] leading-relaxed">
          Do design de alta fidelidade ao código de produção. Cada sistema é construído exclusivamente para a operação e a reputação da sua marca.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 01 (Double Width) - Sites & Landing Pages de Elite */}
        <Reveal className="lg:col-span-2 bg-[#0c0c10] text-white rounded-2xl p-8 sm:p-10 border border-white/10 relative overflow-hidden flex flex-col justify-between group shadow-xl">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Globe2 size={20} className="text-amber-400" />
              <span className="font-mono text-[10px] tracking-widest text-neutral-400 uppercase">
                WEB EXPERIENCE · 01
              </span>
            </div>
            <a href="#orcamento" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors" aria-label="Solicitar orçamento para sites">
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Interactive Web Performance Widget */}
          <div className="bg-[#14141a] rounded-xl p-6 border border-white/[0.08] mb-8">
            <div className="flex items-center justify-between font-mono text-[10px] text-neutral-400 pb-3 border-b border-white/[0.06]">
              <span>LAB / PAGESPEED AUDIT</span>
              <span className="text-emerald-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> NOTA MÁXIMA
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 py-6">
              <div>
                <span className="font-mono text-[9px] tracking-widest text-neutral-500 uppercase">SCORE OFICIAL</span>
                <div className="text-5xl font-mono font-medium tracking-tight text-white mt-1">
                  100<span className="text-neutral-500 text-xl font-normal">/100</span>
                </div>
                <span className="text-xs text-neutral-400 mt-1 block">Carregamento instantâneo e SEO nativo</span>
              </div>

              <div className="flex items-end gap-2 h-20 w-full sm:w-1/2 pt-2 border-b border-white/10">
                {[30, 45, 40, 65, 55, 80, 70, 95, 100].map((height, i) => (
                  <span
                    key={i}
                    style={{ height: `${height}%` }}
                    className="flex-1 bg-gradient-to-t from-neutral-800 to-amber-400/80 rounded-t-sm"
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-3 border-t border-white/[0.06] font-mono text-[10px] text-neutral-400">
              <span className="flex items-center gap-1.5"><CheckCheck size={14} className="text-amber-400" /> Responsividade Fluida</span>
              <span className="flex items-center gap-1.5"><CheckCheck size={14} className="text-amber-400" /> Sem Templates Genéricos</span>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-medium tracking-tight text-white mb-2">Sites que estabelecem autoridade instantânea.</h3>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-xl">
              Landing pages de alta conversão e portais corporativos construídos do zero com Next.js 15, tipografia refinada e animações suaves.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {["Next.js 15", "TypeScript", "Tailwind CSS", "SEO Técnico"].map((tag) => (
                <span key={tag} className="font-mono text-[10px] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Card 02 - Aplicativos Mobile */}
        <Reveal className="bg-[#0c0c10] text-white rounded-2xl p-8 sm:p-10 border border-white/10 relative overflow-hidden flex flex-col justify-between group shadow-xl">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Smartphone size={20} className="text-cyan-400" />
              <span className="font-mono text-[10px] tracking-widest text-neutral-400 uppercase">
                MOBILE · 02
              </span>
            </div>
            <a href="#orcamento" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors" aria-label="Solicitar orçamento para aplicativo">
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Interactive Phone Mockup */}
          <div className="my-auto py-4 flex justify-center">
            <div className="w-44 h-64 border-4 border-[#24242e] rounded-3xl p-3.5 bg-gradient-to-b from-[#16161d] to-[#0c0c10] shadow-2xl relative rotate-3 group-hover:rotate-0 transition-transform duration-500">
              <div className="w-12 h-2 rounded-full bg-black mx-auto mb-2" />
              <div className="font-mono text-[8px] text-neutral-500 flex justify-between">
                <span>09:41</span>
                <span>5G</span>
              </div>
              <div className="mt-4 text-xs font-medium text-white leading-tight">
                Design nativo.<br /><span className="text-cyan-400">Performance pura.</span>
              </div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-500 my-4 mx-auto shadow-lg shadow-cyan-500/20" />
              <div className="bg-white/5 border border-white/10 rounded-lg p-2 font-mono text-[8px] text-neutral-300 flex items-center justify-between">
                <span>Ver Demonstração</span>
                <ArrowUpRight size={10} />
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-medium tracking-tight text-white mb-2">Aplicativos Mobile (iOS & Android)</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Experiências fluidas em React Native e Flutter que colocam sua operação e seus serviços no bolso dos clientes.
            </p>
          </div>
        </Reveal>

        {/* Card 03 - E-commerce & Inventários de Luxo */}
        <Reveal className="bg-[#0c0c10] text-white rounded-2xl p-8 border border-white/10 relative overflow-hidden flex flex-col justify-between group shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <CreditCard size={20} className="text-amber-400" />
              <span className="font-mono text-[10px] tracking-widest text-neutral-400 uppercase">
                COMMERCE · 03
              </span>
            </div>
            <a href="#orcamento" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors" aria-label="Solicitar orçamento para e-commerce">
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="bg-[#14141a] rounded-xl p-5 border border-white/[0.08] my-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center">
                <CreditCard size={18} />
              </div>
              <div>
                <div className="text-xs font-medium text-white">Checkout Ultrarrápido</div>
                <div className="font-mono text-[9px] text-neutral-500">Mínimo atrito de compra</div>
              </div>
            </div>
            <button
              type="button"
              className={`w-full py-2.5 rounded-lg text-xs font-mono tracking-wider transition-all flex items-center justify-center gap-2 ${
                approved ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30" : "bg-white/10 text-white hover:bg-white/20 border border-white/10"
              }`}
              onClick={() => setApproved(!approved)}
            >
              {approved ? <><Check size={14} /> Pagamento Simulado Aprovado</> : <>Simular Conversão de Venda <ArrowUpRight size={14} /></>}
            </button>
          </div>

          <div>
            <h3 className="text-xl font-medium tracking-tight text-white mb-2">E-commerces & Inventários</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Plataformas preparadas para escalar catálogos e vendas com segurança e checkout otimizado.
            </p>
          </div>
        </Reveal>

        {/* Card 04 - Vitrines Virtuais 3D */}
        <Reveal className="bg-[#0c0c10] text-white rounded-2xl p-8 border border-white/10 relative overflow-hidden flex flex-col justify-between group shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Layers3 size={20} className="text-cyan-400" />
              <span className="font-mono text-[10px] tracking-widest text-neutral-400 uppercase">
                3D SHOWCASE · 04
              </span>
            </div>
            <a href="#orcamento" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors" aria-label="Solicitar orçamento para vitrine">
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="relative h-44 flex flex-col items-center justify-center my-4">
            <Image
              src="/assets/3d-chart.png"
              width={160}
              height={160}
              alt="Objeto 3D translúcido"
              style={{ transform: `rotate(${rotation}deg)` }}
              className="object-contain transition-transform duration-500 drop-shadow-[0_15px_30px_rgba(6,182,212,0.2)]"
            />
            <button
              type="button"
              onClick={() => setRotation((val) => val + 45)}
              className="mt-3 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-[10px] font-mono text-neutral-300 flex items-center gap-1.5 transition-colors"
            >
              <ArrowUpRight size={12} /> Girar Objeto 3D
            </button>
          </div>

          <div>
            <h3 className="text-xl font-medium tracking-tight text-white mb-2">Vitrines Virtuais & Catálogos 3D</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Exponha produtos de alto valor agregado com interação tridimensional imersiva no navegador.
            </p>
          </div>
        </Reveal>

        {/* Card 05 - Sistemas Sob Medida & IA */}
        <Reveal className="bg-[#0c0c10] text-white rounded-2xl p-8 border border-white/10 relative overflow-hidden flex flex-col justify-between group shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <WorkflowIcon size={20} className="text-amber-400" />
              <span className="font-mono text-[10px] tracking-widest text-neutral-400 uppercase">
                SYSTEMS & AI · 05
              </span>
            </div>
            <a href="#orcamento" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors" aria-label="Solicitar orçamento para automação">
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="bg-[#14141a] rounded-xl p-5 border border-white/[0.08] my-6 flex items-center justify-between">
            <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white">
              <Code2 size={18} />
            </div>
            <div className="h-0.5 flex-1 bg-gradient-to-r from-white/20 via-amber-400 to-white/20 mx-3" />
            <div className="w-12 h-12 rounded-lg bg-black border border-white/10 flex items-center justify-center overflow-hidden">
              <Image src="/assets/3d-shield.png" width={40} height={40} alt="Escudo" className="object-contain" />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium tracking-tight text-white mb-2">Sistemas & Automações com IA</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Painéis administrativos, pipelines de dados e integrações inteligentes para empresas modernas.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
