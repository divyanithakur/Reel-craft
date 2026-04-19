"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/#features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Dashboard", href: "/dashboard" },
  ];

  const isDashboard = pathname === "/dashboard";

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <div className="logo-wrapper">
          <Link href="/" className="logo">ReelCraft</Link>
        </div>
        <div className="nav-links-wrapper">
          <ul className="nav-links">
            {links.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href} 
                  className={cn(pathname === link.href && "active")}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="nav-btn-wrapper">
          {isDashboard ? (
            <div className="user-avatar">RC</div>
          ) : (
            <Link href="/upload" className="btn btn-primary">Get started free</Link>
          )}
        </div>
      </div>
    </nav>
  );
}
