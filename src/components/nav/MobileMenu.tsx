import { useState, useEffect } from 'preact/hooks';
import { createPortal } from 'preact/compat';

interface Props {
  navLinks: { href: string; label: string }[];
  langHref: string;
  langLabel: string;
}

const overlayStyle: Record<string, string> = {
  position: 'fixed',
  top: '64px',
  left: '0',
  right: '0',
  bottom: '0',
  backgroundColor: '#232F4C',
  zIndex: '9999',
  display: 'flex',
  flexDirection: 'column',
  padding: '2rem',
  gap: '1.5rem',
  overflowY: 'auto',
};

export default function MobileMenu({ navLinks, langHref, langLabel }: Props) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const overlay = open ? (
    <div style={overlayStyle}>
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={() => setOpen(false)}
          style={{ color: 'white', fontSize: '1.75rem', fontWeight: '300', letterSpacing: '0.05em', textDecoration: 'none' }}
        >
          {link.label}
        </a>
      ))}
      <div style={{ marginTop: 'auto' }}>
        <a
          href={langHref}
          style={{
            display: 'inline-block',
            border: '1px solid #A99060',
            color: '#A99060',
            padding: '0.5rem 1rem',
            fontSize: '0.875rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            textDecoration: 'none',
          }}
        >
          {langLabel}
        </a>
      </div>
    </div>
  ) : null;

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        class="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none"
      >
        <span class={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
        <span class={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
        <span class={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {mounted && createPortal(overlay, document.body)}
    </>
  );
}
