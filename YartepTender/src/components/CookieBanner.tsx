import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Cookie } from 'lucide-react';

const STORAGE_KEY = 'yartep-cookie-consent';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 animate-slide-up">
      <div className="mx-auto max-w-7xl px-4 pb-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-4 rounded-xl border border-navy-100 bg-white p-5 shadow-card-hover sm:flex-row sm:items-center">
          <div className="flex flex-1 items-start gap-3">
            <Cookie className="mt-0.5 shrink-0 text-gold-500" size={24} />
            <p className="text-sm text-navy-600">
              Мы используем cookie для корректной работы сайта. Продолжая, вы соглашаетесь с{' '}
              <Link to="/cookie-policy" className="font-medium text-gold-600 underline hover:text-gold-700">
                политикой использования cookie
              </Link>
              .
            </p>
          </div>
          <button onClick={accept} className="btn-gold shrink-0">
            Принять
          </button>
        </div>
      </div>
    </div>
  );
}
