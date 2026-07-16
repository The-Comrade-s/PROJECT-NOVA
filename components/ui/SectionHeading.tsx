import { Reveal } from "@/components/animations/Reveal";
import { cn } from "@/utils/cn";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

/**
 * Shared heading block for content sections — keeps typography and
 * spacing consistent with EPS-003 §5 across About, Features, Technology,
 * Statistics, Testimonials, and CTA.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
      )}
    >
      <Reveal>
        <span className="text-sm uppercase tracking-[0.3em] text-text-muted">{eyebrow}</span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="text-section-sm md:text-section-lg font-semibold text-text-primary">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p
            className={cn(
              "max-w-2xl text-text-secondary",
              align === "center" && "mx-auto",
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
