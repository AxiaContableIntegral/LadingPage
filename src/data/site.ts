export const navLinks = [
{ label: 'Inicio', href: '#inicio' },
{ label: 'Servicios', href: '#servicios' },
{ label: 'Nosotros', href: '#nosotros' },
{ label: 'Contacto', href: '#contacto' }];


export type Service = {
  id: string;
  title: string;
  description: string;
  bullets: string[];
};

export const services: Service[] = [
{
  id: 'contabilidad',
  title: 'Contabilidad',
  description:
  'Registración, balances y estados contables al día para que tomes decisiones sobre números confiables.',
  bullets: ['Balances y cierres', 'Conciliaciones bancarias', 'Reportes de gestión']
},
{
  id: 'impuestos',
  title: 'Impuestos',
  description:
  'Planificación y presentación de tus obligaciones nacionales y provinciales, sin sobresaltos ni intereses.',
  bullets: ['IVA y Ganancias', 'Ingresos Brutos', 'Planificación fiscal']
},
{
  id: 'sueldos',
  title: 'Liquidación de Sueldos',
  description:
  'Nóminas, cargas sociales y legajos gestionados con precisión y dentro de cada vencimiento.',
  bullets: ['Recibos y F.931', 'Altas y bajas', 'Convenios colectivos']
},
{
  id: 'auditoria',
  title: 'Auditoría',
  description:
  'Revisión independiente de tus procesos y estados financieros para detectar riesgos antes que te encuentren.',
  bullets: ['Auditoría de estados', 'Control interno', 'Informes especiales']
}];


export const reasons = [
{
  title: 'Un equipo, todas tus obligaciones',
  text: 'Contabilidad, impuestos, sueldos y auditoría bajo una misma coordinación. Un solo interlocutor, cero información perdida entre estudios.'
},
{
  title: 'Respuesta en menos de 24 horas',
  text: 'Cada cliente tiene un contador asignado que conoce su empresa y responde consultas por el canal que prefieras.'
},
{
  title: 'Mirada estratégica, no solo cumplimiento',
  text: 'Además de cumplir los vencimientos, traducimos tus números en decisiones: rentabilidad, costos y proyección de caja.'
}];


export const stats = [
{ value: '+15', label: 'años de trayectoria' },
{ value: '+180', label: 'empresas asesoradas' },
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
  id: 'nordelta',
  quote:
  'Llegamos con tres años de balances atrasados y una inspección encima. En seis meses Axia ordenó toda la contabilidad, negoció el plan de pagos y hoy cerramos cada mes en fecha. Es el único proveedor que nunca tuve que perseguir.',
  name: 'Mariana Rosetti',
  role: 'Socia gerente, Nordelta Logística',
  initials: 'MR'
},
{
  id: 'vertice',
  quote:
  'La liquidación de sueldos de 40 empleados dejó de ser un problema de fin de mes. Todo llega revisado y a tiempo.',
  name: 'Diego Almada',
  role: 'Director, Vértice Construcciones',
  initials: 'DA'
},
{
  id: 'tramo',
  quote:
  'Nos explican los números en un idioma que entendemos. Por primera vez tomamos decisiones de precios con datos reales.',
  name: 'Lucía Ferreyra',
  role: 'Fundadora, Tramo Estudio',
  initials: 'LF'
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
  phone: '+54 11 4321 5678',
  phoneHref: 'tel:+541143215678',
  email: 'contacto@axiacontableintegral.com',
  hours: 'Lunes a viernes, 9:00 a 18:00 h'
};