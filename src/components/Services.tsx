import React from 'react';
import { BookOpenIcon, ReceiptTextIcon, UsersIcon, BriefcaseIcon } from 'lucide-react';
import { services } from '../data/site';

const icons: Record<string, React.ComponentType<{className?: string;}>> = {
  asesoramiento: BriefcaseIcon,
  impositiva: ReceiptTextIcon,
  contable: BookOpenIcon,
  'capital-humano': UsersIcon
};

export function Services() {
  return (
    <section id="servicios" className="bg-white py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-navyDark sm:text-4xl">
            Servicios
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Cuatro áreas que trabajan coordinadas para que tu empresa cumpla, ordene y crezca.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = icons[service.id];
            return (
              <li
                key={service.id}
                className="group flex flex-col rounded-lg border border-slate-200 bg-white p-7 transition-[box-shadow,border-color,transform] duration-200 ease-out hover:-translate-y-1 hover:border-brand-navy/30 hover:shadow-xl hover:shadow-brand-navy/10">
                
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-brand-navySoft text-brand-navy transition-colors duration-200 ease-out group-hover:bg-brand-navy group-hover:text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-xl font-bold text-brand-navyDark text-balance">{service.title}</h3>
                <span className="mt-1 block text-sm font-semibold text-brand-orange text-balance">{service.subtitle}</span>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 text-pretty">{service.description}</p>
              </li>);

          })}
        </ul>
      </div>
    </section>);

}