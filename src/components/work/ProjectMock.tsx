import type { CaseStudy } from "@/content/types";
import { cn } from "@/lib/utils";

/** CSS-only product mockups — unique layout per case study, no external images. */
export function ProjectMock({
  study,
  className,
  compact = false,
}: {
  study: CaseStudy;
  className?: string;
  compact?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[var(--radius)] border border-border bg-bg shadow-[0_24px_60px_-28px_rgba(0,0,0,0.65)]",
        className,
      )}
      style={{
        background: `linear-gradient(160deg, ${study.accent}18 0%, transparent 45%), #0b1220`,
      }}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-border/80 bg-surface/80 px-3 py-2.5">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
        <span className="h-2 w-2 rounded-full bg-[#28c840]" />
        <div className="ml-2 flex-1 truncate rounded-md border border-border/60 bg-bg/70 px-2.5 py-1 font-mono text-[10px] text-muted">
          flowstate.design/{study.slug}
        </div>
      </div>

      <div className={cn("relative p-4 sm:p-5", compact ? "min-h-[140px]" : "min-h-[220px] sm:min-h-[280px]")}>
        <MockBody study={study} compact={compact} />
      </div>
    </div>
  );
}

function MockBody({ study, compact }: { study: CaseStudy; compact: boolean }) {
  switch (study.slug) {
    case "atelier-nord":
      return <SalonMock accent={study.accent} compact={compact} />;
    case "clinique-riviera":
      return <ClinicMock accent={study.accent} compact={compact} />;
    case "montreal-trades":
      return <DirectoryMock accent={study.accent} compact={compact} />;
    case "nuit-mtl":
      return <NightlifeMock accent={study.accent} compact={compact} />;
    case "planxo":
      return <SaasMock accent={study.accent} compact={compact} />;
    case "adgen":
      return <AiMock accent={study.accent} compact={compact} />;
    default:
      return <SalonMock accent={study.accent} compact={compact} />;
  }
}

function SalonMock({ accent, compact }: { accent: string; compact: boolean }) {
  return (
    <div className="grid gap-3 sm:grid-cols-[1.1fr_0.9fr]">
      <div>
        <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
          Atelier Nord
        </p>
        <p className={cn("mt-2 font-semibold text-text", compact ? "text-sm" : "text-lg")}>
          Sharp cuts. Easy booking.
        </p>
        {!compact ? (
          <p className="mt-2 text-xs leading-relaxed text-muted">
            Mile-End · EN / FR · next available today
          </p>
        ) : null}
        <div
          className="mt-3 inline-flex rounded-full px-3 py-1.5 text-[11px] font-semibold text-bg"
          style={{ backgroundColor: accent }}
        >
          Book a chair
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {["Fade", "Beard", "Color", "Hot towel"].map((s) => (
          <div
            key={s}
            className="rounded-lg border border-border/70 bg-surface/70 p-2 text-[10px] text-muted"
          >
            <div className="mb-2 h-8 rounded-md bg-border/40" style={{ background: `${accent}33` }} />
            {s}
          </div>
        ))}
      </div>
    </div>
  );
}

function ClinicMock({ accent, compact }: { accent: string; compact: boolean }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-2">
        <p className="font-semibold text-text">Clinique Riviera</p>
        <span className="rounded-full border border-border px-2 py-0.5 font-mono text-[9px] text-muted">
          Patient portal
        </span>
      </div>
      <div className="grid gap-2 sm:grid-cols-3">
        {["Family medicine", "Lab forms", "Insurance"].map((item) => (
          <div
            key={item}
            className="rounded-lg border border-border/70 bg-surface/60 p-3"
          >
            <div
              className="mb-2 h-1.5 w-8 rounded-full"
              style={{ backgroundColor: accent }}
            />
            <p className={cn("text-text", compact ? "text-[11px]" : "text-xs")}>{item}</p>
            <p className="mt-1 text-[10px] text-muted">View details →</p>
          </div>
        ))}
      </div>
      {!compact ? (
        <div className="rounded-lg border border-dashed border-border/80 bg-bg/40 px-3 py-2 text-[11px] text-muted">
          Prep checklist · Bilingual intake · Same-day requests
        </div>
      ) : null}
    </div>
  );
}

