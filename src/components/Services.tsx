import React from 'react';
import { BookOpenIcon, ReceiptTextIcon, UsersIcon, SearchCheckIcon, CheckIcon } from 'lucide-react';
import { services } from '../data/site';

const icons: Record<string, React.ComponentType<{className?: string;}>> = {
  contabilidad: BookOpenIcon,
  impuestos: ReceiptTextIcon,
  sueldos: UsersIcon,
  auditoria: SearchCheckIcon
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
                <h3 className="mt-6 text-lg font-bold text-brand-navyDark">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.description}</p>
                <ul className="mt-auto space-y-2 pt-6">
                  {service.bullets.map((bullet) =>
                  <li key={bullet} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" aria-hidden="true" />
                      {bullet}
                    </li>
                  )}
                </ul>
              </li>);

          })}
        </ul>
      </div>
    </section>);

}