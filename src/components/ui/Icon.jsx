export default function Icon({ paths, size, color = 'currentColor', strokeWidth = 1.8, fill = 'none', className, ...rest }) {
  const list = Array.isArray(paths) ? paths : [paths];
  // No fixed size by default — icons used inside a sized box (e.g. .row-icon)
  // rely on the "icon-svg" class to scale with that box at every breakpoint,
  // instead of staying a constant pixel size while the box around it shrinks
  // on mobile. Callers that need a literal pixel size can still pass one.
  const dimensions = size ? { width: size, height: size } : {};
  return (
    <svg
      {...dimensions}
      fill={fill}
      stroke={color}
      strokeWidth={strokeWidth}
      viewBox="0 0 24 24"
      className={size ? className : ['icon-svg', className].filter(Boolean).join(' ')}
      {...rest}
    >
      {list.map((d, i) => (
        <path key={i} strokeLinecap="round" strokeLinejoin="round" d={d} />
      ))}
    </svg>
  );
}
