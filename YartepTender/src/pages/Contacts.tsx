import { useState, type FormEvent } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { company } from '@/data/content';

type FormState = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

export default function Contacts() {
  const [form, setForm] = useState<FormState>({ name: '', phone: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [sent, setSent] = useState(false);

  const validate = (): boolean => {
    const next: FormErrors = {};
    if (!form.name.trim()) next.name = 'Укажите имя';
    if (!form.phone.trim()) {
      next.phone = 'Укажите телефон';
    } else if (!/^[\d\s+()-]{6,}$/.test(form.phone.trim())) {
      next.phone = 'Неверный формат телефона';
    }
    if (!form.email.trim()) {
      next.email = 'Укажите email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = 'Неверный формат email';
    }
    if (!form.message.trim()) next.message = 'Введите сообщение';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSent(true);
      setForm({ name: '', phone: '', email: '', message: '' });
    }
  };

  const update = (key: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  return (
    <>
      <section className="bg-navy-700 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white">Контакты</h1>
          <p className="mt-4 max-w-2xl text-lg text-navy-100">
            Свяжитесь с нами любым удобным способом — мы ответим на все вопросы по тендерному сопровождению.
          </p>
        </div>
      </section>

      <section className="bg-navy-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-bold text-navy-700">Реквизиты</h2>
              <ul className="mt-6 space-y-5">
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-700">
                    <Phone className="text-gold-400" size={20} />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-navy-400">Телефоны</p>
                    {company.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/[^+\d]/g, '')}`}
                        className="block text-navy-700 transition-colors hover:text-gold-600"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-700">
                    <Mail className="text-gold-400" size={20} />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-navy-400">Email</p>
                    <a
                      href={`mailto:${company.email}`}
                      className="text-navy-700 transition-colors hover:text-gold-600"
                    >
                      {company.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-700">
                    <MapPin className="text-gold-400" size={20} />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-navy-400">Адрес</p>
                    <p className="text-navy-700">{company.address}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-700">
                    <Clock className="text-gold-400" size={20} />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-navy-400">График работы</p>
                    <p className="text-navy-700">{company.hours}</p>
                  </div>
                </li>
              </ul>

              {/* Map placeholder */}
              <div className="mt-8 overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-card">
                <div className="flex h-64 items-center justify-center bg-navy-100">
                  <div className="text-center">
                    <MapPin className="mx-auto text-navy-400" size={40} />
                    <p className="mt-3 text-sm text-navy-500">{company.address}</p>
                    <p className="mt-1 text-xs text-navy-400">Карта будет добавлена позже</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="card">
              <h2 className="text-2xl font-bold text-navy-700">Форма обратной связи</h2>
              <p className="mt-2 text-sm text-navy-500">
                Заполните форму, и мы перезвоним вам в течение рабочего дня.
              </p>

              {sent ? (
                <div className="mt-6 flex flex-col items-center rounded-xl bg-green-50 px-6 py-10 text-center">
                  <CheckCircle2 className="text-green-600" size={48} />
                  <p className="mt-4 text-lg font-semibold text-green-700">Сообщение отправлено!</p>
                  <p className="mt-1 text-sm text-green-600">Мы свяжемся с вами в ближайшее время.</p>
                  <button
                    onClick={() => setSent(false)}
                    className="btn-outline mt-6 border-green-300 text-green-700 hover:bg-green-50"
                  >
                    Отправить ещё одно
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-navy-600">Имя</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      className="input-field"
                      placeholder="Как к вам обращаться"
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-navy-600">Телефон</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      className="input-field"
                      placeholder="+7 (___) ___-__-__"
                    />
                    {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-navy-600">Email</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      className="input-field"
                      placeholder="example@mail.ru"
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-navy-600">Сообщение</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => update('message', e.target.value)}
                      rows={4}
                      className="input-field resize-none"
                      placeholder="Опишите ваш вопрос"
                    />
                    {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                  </div>
                  <button type="submit" className="btn-gold w-full">
                    <Send size={18} />
                    Отправить
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
