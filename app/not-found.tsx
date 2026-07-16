import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background px-6 text-center">
      <span className="text-sm uppercase tracking-[0.3em] text-text-muted">404</span>
      <h1 className="text-section-sm font-semibold text-text-primary">Page not found.</h1>
      <p className="max-w-md text-text-secondary">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link href="/">
        <Button>Back to home</Button>
      </Link>
    </main>
  );
}