function DirectoryMock({ accent, compact }: { accent: string; compact: boolean }) {
  const rows = ["Electrician · Plateau", "Plumber · Laval", "HVAC · South Shore"];
  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        {["Trade", "Borough", "Insured"].map((f) => (
          <span
            key={f}
            className="rounded-md border border-border bg-surface/70 px-2 py-1 text-[10px] text-muted"
          >
            {f} ▾
          </span>
        ))}
      </div>
      <div className="space-y-2">
        {rows.slice(0, compact ? 2 : 3).map((row) => (
          <div
            key={row}
            className="flex items-center justify-between rounded-lg border border-border/70 bg-surface/50 px-3 py-2"
          >
            <span className="text-[11px] text-text">{row}</span>
            <span
              className="rounded-full px-2 py-0.5 text-[10px] font-semibold text-bg"
              style={{ backgroundColor: accent }}
            >
              Lead
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function NightlifeMock({ accent, compact }: { accent: string; compact: boolean }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <div
        className="rounded-xl border border-border/60 p-4"
        style={{
          background: `linear-gradient(145deg, ${accent}55, #0b1220 70%)`,
        }}
      >
        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-text/80">
          Tonight
        </p>
        <p className={cn("mt-2 font-semibold text-text", compact ? "text-sm" : "text-base")}>
          Nuit MTL
        </p>
        <p className="mt-1 text-[10px] text-text/70">12 events near you</p>
      </div>
      <div className="space-y-2">
        {["House @ Stereo", "Jazz trio", "Rooftop DJ"].map((e) => (
          <div
            key={e}
            className="rounded-lg border border-border/70 bg-surface/60 px-3 py-2 text-[11px] text-muted"
          >
            {e}
          </div>
        ))}
      </div>
    </div>
  );
}

function SaasMock({ accent, compact }: { accent: string; compact: boolean }) {
  return (
    <div className="space-y-3">
      <div className="flex items-end justify-between">
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
            Planxo
          </p>
          <p className={cn("font-semibold text-text", compact ? "text-sm" : "text-lg")}>
            Ship the roadmap
          </p>
        </div>
        <span
          className="rounded-full px-2.5 py-1 text-[10px] font-semibold text-bg"
          style={{ backgroundColor: accent }}
        >
          Start free
        </span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[62, 84, 41].map((n, i) => (
          <div
            key={i}
            className="rounded-lg border border-border/70 bg-surface/50 p-2 text-center"
          >
            <p className="text-sm font-semibold text-text">{n}%</p>
            <p className="text-[9px] text-muted">KPI {i + 1}</p>
          </div>
        ))}
      </div>
      {!compact ? (
        <div className="h-16 overflow-hidden rounded-lg border border-border/60 bg-surface/40 p-2">
          <div className="flex h-full items-end gap-1">
            {[40, 55, 35, 70, 48, 82, 60, 90, 72, 88].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm"
                style={{ height: `${h}%`, backgroundColor: `${accent}99` }}
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

function AiMock({ accent, compact }: { accent: string; compact: boolean }) {
  return (
    <div className="space-y-3">
      <p className="font-semibold text-text">AdGen · campaign studio</p>
      <div className="rounded-lg border border-border/70 bg-surface/60 p-3">
        <p className="text-[10px] text-muted">Prompt</p>
        <p className={cn("mt-1 text-text", compact ? "text-[11px]" : "text-xs")}>
          “Spring sale for a Montreal café — warm, bilingual.”
        </p>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="aspect-[4/3] rounded-md border border-border/60"
            style={{
              background: `linear-gradient(${120 + i * 40}deg, ${accent}66, #132033)`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
