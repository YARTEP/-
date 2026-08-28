import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { services } from '@/data/content';

export default function Services() {
  return (
    <>
      <section className="bg-navy-700 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white">Услуги</h1>
          <p className="mt-4 max-w-2xl text-lg text-navy-100">
            Полный спектр услуг по тендерному сопровождению. Цена каждой услуги определяется по запросу в зависимости от сложности закупки.
          </p>
        </div>
      </section>

      <section className="bg-navy-50 py-20">
        <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            const reversed = i % 2 === 1;
            return (
              <div
                key={service.id}
                id={service.id}
                className="card grid gap-8 lg:grid-cols-2 lg:items-center"
              >
                <div className={reversed ? 'lg:order-2' : ''}>
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-navy-700">
                    <Icon className="text-gold-400" size={30} />
                  </div>
                  <h2 className="mt-6 text-2xl font-bold text-navy-700">{service.title}</h2>
                  <p className="mt-4 text-navy-500">{service.fullDescription}</p>
                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <Link to="/request" className="btn-gold">
                      Заказать
                      <ArrowRight size={18} />
                    </Link>
                    <span className="text-sm font-medium text-navy-400">Цена — по запросу</span>
                  </div>
                </div>

                <div className={reversed ? 'lg:order-1' : ''}>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 rounded-lg bg-navy-50 px-4 py-3">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-500">
                          <Check className="text-navy-900" size={14} />
                        </span>
                        <span className="text-sm text-navy-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
