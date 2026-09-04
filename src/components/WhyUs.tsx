import { ArrowRightIcon } from 'lucide-react';
import { stats } from '../data/site';

const TEAM_IMAGE = "/b52b2173-351d-42f0-9ff2-b5ae3f644a54.jpg";


export function WhyUs() {
  return (
    <section id="nosotros" className="bg-slate-50 py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-navyDark sm:text-4xl">
            Por qué elegirnos
          </h2>
          <div className="mt-4 space-y-4 text-lg leading-relaxed text-slate-600">
            <p>
              Somos un equipo de jóvenes profesionales con más de siete años de experiencia en impuestos, contabilidad, auditoría y gestión empresarial. Combinamos una visión moderna y estratégica para convertir la contabilidad en una herramienta de conocimiento y crecimiento.
            </p>
            <p>
              En AxiA acompañamos con cercanía a emprendedores, negocios en expansión y empresas consolidadas que buscan una gestión contable innovadora y eficiente.
            </p>
          </div>

          <a
            href="#contacto"
            className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy transition-colors duration-150 ease-out hover:text-brand-orange">

            Hablemos de tu empresa
            <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="relative">
          <img
            src={TEAM_IMAGE}
            alt="Equipo del estudio contable analizando documentación financiera en la oficina"
            className="w-full rounded-lg object-cover shadow-2xl shadow-brand-navy/20" />

          <dl className="mt-6 grid grid-cols-3 divide-x divide-slate-200 rounded-lg border border-slate-200 bg-white py-6 sm:absolute sm:-bottom-10 sm:left-8 sm:right-8 sm:mt-0 sm:shadow-xl">
            {stats.map((stat) =>
              <div key={stat.label} className="px-3 text-center">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block text-2xl font-extrabold text-brand-navy">{stat.value}</span>
                  <span className="mt-1 block text-xs leading-snug text-slate-500">{stat.label}</span>
                </dd>
              </div>
            )}
          </dl>
        </div>
      </div>
    </section>);

}