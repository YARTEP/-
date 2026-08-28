import { Link } from 'react-router-dom';
import { Target, Users, ArrowRight, Award } from 'lucide-react';
import { company } from '@/data/content';

export default function About() {
  return (
    <>
      <section className="bg-navy-700 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white">О компании</h1>
          <p className="mt-4 max-w-2xl text-lg text-navy-100">
            {company.name} — команда экспертов в области тендерного сопровождения.
          </p>
        </div>
      </section>

      {/* History */}
      <section className="bg-navy-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="flex items-center gap-3">
                <Award className="text-gold-500" size={28} />
                <span className="text-sm font-semibold uppercase tracking-wider text-gold-600">
                  История
                </span>
              </div>
              <h2 className="mt-4 text-3xl font-bold text-navy-700">
                С {company.since} года на рынке тендерного сопровождения
              </h2>
              <p className="mt-6 text-lg text-navy-500">
                Компания «ЯРТЕП ТЕНДЕР» работает на рынке тендерного сопровождения с {company.since} года. Помогаем организациям выигрывать государственные и коммерческие тендеры.
              </p>
              <p className="mt-4 text-navy-500">
                За годы работы мы накопили опыт в самых разных отраслях: от поставок оборудования до строительных подрядов. Знаем типичные ошибки участников и помогаем их избежать.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: `${new Date().getFullYear() - company.since}+`, label: 'лет опыта' },
                { value: '44-ФЗ', label: 'и 223-ФЗ' },
                { value: 'ФАС', label: 'защита интересов' },
                { value: '100%', label: 'внимание к деталям' },
              ].map((item) => (
                <div key={item.label} className="card text-center">
                  <div className="text-3xl font-bold text-gold-500">{item.value}</div>
                  <p className="mt-2 text-sm text-navy-500">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-navy-700">
            <Target className="text-gold-400" size={30} />
          </div>
          <h2 className="mt-6 text-3xl font-bold text-navy-700">Наша миссия</h2>
          <p className="mt-6 text-xl text-navy-500">
            Делаем тендеры доступными и прозрачными для каждого бизнеса.
          </p>
          <p className="mt-4 text-navy-500">
            Мы убираем бюрократические барьеры между организацией и государственным или коммерческим заказом, чтобы вы могли сосредоточиться на своей работе, а не на бумагах.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy-700">Хотите работать с нами?</h2>
          <p className="mt-4 text-navy-500">Оставьте заявку, и мы обсудим, как можем помочь вашей организации.</p>
          <Link to="/request" className="btn-gold mt-8">
            Оставить заявку
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
