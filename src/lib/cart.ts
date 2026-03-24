export type CartItemType = "menu" | "rijsttafel" | "special";

export interface CartItem {
  id: string; // "{categorySlug}::{itemName}"
  type: CartItemType;
  name: string;
  priceCents: number;
  quantity: number;
}

/** Parse Dutch price string to cents: "€7,50" -> 750, "€31,00 p.p." -> 3100 */
export function parsePrice(priceStr: string): number {
  const cleaned = priceStr
    .replace(/[€\s\u00A0]/g, "")
    .replace(/p\.p\./g, "")
    .replace(",", ".");
  const numeric = parseFloat(cleaned);
  if (isNaN(numeric)) return 0;
  return Math.round(numeric * 100);
}

/** Format cents to Dutch price string: 750 -> "€7,50" */
export function formatPrice(cents: number): string {
  const euros = (cents / 100).toFixed(2).replace(".", ",");
  return `\u20AC${euros}`;
}

export function cartSubtotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.priceCents * item.quantity, 0);
}

export function cartItemCount(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.quantity, 0);
}

export function generateItemId(categorySlug: string, itemName: string): string {
  return `${categorySlug}::${itemName}`;
}
