export default function Icon({ paths, size = 18, color = 'currentColor', strokeWidth = 1.8, fill = 'none', ...rest }) {
  const list = Array.isArray(paths) ? paths : [paths];
  return (
    <svg width={size} height={size} fill={fill} stroke={color} strokeWidth={strokeWidth} viewBox="0 0 24 24" {...rest}>
      {list.map((d, i) => (
        <path key={i} strokeLinecap="round" strokeLinejoin="round" d={d} />
      ))}
    </svg>
  );
}
