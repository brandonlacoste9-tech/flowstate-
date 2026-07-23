export function SiteHeader() {
  return (
    <header className="border-b border-border/60 py-4">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <span className="text-sm font-semibold tracking-tight">
          Flowstate Design
        </span>
        <nav aria-label="Primary" className="text-sm text-muted">
          Nav
        </nav>
      </div>
    </header>
  );
}
