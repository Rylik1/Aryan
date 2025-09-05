import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number, locale: 'en' | 'fa' = 'en'): string {
  if (locale === 'fa') {
    return `£${price.toFixed(2).replace(/\./g, '٫')}`;
  }
  return `£${price.toFixed(2)}`;
}

export function formatDate(date: string | Date, locale: 'en' | 'fa' = 'en'): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  
  if (locale === 'fa') {
    return d.toLocaleDateString('fa-IR', options);
  }
  return d.toLocaleDateString('en-GB', options);
}