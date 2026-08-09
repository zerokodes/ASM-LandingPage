export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="footer-logo-row">
              <span className="footer-mark">
                <svg viewBox="0 0 24 24" fill="white" width="16" height="16"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
              </span>
              <span className="footer-brand">ChatSeller</span>
            </div>
            <p className="footer-desc">Your most productive salesperson, live on a link, 24/7. By Apt-Intel.</p>
            <p className="footer-copy">© 2026 ChatSeller by Apt-Intel. All rights reserved.</p>
          </div>
          <div className="footer-col">
            <h4>Product</h4>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="/about">About</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Built for growing businesses, worldwide. Powered by AI.</p>
          <div className="status-row">
            <div className="status-dot" />
            <span>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
