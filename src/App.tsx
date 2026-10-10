import { useState, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, GitBranch, Send, MessageCircle, Camera, Mail, Menu, X } from 'lucide-react'
import { CONTACT, PROJECTS, SKILLS, type Project } from './data'
import Mock from './components/Mock'

const Reveal = ({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) => (
  <motion.div className={className} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}>
    {children}
  </motion.div>
)

const NAV = [['Проекты', '#work'], ['Навыки', '#skills'], ['Процесс', '#process'], ['Контакты', '#contact']]

function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-5 md:px-10">
        <a href="#top" className="font-display text-lg font-semibold">LYOHA<span className="text-acc">.</span>DEV</a>
        <nav className="hidden gap-10 text-[15px] text-mut md:flex">
          {NAV.map(([l, h]) => <a key={h} href={h} className="transition-colors hover:text-fg">{l}</a>)}
        </nav>
        <a href="#contact" className="hidden rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold transition hover:border-acc hover:text-acc md:inline-block">Написать →</a>
        <button className="md:hidden" aria-label="Меню" onClick={() => setOpen((v) => !v)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <div className="border-t border-line px-5 py-4 md:hidden">
          {NAV.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)} className="block py-3 text-lg">{l}</a>)}
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute right-[-120px] top-[60px] hidden size-[460px] rounded-full border border-line md:block" />
      <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1 }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute right-[-60px] top-[100px] size-[360px] rounded-full md:right-[40px] max-md:right-[-110px] max-md:top-[30px] max-md:size-[240px] max-md:opacity-50"
        style={{ background: 'radial-gradient(circle at 35% 30%,#e8ff8a,#d4ff3a 30%,#4a5a10 70%,transparent 72%)' }} />
      <div className="relative mx-auto max-w-[1280px] px-5 pb-16 pt-16 md:px-10 md:pb-24 md:pt-24">
        <div className="flex items-center gap-2.5 text-xs uppercase tracking-[.14em] text-mut md:text-sm">
          <i className="size-2 rounded-full bg-acc shadow-[0_0_12px_var(--color-acc)]" /> Открыт к проектам · Шымкент, KZ
        </div>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }}
          className="relative z-10 mb-8 mt-7 font-display text-[40px] font-semibold leading-[1.06] tracking-[-0.03em] sm:text-6xl md:text-[92px]">
          Делаю <span className="text-acc">сайты</span><br />и приложения,<br /><span className="text-[#55555a]">которыми пользуются.</span>
        </motion.h1>
        <p className="max-w-[620px] text-lg text-[#b9b9b4] md:text-xl">
          Независимый разработчик. Веб-приложения на React и Supabase, сайты и PWA — от идеи и дизайна до запуска и поддержки.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#work" className="inline-flex items-center gap-2 rounded-full bg-acc px-7 py-4 text-[15px] font-semibold text-bg transition hover:brightness-110">Смотреть проекты ↓</a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-[15px] font-semibold transition hover:border-acc hover:text-acc">Связаться</a>
        </div>
        <div className="mt-16 grid grid-cols-2 border-y border-line md:mt-24 md:grid-cols-4">
          {[['6', 'проектов онлайн'], ['Web · PWA', 'приложения и сайты'], ['React · TS', 'основной стек'], ['1:1', 'напрямую, без агентств']].map(([b, s], i) => (
            <div key={s} className={`border-line py-7 ${i % 2 ? 'max-md:border-l max-md:pl-5' : 'max-md:pl-0'} ${i >= 2 ? 'max-md:border-t' : ''} ${i > 0 ? 'md:border-l md:pl-7' : 'md:pl-0'}`}>
              <b className="block font-display text-2xl font-medium md:text-[32px]">{b}</b>
              <span className="text-sm text-mut">{s}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Marquee() {
  const items = ['React', 'TypeScript', 'Supabase', 'Firebase', 'Tailwind', 'PWA', 'Vite', 'Flutter']
  const row = items.map((t, i) => <span key={t + i} className={`${i % 2 ? 'text-[#3c3c3f]' : 'text-fg'} mx-6 inline-flex items-center gap-12`}>{t}<i className="not-italic text-acc">✦</i></span>)
  return (
    <div className="overflow-hidden border-y border-line py-6 font-display text-2xl uppercase md:text-3xl">
      <div className="marquee flex w-max whitespace-nowrap">{row}{row}{row}{row}</div>
    </div>
  )
}

function SectionHead({ title, label }: { title: ReactNode; label: string }) {
  return (
    <Reveal className="mb-10 flex items-end justify-between md:mb-14">
      <h2 className="font-display text-4xl font-medium leading-[1.1] tracking-tight md:text-5xl">{title}</h2>
      <small className="hidden text-sm uppercase tracking-[.14em] text-mut sm:block">{label}</small>
    </Reveal>
  )
}

function Tags({ tags }: { tags: string[] }) {
  return <div className="flex flex-wrap gap-2">{tags.map((t) => <span key={t} className="rounded-full border border-[#38383b] px-3 py-1 text-xs text-[#c9c9c4]">{t}</span>)}</div>
}

function Featured({ p }: { p: Project }) {
  return (
    <Reveal>
      <a href={p.url} target="_blank" rel="noreferrer" className="group relative block overflow-hidden rounded-[28px] border border-line bg-card transition hover:border-[#ffd40066]">
        <div className="grid md:grid-cols-[0.8fr_1.2fr]">
          <div className="flex flex-col justify-between gap-10 p-7 md:p-12">
            <div>
              <span className="inline-block rounded-full bg-acc px-3 py-1 text-xs font-semibold text-bg">★ Главный проект</span>
              <h3 className="mt-5 font-display text-3xl font-medium tracking-tight md:text-5xl">{p.name}</h3>
              <p className="mt-2 text-sm uppercase tracking-[.12em] text-mut">{p.kind}</p>
              <p className="mt-6 max-w-md text-[17px] leading-relaxed text-[#b9b9b4]">{p.desc}</p>
              <ul className="mt-6 space-y-2 text-[15px] text-[#d8d8d3]">
                {['Два интерфейса: клиент с телефона, админ с компьютера', 'Бонусы со сроком жизни, списание по коду / QR', 'Роли, права доступа и журнал операций (RLS)', 'Устанавливается как приложение (PWA)'].map((x) => <li key={x} className="flex gap-2"><span className="text-acc">→</span>{x}</li>)}
              </ul>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <Tags tags={p.tags} />
              <span className="inline-flex items-center gap-2 rounded-full bg-fg px-5 py-3 text-sm font-semibold text-bg transition group-hover:bg-acc">Открыть <ArrowUpRight size={16} /></span>
            </div>
          </div>
          <div className="relative min-h-[360px] overflow-hidden md:min-h-[520px]"><Mock p={p} big /></div>
        </div>
      </a>
    </Reveal>
  )
}

function Card({ p, i, wide }: { p: Project; i: number; wide?: boolean }) {
  const [shot, setShot] = useState(true)
  return (
    <Reveal delay={(i % 2) * 0.08} className={wide ? 'md:col-span-2' : ''}>
      <a href={p.url} target="_blank" rel="noreferrer" className="group block h-full overflow-hidden rounded-3xl border border-line bg-card transition hover:-translate-y-1 hover:border-white/25">
        <div className={`relative h-[280px] overflow-hidden ${wide ? "md:h-[440px]" : "md:h-[320px]"}`}>
          <Mock p={p} />
          {shot && <img src={`./shots/${p.slug}.jpg`} alt={p.name} onError={() => setShot(false)} className="absolute inset-0 size-full object-cover object-top" />}
          <span className="absolute right-5 top-5 grid size-11 place-items-center rounded-full border border-white/20 bg-black/40 backdrop-blur transition group-hover:bg-acc group-hover:text-bg"><ArrowUpRight size={18} /></span>
        </div>
        <div className="p-7">
          <p className="text-xs uppercase tracking-[.12em] text-mut">{p.kind}</p>
          <h3 className="mb-3 mt-2 font-display text-2xl font-medium tracking-tight">{p.name}</h3>
          <p className="mb-5 text-[15px] leading-relaxed text-[#a4a4a0]">{p.desc}</p>
          <Tags tags={p.tags} />
        </div>
      </a>
    </Reveal>
  )
}

function Work() {
  const [main, ...rest] = PROJECTS
  return (
    <section id="work" className="mx-auto max-w-[1280px] scroll-mt-20 px-5 pt-24 md:px-10 md:pt-32">
      <SectionHead title={<>Избранные<br />проекты</>} label="01 — Работы" />
      <Featured p={main} />
      <div className="mt-5 grid gap-5 md:grid-cols-2">{rest.map((p, i) => <Card key={p.slug} p={p} i={i} wide={i === rest.length - 1 && rest.length % 2 === 1} />)}</div>
    </section>
  )
}

function Skills() {
  const group = (t: string, a: string[], b: string[]) => (
    <Reveal className="rounded-3xl border border-line bg-card p-8 md:p-10">
      <h3 className="mb-6 font-display text-xl font-medium">{t}</h3>
      <div className="flex flex-wrap gap-3">
        {a.map((x) => <span key={x} className="rounded-full border border-[#5b6b1d] bg-[#1b1b1d] px-4 py-2.5 text-[15px] text-acc">{x}</span>)}
        {b.map((x) => <span key={x} className="rounded-full border border-[#2c2c2f] bg-[#1b1b1d] px-4 py-2.5 text-[15px]">{x}</span>)}
      </div>
    </Reveal>
  )
  return (
    <section id="skills" className="mx-auto max-w-[1280px] scroll-mt-20 px-5 pt-24 md:px-10 md:pt-32">
      <SectionHead title={<>Чем<br />занимаюсь</>} label="02 — Навыки" />
      <div className="grid gap-5 md:grid-cols-2">
        {group('Frontend', SKILLS.web.slice(0, 3), SKILLS.web.slice(3))}
        {group('Backend и данные', SKILLS.back.slice(0, 3), [...SKILLS.back.slice(3), ...SKILLS.more])}
      </div>
    </section>
  )
}

function Process() {
  const steps = [['01', 'Бриф', 'Разбираем задачу, цели и сроки. Без воды.'], ['02', 'Дизайн', 'Быстрый прототип, чтобы увидеть результат заранее.'], ['03', 'Разработка', 'Чистый код, адаптив, анимации, регулярные показы.'], ['04', 'Запуск', 'Деплой, подключение домена, поддержка после релиза.']]
  return (
    <section id="process" className="mx-auto max-w-[1280px] scroll-mt-20 px-5 pt-24 md:px-10 md:pt-32">
      <SectionHead title={<>Как<br />работаю</>} label="03 — Процесс" />
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
        {steps.map(([n, t, d], i) => (
          <Reveal key={n} delay={i * 0.08} className="border-t border-[#3a3a3d] pt-6">
            <b className="font-display text-sm font-medium text-acc">{n}</b>
            <h4 className="mb-2 mt-3 font-display text-xl font-medium">{t}</h4>
            <p className="text-[15px] text-mut">{d}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  const links: [string, string, ReactNode][] = ([
    ['Telegram', CONTACT.telegram, <Send size={17} />],
    ['WhatsApp', CONTACT.whatsapp, <MessageCircle size={17} />],
    ['Instagram', CONTACT.instagram, <Camera size={17} />],
    ['Email', CONTACT.email ? `mailto:${CONTACT.email}` : '', <Mail size={17} />],
    ['GitHub', CONTACT.github, <GitBranch size={17} />],
  ] as [string, string, ReactNode][]).filter((l) => l[1])
  return (
    <section id="contact" className="mx-auto max-w-[1280px] scroll-mt-20 px-5 pt-24 md:px-10 md:pt-32">
      <Reveal className="relative overflow-hidden rounded-[32px] bg-acc p-8 text-bg md:rounded-[40px] md:p-20">
        <div aria-hidden className="pointer-events-none absolute -bottom-16 right-[-20px] select-none font-display text-[260px] font-semibold leading-none opacity-[.12] md:-bottom-32 md:text-[420px]">L</div>
        <h2 className="relative font-display text-4xl font-semibold leading-none tracking-[-0.035em] sm:text-6xl md:text-[92px]">Есть идея?<br />Давай сделаем.</h2>
        <div className="relative mt-10 flex flex-wrap gap-3">
          {links.map(([l, h, ic], i) => (
            <a key={l} href={h} target="_blank" rel="noreferrer" className={`inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-semibold transition hover:scale-[1.03] ${i === 0 ? 'bg-bg text-fg' : 'border-[1.5px] border-bg'}`}>{ic}{l}</a>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Work />
        <Skills />
        <Process />
        <Contact />
      </main>
      <footer className="mx-auto flex max-w-[1280px] flex-wrap justify-between gap-3 px-5 py-12 text-sm text-mut md:px-10">
        <span>© 2026 Lyoha — Шымкент, Казахстан</span>
        <a href="#top">Наверх ↑</a>
      </footer>
    </>
  )
}
