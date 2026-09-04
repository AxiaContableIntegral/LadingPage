import React from 'react';
import { InstagramIcon } from 'lucide-react';
import { Logo } from './Logo';
import { navLinks, services, contactInfo } from '../data/site';

const socials = [
{ label: 'Instagram', href: 'https://www.instagram.com/axia.contableintegral?igsi=MXEyeWY1NzgweWxhbw==', Icon: InstagramIcon }];


export function Footer() {
  return (
    <footer className="bg-brand-navyDeep">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
              Estudio contable y de asesoramiento integral para pymes, profesionales y emprendedores
              en Argentina.
            </p>
            <ul className="mt-6 flex gap-3">
              {socials.map(({ label, href, Icon }) =>
              <li key={label}>
                  <a
                  href={href}
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/10 text-white transition-colors duration-150 ease-out hover:bg-brand-orange">
                  
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Enlaces</h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) =>
              <li key={link.href}>
                  <a
                  href={link.href}
                  className="text-sm text-white/65 transition-colors duration-150 ease-out hover:text-brand-orange">
                  
                    {link.label}
                  </a>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Servicios</h3>
            <ul className="mt-4 space-y-3">
              {services.map((service) =>
              <li key={service.id}>
                  <a
                  href="#servicios"
                  className="text-sm text-white/65 transition-colors duration-150 ease-out hover:text-brand-orange">
                  
                    {service.title}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Axia Contable Integral. Todos los derechos reservados.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="#" className="transition-colors duration-150 ease-out hover:text-white">
              Política de privacidad
            </a>
            <a href="#" className="transition-colors duration-150 ease-out hover:text-white">
              Términos y condiciones
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="transition-colors duration-150 ease-out hover:text-white">
              
              {contactInfo.email}
            </a>
          </div>
        </div>
      </div>
    </footer>);

}