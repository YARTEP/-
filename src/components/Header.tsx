import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { company } from '@/data/content';

const navItems = [
  { to: '/', label: 'Главная' },
  { to: '/services', label: 'Услуги' },
  { to: '/about', label: 'О компании' },
  { to: '/contacts', label: 'Контакты' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-700/95 shadow-lg backdrop-blur-sm'
          : 'bg-navy-700'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
  <span className="text-lg font-bold text-white sm:text-xl">
    ЯРТЕП
  </span>
  <span className="text-lg font-bold text-gold-500 sm:text-xl">
    ТЕНДЕР
  </span>
</Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-navy-600 text-gold-400'
                      : 'text-navy-100 hover:bg-navy-600 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/request" className="btn-gold ml-3">
              Оставить заявку
            </Link>
          </nav>

          <button
            className="rounded-lg p-2 text-white transition-colors hover:bg-navy-600 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Меню"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="animate-fade-in-down border-t border-navy-600 bg-navy-700 lg:hidden">
          <nav className="mx-auto max-w-7xl space-y-1 px-4 py-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-navy-600 text-gold-400'
                      : 'text-navy-100 hover:bg-navy-600 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/request"
              onClick={() => setOpen(false)}
              className="btn-gold mt-2 w-full"
            >
              Оставить заявку
            </Link>
            <div className="mt-4 space-y-2 border-t border-navy-600 pt-4 text-sm text-navy-100">
              {company.phones.map((phone) => (
                <a key={phone} href={`tel:${phone.replace(/[^+\d]/g, '')}`} className="flex items-center gap-2">
                  <Phone size={16} className="text-gold-400" />
                  {phone}
                </a>
              ))}
              <a href={`mailto:${company.email}`} className="flex items-center gap-2">
                <Mail size={16} className="text-gold-400" />
                {company.email}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
