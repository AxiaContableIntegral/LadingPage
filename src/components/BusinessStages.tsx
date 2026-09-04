import { motion } from 'framer-motion';
import { RocketIcon, TrendingUpIcon, BuildingIcon, ArrowRightIcon } from 'lucide-react';

const stages = [
  {
    title: 'Emprendedores que recién comienzan',
    description: 'Formalizá tu proyecto, organizá tus números y empezá con bases sólidas para crecer.',
    Icon: RocketIcon,
  },
  {
    title: 'Negocios en crecimiento',
    description: 'Profesionalizá tu gestión, ganá control y optimizá la rentabilidad para dar el siguiente paso.',
    Icon: TrendingUpIcon,
  },
  {
    title: 'Empresas consolidadas',
    description: 'Innovación contable, fiscal y laboral para optimizar procesos y potenciar resultados.',
    Icon: BuildingIcon,
  }
];

export function BusinessStages() {
  return (
    <section id="etapas" className="bg-brand-navyDark py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-brand-navyDeep/80" aria-hidden="true" />

      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 opacity-20 blur-3xl rounded-full w-[40rem] h-[40rem] bg-brand-orange" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 opacity-20 blur-3xl rounded-full w-[30rem] h-[30rem] bg-brand-navy" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            ¿En qué etapa está tu negocio?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/70">
            Acompañamos tu desarrollo con soluciones diseñadas a medida para el momento exacto en el que te encontrás.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stages.map((stage, index) => (
            <motion.div
              key={stage.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="group relative flex flex-col rounded-2xl bg-white/5 border border-white/10 p-8 backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:bg-white/10 hover:border-brand-orange/50 hover:shadow-2xl hover:shadow-brand-orange/20"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange transition-colors duration-300 group-hover:bg-brand-orange group-hover:text-white">
                <stage.Icon className="h-7 w-7" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{stage.title}</h3>
              <p className="text-white/70 leading-relaxed flex-grow">
                {stage.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-20 flex flex-col items-center text-center"
        >
          <p className="text-white/80 text-lg mb-6">
            ¿No estás seguro cuál es tu perfil o qué servicio necesitás?
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-brand-navyDark transition-all duration-200 ease-out hover:bg-brand-orange hover:text-white hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navyDark shadow-lg shadow-black/20"
          >
            Hablemos de tu empresa
            <ArrowRightIcon className="h-5 w-5" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
