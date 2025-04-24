export function formatDate(
  date: string | number | Date,
  locale: string = "en-US",
  options?: Intl.DateTimeFormatOptions
): string {
  const d = new Date(date);
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "short", // or "long" for full month name, "2-digit" for 01-12
    day: "2-digit",
    ...options,
  }).format(d);
}

export const formatCurrency = (value: number): string =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(
    value
  );
