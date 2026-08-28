import { Link } from 'react-router-dom';
import { Home as HomeIcon } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-navy-50 px-4">
      <div className="text-center">
        <p className="text-7xl font-bold text-gold-500">404</p>
        <h1 className="mt-4 text-2xl font-bold text-navy-700">Страница не найдена</h1>
        <p className="mt-2 text-navy-500">К сожалению, запрошенная страница не существует.</p>
        <Link to="/" className="btn-gold mt-8">
          <HomeIcon size={18} />
          На главную
        </Link>
      </div>
    </section>
  );
}
