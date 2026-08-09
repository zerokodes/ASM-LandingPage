/** Merge class strings, filtering falsy values. */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

/** Convert a hex color to an "r,g,b" string for use in rgba(). */
export function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}
