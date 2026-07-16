"use client";

import { Button } from "@/components/ui/Button";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Development-only diagnostic logging; production logging stays minimal
    // and never exposes sensitive details (EPS-006 §20).
    if (process.env.NODE_ENV === "development") {
      console.error(error);
    }
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background px-6 text-center">
      <span className="text-sm uppercase tracking-[0.3em] text-text-muted">Error</span>
      <h1 className="text-section-sm font-semibold text-text-primary">
        Something went wrong.
      </h1>
      <p className="max-w-md text-text-secondary">
        NOVA hit an unexpected issue rendering this page. You can try again, or
        head back to the homepage.
      </p>
      <div className="flex gap-4">
        <Button onClick={reset}>Try again</Button>
        <Button variant="secondary" onClick={() => (window.location.href = "/")}>
          Go home
        </Button>
      </div>
    </main>
  );
}
