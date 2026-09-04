import React from 'react';
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon } from 'lucide-react';
import { ContactForm } from './ContactForm';
import { contactInfo } from '../data/site';

const MAP_SRC =
'https://www.google.com/maps?q=Av.%20Corrientes%201250,%20CABA,%20Argentina&output=embed';

export function Contact() {
  return (
    <section id="contacto" className="bg-brand-navyDark py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Contacto</h2>
          <p className="mt-4 text-lg leading-relaxed text-white/75">
            Contanos qué necesita tu empresa y te respondemos en menos de 24 horas hábiles.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <ContactForm />

          <div className="flex flex-col gap-8">
            <ul className="space-y-6">
              <InfoItem icon={MapPinIcon} label="Dirección">
                {contactInfo.address}
              </InfoItem>
              <InfoItem icon={PhoneIcon} label="Teléfono">
                <a
                  href={contactInfo.phoneHref}
                  className="transition-colors duration-150 ease-out hover:text-brand-orange">
                  
                  {contactInfo.phone}
                </a>
              </InfoItem>
              <InfoItem icon={MailIcon} label="Email">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="break-all transition-colors duration-150 ease-out hover:text-brand-orange">
                  
                  {contactInfo.email}
                </a>
              </InfoItem>
              <InfoItem icon={ClockIcon} label="Horario de atención">
                {contactInfo.hours}
              </InfoItem>
            </ul>

            <div className="overflow-hidden rounded-lg border border-white/15">
              <iframe
                title="Mapa con la ubicación del estudio"
                src={MAP_SRC}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full border-0 lg:h-72" />
              
            </div>
          </div>
        </div>
      </div>
    </section>);

}

type InfoItemProps = {
  icon: React.ComponentType<{className?: string;}>;
  label: string;
  children: React.ReactNode;
};

function InfoItem({ icon: Icon, label, children }: InfoItemProps) {
  return (
    <li className="flex gap-4">
      <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white/10 text-brand-orange">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-white/50">{label}</p>
        <p className="mt-1 text-base leading-relaxed text-white">{children}</p>
      </div>
    </li>);

}