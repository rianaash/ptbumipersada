import Icon from "./Icon";

const LOGO =
  "https://lh3.googleusercontent.com/aida/AEtjO1XpbjUD3oCUhZ2HXiysrfkG1eQc6ab3RpxqxtMg3mk-3DFmUlUkGoiaAmqRo8AurOm2J6Kc6I7oagVPhpDXzWTUvmLiONclYfEYKPBdSqB3tsX_ZkgUjR4B9qsTbWvdE4wUGms3TRRkdvQ3MvstYD8gCZ30iQTPG5azcO4flcpXqnrsV60wIaN8ziuzJ_aM6A9rAvY9xYRU6P1yNX2qnTQkiEth_cIq4cjWF4pi2FyAMg";

const NAV = [
  ["Home", "#home"], ["About Us", "#about"], ["Services & Commodities", "#services"],
  ["Vision & Mission", "#vision-mission"], ["Why Us", "#why-us"], ["Contact", "#contact"],
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="w-full bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-9 flex items-center justify-between font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />Jakarta (SCBD) • Mon - Fri: 08:30 - 17:30 WIB
            </span>
          </div>
          <span className="hidden sm:inline">Desk: corporate@bumisadamineral.com</span>
        </div>
      </div>
      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-6">
        <a href="#home" className="flex items-center gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="PT Bumi Sada Mineral Logo" className="h-8 w-auto object-contain" src={LOGO} />
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm uppercase text-on-surface tracking-tight leading-none">PT Bumi Sada Mineral</span>
            <span className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant mt-0.5">Resources &amp; Energy Trading</span>
          </div>
        </a>
        <nav className="hidden xl:flex items-center gap-1">
          {NAV.map(([label, href], i) => (
            <a key={href} href={href}
              className={`px-3 py-2 font-title-md text-title-md transition-colors rounded ${i === 0 ? "bg-primary-container text-on-primary-container font-semibold" : "text-on-surface-variant hover:text-on-surface"}`}>
              {label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="inline-flex items-center gap-2 bg-primary text-on-primary font-headline-sm text-label-caps uppercase tracking-wider px-4 py-2.5 hover:bg-primary-container transition-colors">
          <span>Inquire Supply</span><Icon name="arrow_forward" className="text-[16px]" />
        </a>
      </div>
    </header>
  );
}
