import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="logo">ReelCraft</div>
        <p className="footer-msg">Built for small creators. Free to start.</p>
        <div className="footer-links">
          <Link href="#">Privacy</Link>
          <Link href="#">Terms</Link>
          <Link href="#">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
