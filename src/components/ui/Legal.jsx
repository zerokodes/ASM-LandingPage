import { Link } from 'react-router-dom';

export function BackLink() {
  return (
    <Link to="/" className="legal-back">
      <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
      Back to home
    </Link>
  );
}

export function LegalSection({ title, children }) {
  return (
    <div className="legal-section">
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
}

export function P({ children }) {
  return <p>{children}</p>;
}

export function UL({ items }) {
  return (
    <ul>
      {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  );
}
