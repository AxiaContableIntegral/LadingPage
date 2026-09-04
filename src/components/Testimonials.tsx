import React, { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { QuoteIcon, StarIcon, ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import { testimonials } from '../data/site';

const EASE = [0.23, 1, 0.32, 1] as const;
const AUTOPLAY_MS = 6500;

export function Testimonials() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const go = useCallback((next: number, dir: number) => {
    setDirection(dir);
    setIndex((next + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (paused || reduce) return;
    const timer = window.setInterval(() => {
      setDirection(1);
      setIndex((current) => (current + 1) % testimonials.length);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [paused, reduce]);

  const active = testimonials[index];

  return (
    <section id="testimonios" aria-labelledby="testimonios-title" className="bg-white">

      {/* Modern Text Divider */}
      <div className="relative overflow-hidden bg-brand-navyDeep py-12 lg:py-16">
        <div className="absolute inset-0 bg-brand-orange/5 opacity-50 mix-blend-overlay pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-brand-orange/10 blur-[100px] rounded-full pointer-events-none" />

        <p className="relative z-10 mx-auto max-w-4xl px-5 text-center text-sm font-light tracking-wide text-white sm:text-lg md:text-2xl lg:text-3xl whitespace-nowrap">
          <span className="font-bold text-brand-orange">AxiA</span> significa “valor” en griego, y eso define nuestra esencia.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-28">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <h2
              id="testimonios-title"
              className="text-3xl font-extrabold tracking-tight text-brand-navyDark sm:text-4xl">

              Testimonios
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Lo que dicen los clientes que confían su gestión contable al estudio.
            </p>
          </div>

          <div className="flex gap-3">
            <NavButton label="Testimonio anterior" onClick={() => go(index - 1, -1)}>
              <ArrowLeftIcon className="h-5 w-5" aria-hidden="true" />
            </NavButton>
            <NavButton label="Testimonio siguiente" onClick={() => go(index + 1, 1)}>
              <ArrowRightIcon className="h-5 w-5" aria-hidden="true" />
            </NavButton>
          </div>
        </div>

        <div
          className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_1fr]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}>

          <div className="relative overflow-hidden rounded-lg bg-brand-navy p-9 lg:p-12">
            <QuoteIcon className="h-10 w-10 text-brand-orange" aria-hidden="true" />

            <div className="relative mt-7 min-h-[15rem] sm:min-h-[13rem]" aria-live="polite">
              <AnimatePresence mode="wait" initial={false} custom={direction}>
                <motion.figure
                  key={active.id}
                  custom={direction}
                  initial={reduce ? { opacity: 0 } : { opacity: 0, x: direction * 28 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0, x: direction * -28 }}
                  transition={{ duration: 0.28, ease: EASE }}
                  className="flex h-full flex-col justify-between">

                  <blockquote className="text-xl font-medium leading-relaxed text-white lg:text-2xl">
                    “{active.quote}”
                  </blockquote>
                  <figcaption className="mt-8 flex items-center gap-4 border-t border-white/15 pt-6">
                    <span>
                      <span className="block text-base font-bold text-white">{active.name}</span>
                      <span className="mt-0.5 block text-sm text-white/70">{active.role}</span>
                    </span>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>

            <div className="mt-8 flex gap-2" role="tablist" aria-label="Elegir testimonio">
              {testimonials.map((item, itemIndex) => {
                const current = itemIndex === index;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={current}
                    aria-label={`Testimonio de ${item.name}`}
                    onClick={() => go(itemIndex, itemIndex > index ? 1 : -1)}
                    className="group py-2">

                    <span
                      className={`block h-1 rounded-full transition-[width,background-color] duration-200 ease-out ${current ?
                        'w-10 bg-brand-orange' :
                        'w-5 bg-white/25 group-hover:bg-white/50'}`
                      } />

                  </button>);

              })}
            </div>
          </div>

          <ul className="grid gap-6">
            {testimonials.map((item, itemIndex) => {
              const current = itemIndex === index;
              return (
                <li key={item.id} className="flex">
                  <button
                    type="button"
                    onClick={() => go(itemIndex, itemIndex > index ? 1 : -1)}
                    aria-current={current}
                    className={`flex w-full flex-col rounded-lg border p-6 text-left transition-[background-color,border-color,transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-navy/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy ${current ?
                      'border-brand-navy/25 bg-brand-navySoft' :
                      'border-slate-200 bg-white'}`
                    }>

                    <span className="flex gap-0.5" aria-label="5 de 5 estrellas">
                      {Array.from({ length: 5 }).map((_, starIndex) =>
                        <StarIcon
                          key={starIndex}
                          className="h-3.5 w-3.5 fill-brand-orange text-brand-orange"
                          aria-hidden="true" />

                      )}
                    </span>
                    <span className="mt-4 line-clamp-3 text-sm leading-relaxed text-slate-700">
                      “{item.quote}”
                    </span>
                    <span className="mt-auto flex items-center gap-3 pt-5">
                      <span>
                        <span className="block text-sm font-bold text-brand-navyDark">
                          {item.name}
                        </span>
                        <span className="mt-0.5 block text-xs text-slate-500">{item.role}</span>
                      </span>
                    </span>
                  </button>
                </li>);

            })}
          </ul>
        </div>
      </div>
    </section>);

}

type NavButtonProps = {
  label: string;
  onClick: () => void;
  children: React.ReactNode;
};

function NavButton({ label, onClick, children }: NavButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-300 text-brand-navy transition-colors duration-150 ease-out hover:border-brand-navy hover:bg-brand-navy hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy focus-visible:ring-offset-2">

      {children}
    </button>);

}