import Image from "next/image";
import Link from "next/link";
import HeaderNavigation from "./HeaderNavigation";

const NAV = [
  ["Home", "#home"], ["About Us", "#about"], ["Services & Commodities", "#services"],
  ["Vision & Mission", "#vision-mission"], ["Why Us", "#why-us"], ["Contact", "#contact"],
];

export default function Header() {
  return (
    <>
      <div className="h-[var(--topbar-h)] bg-on-surface text-surface">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 lg:px-12 text-[10px] sm:text-[11px]">
          <span className="whitespace-nowrap uppercase tracking-wider">Jakarta (SCBD) • Mon - Fri: 08:30 - 17:30 WIB</span>
          <span className="hidden whitespace-nowrap sm:inline">
            <span className="uppercase">Desk:</span>{" "}
            <a href="mailto:corporate@bumisadamineral.com" className="normal-case hover:text-primary-fixed">corporate@bumisadamineral.com</a>
          </span>
        </div>
      </div>
      <header className="sticky top-0 z-50 h-[var(--header-h)] border-b border-on-surface/15 bg-white">
        <div className="relative mx-auto grid h-full max-w-7xl grid-cols-[1fr_auto] items-center px-6 lg:px-12 xl:grid-cols-[1fr_auto_1fr]">
          <Link href="#home" aria-label="PT Bumi Sada Mineral" className="w-fit shrink-0">
            <Image
              src="/logo-bsm-header.jpg"
              alt="PT Bumi Sada Mineral"
              width={830}
              height={360}
              priority
              className="h-10 w-auto object-contain sm:h-12 xl:h-14"
            />
          </Link>
          <HeaderNavigation navItems={NAV} />
        </div>
      </header>
    </>
  );
}
