export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="space-y-2 md:col-span-2">
          <span className="font-headline-sm text-headline-sm uppercase text-on-surface">PT Bumi Sada Mineral</span>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">Integrated Indonesian commodity supplier specializing in high-grade nickel ore, thermal coal, and metallurgical materials. Headquartered in District 8 SCBD, South Jakarta.</p>
          <p className="font-label-caps text-label-caps text-on-surface-variant uppercase pt-1">Licensed Trading House • Republic of Indonesia</p>
        </div>
        <div>
          <h4 className="font-label-caps text-label-caps uppercase tracking-wider text-on-surface mb-2">Operations &amp; Legal</h4>
          <ul className="space-y-2 font-body-sm text-body-sm text-on-surface-variant">
            <li><a className="hover:text-on-surface" href="#services">Mineral Portfolios</a></li>
            <li><a className="hover:text-on-surface" href="#why-us">ESG &amp; Traceability</a></li>
            <li><a className="hover:text-on-surface" href="#why-us">Compliance &amp; Export Permits</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-caps text-label-caps uppercase tracking-wider text-on-surface mb-2">Executive Office</h4>
          <address className="font-body-sm text-body-sm text-on-surface-variant not-italic space-y-1">
            <p>District 8 Treasury Tower, Floor 28</p>
            <p>SCBD Lot 28, Jl. Jend. Sudirman Kav. 52-53</p>
            <p>Jakarta Selatan 12190, Indonesia</p>
            <p className="pt-2 font-label-mono-stat text-label-mono-stat text-primary">T: +62 21 5140 8800</p>
          </address>
        </div>
      </div>
      <div className="w-full bg-surface-container">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-2 flex flex-col sm:flex-row items-center justify-between text-on-surface-variant font-label-caps text-label-caps uppercase tracking-wider gap-2">
          <span>© 2025 PT Bumi Sada Mineral. All Rights Reserved.</span>
          <span>District 8 SCBD • Commodity Trade Desk</span>
        </div>
      </div>
    </footer>
  );
}
