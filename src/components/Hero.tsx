import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';

const HERO_BG = "/01dd96d6-7914-4621-9ea4-23820cd420f1.jpg";


export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-[38rem] items-center overflow-hidden bg-brand-navyDark lg:min-h-[44rem]">
      
      <img
        src={HERO_BG}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full object-cover" />
      
      <div className="absolute inset-0 -z-10 bg-brand-navyDeep/55" aria-hidden="true" />

      <div className="mx-auto w-full max-w-7xl px-5 py-32 lg:px-8 lg:py-40">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-2xl">
          
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Transformamos la gestión en valor y el valor en crecimiento
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            Integrando contabilidad, impuestos y gestión bajo una visión estratégica que potencia el
            crecimiento de tu empresa.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-orange px-7 py-3.5 text-base font-semibold text-white transition-colors duration-150 ease-out hover:bg-brand-orangeDark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
              
              Solicitar asesoría
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center rounded-md border border-white/40 px-7 py-3.5 text-base font-semibold text-white transition-colors duration-150 ease-out hover:border-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
              
              Ver servicios
            </a>
          </div>
        </motion.div>
      </div>
    </section>);

}