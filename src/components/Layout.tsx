import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CookieBanner from './CookieBanner';

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-navy-50">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CookieBanner />
      <ScrollRestoration />
    </div>
  );
}
