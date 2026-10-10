import type { ReactNode } from 'react'
import type { Project } from '../data'

const bar = (w: string, c: string, h = 8) => (
  <div style={{ width: w, height: h, background: c, borderRadius: 99 }} />
)

function Phone({ children, bg, w = 150 }: { children: ReactNode; bg: string; w?: number }) {
  return (
    <div
      className="relative shrink-0 overflow-hidden rounded-[26px] border-[5px] border-[#1c1c1e] shadow-[0_24px_60px_#000a]"
      style={{ width: w, aspectRatio: '9/18.5', background: bg }}
    >
      <div className="absolute left-1/2 top-1.5 h-1.5 w-10 -translate-x-1/2 rounded-full bg-black/70" />
      <div className="h-full p-3 pt-6">{children}</div>
    </div>
  )
}

function Browser({ children, bg, url, className = '' }: { children: ReactNode; bg: string; url: string; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-xl border border-white/10 shadow-[0_24px_70px_#000a] ${className}`} style={{ background: bg }}>
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-black/30 px-3 py-2">
        <i className="size-2 rounded-full bg-white/20" /><i className="size-2 rounded-full bg-white/20" /><i className="size-2 rounded-full bg-white/20" />
        <span className="mx-auto rounded-full bg-white/10 px-3 py-0.5 text-[9px] text-white/50">{url}</span>
      </div>
      {children}
    </div>
  )
}

function Formula({ big }: { big?: boolean }) {
  const Y = '#ffd400'
  const phone = (
    <Phone bg="#0e0e0e" w={big ? 190 : 140}>
      <div className="text-[8px] uppercase tracking-widest text-white/40">Ваш баланс</div>
      <div className="mt-1 font-display text-[22px] font-semibold leading-none" style={{ color: Y }}>2 450</div>
      <div className="mb-3 text-[8px] text-white/40">Bonus · сгорит через 34 дня</div>
      <div className="mb-2 rounded-xl p-2.5" style={{ background: Y }}>
        {bar('60%', '#0008', 6)}<div className="mt-1.5">{bar('35%', '#0006', 5)}</div>
      </div>
      {[0, 1, 2].map((i) => (
        <div key={i} className="mb-1.5 flex items-center gap-2 rounded-lg bg-white/5 p-2">
          <i className="size-5 rounded-md" style={{ background: i ? '#2a2a2a' : Y + '55' }} />
          <div className="flex-1 space-y-1">{bar('70%', '#fff3', 5)}{bar('40%', '#fff2', 4)}</div>
        </div>
      ))}
    </Phone>
  )
  const admin = (
    <Browser bg="#0e0e0e" url="Formula Bonus · Админ" className={big ? 'w-[400px]' : 'w-[260px]'}>
      <div className="grid grid-cols-[70px_1fr] gap-3 p-3" style={{ height: big ? 270 : 150 }}>
        <div className="space-y-1.5">{[0, 1, 2, 3, 4, 5].map((i) => <div key={i} className="h-3.5 rounded" style={{ background: i === 1 ? Y : '#ffffff14' }} />)}</div>
        <div>
          <div className="mb-2 grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => <div key={i} className="rounded-lg bg-white/5 p-2"><div className="mb-1">{bar('50%', '#fff3', 4)}</div><div className="font-display whitespace-nowrap text-[11px]" style={{ color: i === 0 ? Y : '#fff' }}>{['1 240', '86%', '312'][i]}</div></div>)}
          </div>
          <div className="flex h-[70px] items-end gap-1 rounded-lg bg-white/5 p-2">
            {[30, 50, 40, 70, 55, 85, 65, 95, 75, 60].map((h, i) => <div key={i} className="flex-1 rounded-sm" style={{ height: h + '%', background: i > 6 ? Y : '#ffffff24' }} />)}
          </div>
          {big && [0, 1, 2].map((i) => <div key={i} className="mt-1.5 flex gap-3">{bar('22%', '#fff3', 5)}{bar('30%', '#fff2', 5)}{bar('12%', Y + '88', 5)}</div>)}
        </div>
      </div>
    </Browser>
  )
  return (
    <div className="relative flex h-full w-full items-center justify-center gap-5 overflow-hidden" style={{ background: 'radial-gradient(circle at 70% 20%, #3a3000, #0b0b0b 65%)' }}>
      {big ? <><div className="-ml-6 translate-y-6">{admin}</div><div className="-ml-2 translate-y-8">{phone}</div></> : <><div className="-ml-4">{admin}</div><div className="translate-y-8">{phone}</div></>}
    </div>
  )
}

function Fitness() {
  const Y = '#ffd400'
  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(135deg,#1a1a1a,#050505)' }}>
      <Browser bg="#0b0b0b" url="formulafitnes" className="w-[78%] translate-y-6">
        <div className="relative p-5" style={{ height: 210 }}>
          <div className="absolute inset-y-0 right-0 w-1/3 -skew-x-12" style={{ background: Y }} />
          <div className="relative text-[8px] uppercase tracking-[.25em] text-white/40">Фитнес-клуб · Шымкент</div>
          <div className="relative mt-2 font-display text-[22px] font-semibold uppercase leading-[1.05] text-white">Пробная<br />тренировка<br /><span style={{ color: Y }}>бесплатно</span></div>
          <div className="relative mt-4 inline-block rounded-full px-4 py-1.5 text-[9px] font-semibold text-black" style={{ background: Y }}>Записаться</div>
        </div>
      </Browser>
    </div>
  )
}

function Bupy() {
  const T = '#1e6f6a'
  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden" style={{ background: 'radial-gradient(circle at 30% 10%, #2c8f88, #0c2e2c 70%)' }}>
      <div className="translate-y-8">
        <Phone bg="#f4f7f6" w={150}>
          <div className="mb-2 flex items-center gap-2">
            <i className="size-8 rounded-full" style={{ background: T }} />
            <div className="space-y-1">{bar('50px', '#0003', 6)}{bar('30px', '#0002', 4)}</div>
          </div>
          <div className="mb-2 rounded-xl p-2.5 text-white" style={{ background: T }}>
            <div className="text-[8px] opacity-70">Следующая вакцинация</div>
            <div className="font-display text-[13px]">через 12 дней</div>
          </div>
          {[0, 1, 2].map((i) => <div key={i} className="mb-1.5 flex items-center gap-2 rounded-lg bg-white p-2 shadow-sm"><i className="size-4 rounded" style={{ background: ['#f2b84b', T, '#e5736a'][i] }} /><div className="flex-1 space-y-1">{bar('70%', '#0002', 5)}{bar('40%', '#0001', 4)}</div></div>)}
        </Phone>
      </div>
    </div>
  )
}

