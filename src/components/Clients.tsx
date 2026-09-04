import { motion, useReducedMotion } from 'framer-motion';
import { clients } from '../data/site';

export function Clients() {
  const reduce = useReducedMotion();
  const track = [...clients, ...clients, ...clients, ...clients];

  return (
    <section
      aria-labelledby="clientes-title"
      className="border-b border-white/10 bg-brand-navyDeep pt-6 pb-14 lg:pt-8 lg:pb-16">

      <div className="mx-auto max-w-7xl px-5 lg:px-8 mb-14">
        <h2
          id="clientes-title"
          className="text-center text-sm font-semibold uppercase tracking-[0.18em] text-white/50">

          Empresas y emprendedores que confían en AxiA para sumar valor, ordenar su gestión y tomar decisiones con claridad y seguridad.        </h2>
      </div>

      {reduce ?
        <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-x-8 gap-y-6 px-5 sm:grid-cols-3 lg:grid-cols-6 lg:px-8">
          {clients.map((client) =>
            <li key={client.name} className="flex items-center justify-center">
              <img src={client.src} alt={client.name} className="max-h-20 w-auto object-contain" />
            </li>
          )}
        </ul> :

        <div
          className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
          role="list"
          aria-label="Clientes del estudio">

          <motion.div
            className="flex w-max items-center"
            animate={{ x: ['0%', '-25%'] }}
            transition={{ duration: 26, ease: 'linear', repeat: Infinity }}>

            {track.map((client, index) =>
              <span
                key={`${client.name}-${index}`}
                role="listitem"
                aria-hidden={index >= clients.length}
                className="group flex shrink-0 items-center justify-center w-56 sm:w-72 px-7 sm:px-10">

                <img src={client.src} alt={client.name} className="max-h-20 w-auto object-contain" />
              </span>
            )}
          </motion.div>
        </div>
      }
    </section>);

}