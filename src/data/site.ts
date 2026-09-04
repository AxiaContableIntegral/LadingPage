export const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Etapas', href: '#etapas' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Testimonios', href: '#testimonios' }
];


export type Service = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
};

export const services: Service[] = [
  {
    id: 'asesoramiento',
    title: 'Asesoramiento Integral',
    subtitle: 'Un socio estratégico en tu crecimiento',
    description:
      'Te acompañamos en la organización integral de tu negocio, brindando asesoramiento y claridad para una gestión eficiente y una posición competitiva sostenible.'
  },
  {
    id: 'impositiva',
    title: 'Área Impositiva',
    subtitle: 'Impuestos en orden, negocio en movimiento',
    description:
      'Diseñamos estrategias fiscales inteligentes para optimizar tu gestión impositiva, cuidar tu rentabilidad y mantener tus obligaciones siempre al día.'
  },
  {
    id: 'contable',
    title: 'Área Contable',
    subtitle: 'Convertimos tus números en decisiones',
    description:
      'Ordenamos tu información contable para brindarte una visión real, decisiones acertadas y cumplimiento seguro. Transformamos datos en estrategia.'
  },
  {
    id: 'capital-humano',
    title: 'Área Capital Humano',
    subtitle: 'Tu equipo, siempre en regla',
    description:
      'Gestionamos sueldos, cargas sociales y documentación laboral, garantizando cumplimiento y confianza en tu equipo.'
  }];


export const stats = [
  { value: '+7', label: 'años de trayectoria' },
  { value: '+10', label: 'empresas asesoradas' },
  { value: '100%', label: 'vencimientos en fecha' }];


export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 'smash',
    quote:
      'El equipo de AXIA es impecable. Agustín y su gente nos ordenaron todo con una claridad y una rapidez impresionante. Hoy trabajamos con mucha más tranquilidad, entendiendo exactamente dónde estamos parados y qué decisiones conviene tomar en cada momento. Su acompañamiento nos dio seguridad, estructura y una forma de gestionar el negocio mucho más profesional. Realmente marcan la diferencia.',
    name: 'Franco Indragoli',
    role: 'CEO de Smash Club',
    initials: 'FI'
  },
  {
    id: 'jd1',
    quote:
      'AXIA nos cambió la manera de gestionar el negocio. Agustín y su equipo tomaron nuestra información, la ordenaron con una claridad increíble y nos dieron procesos que hoy usamos todos los días. Pasamos de la incertidumbre a tener un panorama preciso y decisiones mucho más seguras. Su forma de trabajar transmite profesionalismo, compromiso y una tranquilidad que vale oro. Son un verdadero aliado.',
    name: 'John Doe',
    role: 'CEO',
    initials: 'JD'
  },
  {
    id: 'jd2',
    quote:
      'La experiencia con AXIA fue excepcional. Agustín y su equipo detectaron rápido lo que necesitábamos y nos organizaron todo con metodología y transparencia. Hoy entendemos mejor nuestros números, planificamos con más criterio y sentimos respaldo en cada decisión importante. La combinación de su técnica, su cercanía y su velocidad de respuesta hace que realmente marquen la diferencia.',
    name: 'John Doe',
    role: 'CEO',
    initials: 'JD'
  }];


export type Client = { name: string; src: string };

export const clients: Client[] = [
  { name: 'Berco Wines', src: '/Imagenes/BercoWines.webp' },
  { name: 'Grandes Talentos', src: '/Imagenes/GrandesTalentos.webp' },
  { name: 'Grupo Powing', src: '/Imagenes/GrupoPowing.webp' },
  { name: 'JOVEN', src: '/Imagenes/JOVEN.webp' },
  { name: 'Reda', src: '/Imagenes/Reda.webp' },
  { name: 'Smash Club', src: '/Imagenes/SmashClub.webp' },
];


export const contactInfo = {
  address: 'Av. Corrientes 1250, Piso 6 — CABA, Argentina',
  phone: '+54 2622 68-5201',
  phoneHref: 'https://wa.me/542622685201',
  email: 'agustinh@axiacontableintegral.com',
  hours: 'Lunes a viernes, 9:00 a 18:00 h'
};