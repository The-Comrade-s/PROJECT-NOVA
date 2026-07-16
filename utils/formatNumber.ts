/**
 * Format a number using locale-aware grouping, optionally appending a suffix
 * (e.g. "%", "+", "ms"). Used by the Statistics section's count-up display.
 */
export function formatNumber(value: number, suffix = ""): string {
  return `${new Intl.NumberFormat("en-US").format(value)}${suffix}`;
}
