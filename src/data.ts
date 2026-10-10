// ← Заполни свои контакты. Пустые поля скрываются автоматически.
export const CONTACT = {
  github: 'https://github.com/NEST-MODEL',
  telegram: 'https://t.me/lyohacray',
  whatsapp: '',
  instagram: '', // например 'https://instagram.com/username'
  email: '', // например 'hello@example.com'
}

export type Project = {
  slug: string
  name: string
  kind: string
  desc: string
  tags: string[]
  url: string
  theme: 'formula' | 'fitness' | 'bupy' | 'beauty' | 'rimma' | 'qara'
  shots?: string[] // файлы из public/shots
  featured?: boolean
}

export const PROJECTS: Project[] = [
  {
    slug: 'formulabonus',
    name: 'Formula Bonus',
    kind: 'Веб-приложение · флагман',
    desc: 'Программа лояльности для фитнес-клуба: клиентское приложение на телефоне и админ-панель на компьютере. Бонусы, магазин наград, рефералы, QR-коды, аналитика.',
    tags: ['React', 'TypeScript', 'Supabase', 'PWA'],
    url: 'https://nest-model.github.io/formulabonus/',
    theme: 'formula',
    featured: true,
  },
  {
    slug: 'bupy',
    name: 'Bupy',
    kind: 'Веб-приложение · PWA',
    desc: 'Здоровье питомца в одном месте: ветпаспорт, вакцинации, лекарства, календарь и напоминания, распознавание паспорта, ветклиники на карте.',
    tags: ['React', 'Firebase', 'OCR', 'PWA'],
    url: 'https://nest-model.github.io/bupy/',
    theme: 'bupy',
  },
  {
    slug: 'elenanails',
    name: 'Beauty Planner',
    kind: 'Система записи клиентов',
    desc: 'Планер для маминого салона красоты: запись клиенток, расписание, контакты прямо из телефона. Работает как приложение на домашнем экране.',
    tags: ['React', 'PWA', 'Mobile-first'],
    url: 'https://nest-model.github.io/elenanails/',
    theme: 'beauty',
  },
  {
    slug: 'formulafitnes',
    name: 'FORMULA Fitness',
    kind: 'Сайт фитнес-клуба',
    desc: 'Лендинг клуба в Шымкенте: направления, тренеры, цены и запись на бесплатную пробную тренировку.',
    tags: ['Landing', 'HTML', 'Design'],
    url: 'https://nest-model.github.io/formulafitnes/',
    theme: 'fitness',
  },
  {
    slug: 'rimmazagranuy',
    name: 'Римма Сковородникова',
    kind: 'Сайт для ведущей и агентства',
    desc: 'Персональный сайт ведущей и организатора мероприятий и агентства «ЗА ГРАНЬЮ»: о себе, услуги, реальный кейс, контакты.',
    tags: ['Landing', 'Editorial', 'Адаптив'],
    url: 'https://nest-model.github.io/rimmazagranuy/',
    theme: 'rimma',
  },
  {
    slug: 'qara',
    name: 'QARA',
    kind: 'Интернет-магазин одежды',
    desc: 'Премиальный streetwear-магазин: каталог, фильтры, карточка товара, корзина, избранное, оформление заказа.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
    url: 'https://nest-model.github.io/qara/',
    theme: 'qara',
    shots: ['desk_hero.png', 'm_home.png'],
  },
]

export const SKILLS = {
  web: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion', 'PWA', 'HTML / CSS'],
  back: ['Supabase', 'PostgreSQL', 'Firebase', 'Auth · RLS', 'Telegram-боты', 'Python / aiogram'],
  more: ['Flutter', 'GitHub Pages', 'Gemini API', 'Leaflet / OSM'],
}
