import { Cookie } from 'lucide-react';

const sections = [
  {
    title: 'Что такое cookie',
    body: 'Cookie — это небольшие текстовые файлы, которые веб-сайты сохраняют в браузере пользователя. Они позволяют сайту запоминать ваши действия и предпочтения в течение определённого времени.',
  },
  {
    title: 'Какие cookie мы используем',
    body: 'Мы используем необходимые cookie, обеспечивающие корректную работу сайта, а также аналитические cookie, помогающие понять, как посетители пользуются сайтом, чтобы улучшить его содержание и структуру.',
  },
  {
    title: 'Управление cookie',
    body: 'Вы можете отключить использование cookie в настройках вашего браузера. Однако это может повлиять на работу некоторых функций сайта. При первом посещении мы запрашиваем ваше согласие на использование cookie, и вы можете отозвать его в любой момент, удалив сохранённые cookie.',
  },
  {
    title: 'Хранение согласия',
    body: 'Ваше согласие на использование cookie сохраняется в локальном хранилище браузера (localStorage) и действительно до тех пор, пока вы не очистите данные браузера или не удалите запись вручную.',
  },
  {
    title: 'Контактная информация',
    body: 'Если у вас есть вопросы о политике использования cookie, свяжитесь с нами по электронной почте yartep_group@mail.ru или по телефону +7 (910) 824-81-46.',
  },
];

export default function CookiePolicy() {
  return (
    <>
      <section className="bg-navy-700 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Cookie className="text-gold-400" size={32} />
            <h1 className="text-4xl font-bold text-white">Политика cookie</h1>
          </div>
          <p className="mt-4 max-w-2xl text-lg text-navy-100">
            Информация о том, как сайт «ЯРТЕП ТЕНДЕР» использует cookie-файлы.
          </p>
        </div>
      </section>

      <section className="bg-navy-50 py-20">
        <div className="mx-auto max-w-3xl space-y-10 px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-navy-400">
            Дата последнего обновления: {new Date().toLocaleDateString('ru-RU')}
          </p>
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-xl font-bold text-navy-700">{section.title}</h2>
              <p className="mt-3 leading-relaxed text-navy-500">{section.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
