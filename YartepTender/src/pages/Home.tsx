import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, CheckCircle2 } from 'lucide-react';
import { services, company } from '@/data/content';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-700">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-700 via-navy-800 to-navy-900" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 30%, #f39c12 0%, transparent 40%), radial-gradient(circle at 80% 70%, #3a5269 0%, transparent 45%)',
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <p className="animate-fade-in mb-4 inline-flex items-center gap-2 rounded-full bg-navy-600/60 px-4 py-1.5 text-sm font-medium text-gold-400">
              Тендерное сопровождение с {company.since} года
            </p>
            <h1 className="animate-fade-in text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Поможем выиграть тендер
            </h1>
            <p className="animate-fade-in mt-6 text-lg text-navy-100 sm:text-xl">
              Профессиональное заполнение заявок и полное сопровождение для организаций.
            </p>
            <div className="animate-fade-in mt-10 flex flex-col gap-4 sm:flex-row">
              <Link to="/request" className="btn-gold">
                Оставить заявку
                <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="btn-outline border-navy-500 text-white hover:bg-navy-600 hover:border-navy-400">
                Наши услуги
              </Link>
            </div>
            <div className="animate-fade-in mt-10 flex flex-wrap gap-6 text-sm text-navy-100">
              <a href={`tel:${company.phones[0].replace(/[^+\d]/g, '')}`} className="flex items-center gap-2 hover:text-white">
                <Phone size={16} className="text-gold-400" />
                {company.phones[0]}
              </a>
              <a href={`tel:${company.phones[1].replace(/[^+\d]/g, '')}`} className="flex items-center gap-2 hover:text-white">
                <Phone size={16} className="text-gold-400" />
                {company.phones[1]}
              </a>
              <a href={`mailto:${company.email}`} className="flex items-center gap-2 hover:text-white">
                <Mail size={16} className="text-gold-400" />
                {company.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-navy-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-title">Наши услуги</h2>
            <p className="mt-4 text-lg text-navy-500">
              Полный цикл тендерного сопровождения — от поиска закупки до подписания контракта.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="card group animate-fade-in hover:-translate-y-1 hover:shadow-card-hover"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy-700 transition-colors group-hover:bg-gold-500">
                    <Icon className="text-gold-400 transition-colors group-hover:text-navy-900" size={26} />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-navy-700">{service.title}</h3>
                  <p className="mt-2 text-sm text-navy-500">{service.shortDescription}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link to="/services" className="btn-gold">
              Подробнее об услугах
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-navy-700 px-8 py-12 text-center sm:px-12 sm:py-16">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'radial-gradient(circle at 50% 50%, #f39c12 0%, transparent 50%)',
              }}
            />
            <div className="relative">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Готовы участвовать в тендерах?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-navy-100">
                Оставьте заявку — и мы свяжемся с вами в течение рабочего дня, чтобы обсудить детали.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link to="/request" className="btn-gold">
                  Оставить заявку
                  <ArrowRight size={18} />
                </Link>
                <Link to="/contacts" className="btn-outline border-navy-500 text-white hover:bg-navy-600 hover:border-navy-400">
                  Связаться с нами
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust indicators */}
      <section className="bg-navy-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              { value: `${new Date().getFullYear() - company.since}+`, label: 'лет на рынке' },
              { value: '100%', label: 'соответствие 44-ФЗ и 223-ФЗ' },
              { value: '4', label: 'направления поддержки' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex items-center justify-center gap-2 text-4xl font-bold text-gold-500">
                  <CheckCircle2 size={28} className="text-navy-700" />
                  {stat.value}
                </div>
                <p className="mt-2 text-sm text-navy-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
