import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import { Logo } from './Logo';
import { navLinks } from '../data/site';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ease-out ${
      scrolled || open ? 'bg-brand-navyDark/95 backdrop-blur shadow-lg shadow-brand-navyDeep/20' : 'bg-transparent'}`
      }>
      
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegación principal">
          {navLinks.map((link) =>
          <a
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-white/90 transition-colors duration-150 ease-out hover:text-brand-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy">
            
              {link.label}
            </a>
          )}
          <a
            href="#contacto"
            className="rounded-md bg-brand-orange px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150 ease-out hover:bg-brand-orangeDark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
            
            Contactanos
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md text-white transition-colors duration-150 ease-out hover:bg-white/10 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}>
          
          {open ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {open &&
      <nav
        id="mobile-nav"
        className="border-t border-white/10 bg-brand-navyDark px-5 pb-6 pt-2 lg:hidden"
        aria-label="Navegación móvil">
        
          {navLinks.map((link) =>
        <a
          key={link.href}
          href={link.href}
          onClick={() => setOpen(false)}
          className="block border-b border-white/10 py-3.5 text-base font-medium text-white/90 transition-colors duration-150 ease-out hover:text-brand-orange">
          
              {link.label}
            </a>
        )}
          <a
          href="#contacto"
          onClick={() => setOpen(false)}
          className="mt-5 block rounded-md bg-brand-orange px-5 py-3 text-center text-sm font-semibold text-white transition-colors duration-150 ease-out hover:bg-brand-orangeDark">
          
            Contactanos
          </a>
        </nav>
      }
    </header>);

}