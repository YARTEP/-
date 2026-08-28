import { useState, type FormEvent } from 'react';
import { Send, CheckCircle2, User, Building2, Phone, Mail, FileText } from 'lucide-react';
import { serviceOptions } from '@/data/content';

type FormState = {
  fullName: string;
  organization: string;
  phone: string;
  email: string;
  serviceType: string;
  description: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialForm: FormState = {
  fullName: '',
  organization: '',
  phone: '',
  email: '',
  serviceType: '',
  description: '',
};

export default function Request() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [sent, setSent] = useState(false);

  const validate = (): boolean => {
    const next: FormErrors = {};
    if (!form.fullName.trim()) next.fullName = 'Укажите ФИО';
    if (!form.organization.trim()) next.organization = 'Укажите организацию';
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
    if (!form.serviceType) next.serviceType = 'Выберите тип услуги';
    if (!form.description.trim()) next.description = 'Опишите задачу';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSent(true);
      setForm(initialForm);
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
          <h1 className="text-4xl font-bold text-white">Оставить заявку</h1>
          <p className="mt-4 max-w-2xl text-lg text-navy-100">
            Заполните форму, и наш специалист свяжется с вами для уточнения деталей и расчёта стоимости.
          </p>
        </div>
      </section>

      <section className="bg-navy-50 py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {sent ? (
            <div className="card flex flex-col items-center px-6 py-12 text-center">
              <CheckCircle2 className="text-green-600" size={56} />
              <h2 className="mt-5 text-2xl font-bold text-navy-700">Заявка отправлена!</h2>
              <p className="mt-2 text-navy-500">
                Спасибо за обращение. Мы свяжемся с вами в течение рабочего дня по указанным контактам.
              </p>
              <button
                onClick={() => setSent(false)}
                className="btn-gold mt-8"
              >
                Отправить ещё одну заявку
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card space-y-6" noValidate>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-navy-600">ФИО</label>
                  <div className="relative">
                    <User className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-navy-300" size={18} />
                    <input
                      type="text"
                      value={form.fullName}
                      onChange={(e) => update('fullName', e.target.value)}
                      className="input-field pl-10"
                      placeholder="Иванов Иван Иванович"
                    />
                  </div>
                  {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>}
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-navy-600">Организация</label>
                  <div className="relative">
                    <Building2 className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-navy-300" size={18} />
                    <input
                      type="text"
                      value={form.organization}
                      onChange={(e) => update('organization', e.target.value)}
                      className="input-field pl-10"
                      placeholder="ООО «Название»"
                    />
                  </div>
                  {errors.organization && <p className="mt-1 text-xs text-red-500">{errors.organization}</p>}
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-navy-600">Телефон</label>
                  <div className="relative">
                    <Phone className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-navy-300" size={18} />
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      className="input-field pl-10"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-navy-600">Email</label>
                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-navy-300" size={18} />
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      className="input-field pl-10"
                      placeholder="example@mail.ru"
                    />
                  </div>
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-navy-600">Тип услуги</label>
                <div className="relative">
                  <FileText className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-navy-300" size={18} />
                  <select
                    value={form.serviceType}
                    onChange={(e) => update('serviceType', e.target.value)}
                    className="input-field appearance-none pl-10"
                  >
                    <option value="">Выберите услугу</option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.serviceType && <p className="mt-1 text-xs text-red-500">{errors.serviceType}</p>}
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-navy-600">Описание задачи</label>
                <textarea
                  value={form.description}
                  onChange={(e) => update('description', e.target.value)}
                  rows={5}
                  className="input-field resize-none"
                  placeholder="Опишите вашу задачу, интересующую закупку или вопрос"
                />
                {errors.description && <p className="mt-1 text-xs text-red-500">{errors.description}</p>}
              </div>

              <button type="submit" className="btn-gold w-full">
                <Send size={18} />
                Отправить заявку
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