function Beauty() {
  const G = '#0f5c44'
  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden" style={{ background: 'radial-gradient(circle at 70% 10%, #1b8a68, #07281e 70%)' }}>
      <div className="translate-y-8">
        <Phone bg="#f6f0e2" w={150}>
          <div className="mb-2 font-display whitespace-nowrap text-[11px]" style={{ color: G }}>Сегодня</div>
          <div className="mb-2 flex gap-1">{['Пн', 'Вт', 'Ср', 'Чт'].map((d, i) => <div key={d} className="flex-1 rounded-md py-1 text-center text-[8px]" style={{ background: i === 2 ? G : '#0f5c4414', color: i === 2 ? '#fff' : G }}>{d}</div>)}</div>
          {[['10:00', '#c9a24a'], ['12:30', G], ['15:00', '#c9a24a']].map(([t, c]) => (
            <div key={t} className="mb-1.5 flex gap-2"><span className="w-7 text-[8px] text-black/40">{t}</span><div className="flex-1 rounded-lg p-2" style={{ background: c + '22', borderLeft: `3px solid ${c}` }}>{bar('65%', '#0003', 5)}<div className="mt-1">{bar('40%', '#0002', 4)}</div></div></div>
          ))}
        </Phone>
      </div>
    </div>
  )
}

function Rimma() {
  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(135deg,#e9e4da,#cfc8ba)' }}>
      <Browser bg="#f5f2ec" url="rimmazagranuy" className="w-[78%] translate-y-6">
        <div className="p-5" style={{ height: 200 }}>
          <div className="text-[8px] uppercase tracking-[.25em] text-black/40">Ведущая · Организатор</div>
          <div className="mt-2 font-serif text-[26px] leading-[1.05] text-[#2b2926]">Римма<br />Сковородникова</div>
          <div className="mt-3 flex gap-3">{bar('40px', '#b89b5e', 6)}{bar('60px', '#2b292622', 6)}</div>
          <div className="mt-6 grid grid-cols-3 gap-2">{[0, 1, 2].map((i) => <div key={i} className="h-16 rounded-md" style={{ background: ['#d9d2c3', '#2b2926', '#e6dfd1'][i] }} />)}</div>
        </div>
      </Browser>
    </div>
  )
}

function Qara({ shots }: { shots: string[] }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden" style={{ background: 'radial-gradient(circle at 30% 0%, #2a2a2e, #0c0c0d 70%)' }}>
      <img src={`./shots/${shots[0]}`} alt="QARA — десктоп" className="absolute left-5 top-8 w-[72%] rounded-lg border border-white/10 shadow-[0_24px_70px_#000a]" loading="lazy" />
      <img src={`./shots/${shots[1]}`} alt="QARA — мобильная версия" className="absolute bottom-[-30px] right-6 w-[26%] rounded-2xl border-4 border-[#1c1c1e] shadow-[0_24px_60px_#000a]" loading="lazy" />
    </div>
  )
}

export default function Mock({ p, big }: { p: Project; big?: boolean }) {
  // Если положишь реальный скриншот в public/shots/<slug>.jpg — он заменит рисованное превью
  switch (p.theme) {
    case 'formula': return <Formula big={big} />
    case 'fitness': return <Fitness />
    case 'bupy': return <Bupy />
    case 'beauty': return <Beauty />
    case 'rimma': return <Rimma />
    case 'qara': return <Qara shots={p.shots ?? []} />
  }
}
