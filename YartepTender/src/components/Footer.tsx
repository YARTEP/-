import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { company } from '@/data/content';

const footerLinks = [
  { to: '/', label: 'Главная' },
  { to: '/services', label: 'Услуги' },
  { to: '/about', label: 'О компании' },
  { to: '/contacts', label: 'Контакты' },
  { to: '/cookie-policy', label: 'Политика cookie' },
];

export default function Footer() {
  return (
    <footer className="bg-navy-800 text-navy-100">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
  <span className="text-lg font-bold text-white">ЯРТЕП</span>
  <span className="text-lg font-bold text-[#f39c12]">ТЕНДЕР</span>
</div>
            <p className="mt-4 max-w-xs text-sm text-navy-200">
              Профессиональное заполнение заявок и полное тендерное сопровождение для организаций.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-400">
              Навигация
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-navy-200 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-400">
              Контакты
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {company.phones.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:${phone.replace(/[^+\d]/g, '')}`}
                    className="flex items-center gap-2 text-navy-200 transition-colors hover:text-white"
                  >
                    <Phone size={16} className="text-gold-400" />
                    {phone}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-2 text-navy-200 transition-colors hover:text-white"
                >
                  <Mail size={16} className="text-gold-400" />
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-navy-200">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold-400" />
                {company.address}
              </li>
              <li className="flex items-center gap-2 text-navy-200">
                <Clock size={16} className="text-gold-400" />
                {company.hours}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-700 mt-8 pt-6 text-center text-xs text-navy-200">
  <p>
    ООО «ЯРТЕП ГРУПП». ОГРН 1247600006444. Все права защищены.
  </p>
  <p className="mt-1">
    Информация на сайте носит справочный характер и не является публичной офертой (ст. 437 ГК РФ).
  </p>
</div>
      </div>
    </footer>
  );
}
