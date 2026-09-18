import React, { useState } from 'react';
import { AlertCircleIcon, CheckCircle2Icon, Loader2Icon, SendIcon } from 'lucide-react';
import emailjs from '@emailjs/browser';

type Fields = {
  nombre: string;
  email: string;
  telefono: string;
  mensaje: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = { nombre: '', email: '', telefono: '', mensaje: '' };

function validate(values: Fields): Errors {
  const errors: Errors = {};
  if (!values.nombre.trim()) errors.nombre = 'Ingresá tu nombre.';
  if (!values.email.trim()) errors.email = 'Ingresá tu email.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email)) errors.email = 'El email no parece válido.';
  if (values.telefono.trim() && values.telefono.trim().length < 6)
    errors.telefono = 'Ingresá un teléfono válido.';
  if (values.mensaje.trim().length < 10) errors.mensaje = 'Contanos un poco más (mínimo 10 caracteres).';
  return errors;
}

const inputClass =
  'w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-colors duration-150 ease-out focus:border-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-navy/20';

export function ContactForm() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const update = (field: keyof Fields) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues((prev) => ({ ...prev, [field]: event.target.value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage(null);
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.warn('EmailJS keys are missing in .env');
      setErrorMessage(
        'Faltan configurar las claves de EmailJS en el archivo .env del proyecto.'
      );
      return;
    }

    setStatus('sending');

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          nombre: values.nombre,
          name: values.nombre,
          email: values.email,
          telefono: values.telefono || 'No especificado',
          phone: values.telefono || 'No especificado',
          mensaje: values.mensaje,
          message: values.mensaje,
        },
        publicKey
      );
      setStatus('sent');
      setValues(empty);
    } catch (err) {
      console.error('Error al enviar con EmailJS:', err);
      setErrorMessage(
        'Hubo un problema al enviar tu consulta. Por favor intentá nuevamente o contactanos directamente por WhatsApp.'
      );
      setStatus('idle');
    }
  };

  if (status === 'sent') {
    return (
      <div className="flex h-full flex-col items-start justify-center rounded-lg border border-slate-200 bg-white p-10 shadow-sm">
        <CheckCircle2Icon className="h-10 w-10 text-brand-orange" aria-hidden="true" />
        <h3 className="mt-5 text-xl font-bold text-brand-navyDark">Recibimos tu consulta</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          Un contador del estudio se va a comunicar con vos dentro de las próximas 24 horas hábiles.
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus('idle');
            setErrorMessage(null);
          }}
          className="mt-6 text-sm font-semibold text-brand-navy transition-colors duration-150 ease-out hover:text-brand-orange">
          Enviar otra consulta
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-lg border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
      
      <h3 className="text-xl font-bold text-brand-navyDark">Escribinos</h3>
      <p className="mt-2 text-sm text-slate-600">
        Completá el formulario y coordinamos una primera reunión sin cargo.
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <Field id="nombre" label="Nombre y apellido" error={errors.nombre}>
          <input
            id="nombre"
            name="nombre"
            type="text"
            autoComplete="name"
            value={values.nombre}
            onChange={update('nombre')}
            placeholder="María Gómez"
            className={inputClass}
            aria-invalid={Boolean(errors.nombre)} />
          
        </Field>

        <Field id="telefono" label="Teléfono" optional error={errors.telefono}>
          <input
            id="telefono"
            name="telefono"
            type="tel"
            autoComplete="tel"
            value={values.telefono}
            onChange={update('telefono')}
            placeholder="+54 11 5555 5555"
            className={inputClass}
            aria-invalid={Boolean(errors.telefono)} />
          
        </Field>

        <div className="sm:col-span-2">
          <Field id="email" label="Email" error={errors.email}>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={values.email}
              onChange={update('email')}
              placeholder="maria@empresa.com"
              className={inputClass}
              aria-invalid={Boolean(errors.email)} />
            
          </Field>
        </div>

        <div className="sm:col-span-2">
          <Field id="mensaje" label="Mensaje" error={errors.mensaje}>
            <textarea
              id="mensaje"
              name="mensaje"
              rows={5}
              value={values.mensaje}
              onChange={update('mensaje')}
              placeholder="Contanos brevemente qué necesitás: contabilidad, impuestos, sueldos, auditoría…"
              className={`${inputClass} resize-y`}
              aria-invalid={Boolean(errors.mensaje)} />
            
          </Field>
        </div>
      </div>

      {errorMessage && (
        <div className="mt-5 flex items-start gap-3 rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          <AlertCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-red-500" aria-hidden="true" />
          <p>{errorMessage}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand-orange px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-150 ease-out hover:bg-brand-orangeDark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto">
        
        {status === 'sending' ?
        <>
            <Loader2Icon className="h-4 w-4 animate-spin" aria-hidden="true" />
            Enviando…
          </> :

        <>
            <SendIcon className="h-4 w-4" aria-hidden="true" />
            Enviar consulta
          </>
        }
      </button>
      <p className="mt-3 text-xs text-slate-500">
        Tus datos se usan únicamente para responder tu consulta.
      </p>
    </form>);

}

type FieldProps = {
  id: string;
  label: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
};

function Field({ id, label, error, optional, children }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-slate-800">
        {label}
        {optional && <span className="ml-1 font-normal text-slate-400">(opcional)</span>}
      </label>
      {children}
      {error &&
      <p className="mt-1.5 text-xs font-medium text-red-600" role="alert">
          {error}
        </p>
      }
    </div>);

}