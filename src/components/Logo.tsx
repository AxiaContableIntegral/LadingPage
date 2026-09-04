import React from 'react';

type LogoProps = {
  tone?: 'light' | 'dark';
};

export function Logo({ tone = 'light' }: LogoProps) {
  // const main = tone === 'light' ? 'text-white' : 'text-brand-navy';
  // const divider = tone === 'light' ? 'bg-white/40' : 'bg-brand-navy/25';
  // const sub = tone === 'light' ? 'text-white/85' : 'text-slate-600';

  return (
    <a href="#inicio" className="flex items-center" aria-label="Axia Contable Integral, ir al inicio">
      <img src="/Imagenes/LogoAxiA.webp" alt="Axia Contable Integral Logo" className="h-12 w-auto object-contain" />
    </a>);

}