"use client"

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Check } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  buttonText: string;
  highlighted?: boolean;
}

function PricingCard({ title, price, features, buttonText, highlighted }: PricingCardProps) {
  return (
    <div className={cn("pricing-card", highlighted && "highlighted")}>
      {highlighted && <div className="popular-badge">Most popular</div>}
      <div className="card-header">
        <h3>{title}</h3>
        <div className="price">{price} <span className="period">/month</span></div>
      </div>
      <ul className="features-list">
        {features.map((f, i) => (
          <li key={i}><Check size={18} /> {f}</li>
        ))}
      </ul>
      <Link 
        href="/dashboard"
        className={cn("btn full-width", highlighted ? "btn-primary" : "btn-outline")}
      >
        {buttonText}
      </Link>

      <style jsx>{`
        .pricing-card {
          background: #16161e;
          border: 1px solid #252531;
          padding: 40px;
          border-radius: 24px;
          display: flex;
          flex-direction: column;
          gap: 2rem;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
        }
        .highlighted {
          border-color: #7c3aed;
          background: #1c1c27;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
          transform: scale(1.05);
          z-index: 2;
        }
        .popular-badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: #7c3aed;
          color: white;
          padding: 4px 12px;
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 700;
        }
        .card-header h3 { font-size: 1.5rem; margin-bottom: 0.5rem; }
        .price { font-size: 2.5rem; font-weight: 800; }
        .period { font-size: 1rem; color: #7a7890; font-weight: 400; }
        .features-list { display: flex; flex-direction: column; gap: 1rem; flex: 1; list-style: none; padding: 0; }
        .features-list li { display: flex; align-items: center; gap: 0.75rem; color: #7a7890; font-size: 0.95rem; }
      `}</style>
    </div>
  );
}

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <header className="pricing-header section reveal">
        <div className="container" style={{ textAlign: "center" }}>
          <div className="badge">Pricing</div>
          <h1 className="header-title">Simple pricing, no surprises</h1>
          <p className="subtitle">Start free, upgrade when you're ready.</p>
        </div>
      </header>

      <section className="pricing-cards section reveal">
        <div className="container pricing-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
          <PricingCard 
            title="Free"
            price="₹0"
            buttonText="Get started free"
            features={[
              "5 video exports per month",
              "Auto-captions",
              "Basic trimming and cutting",
              "Standard quality export",
              "ReelCraft watermark"
            ]}
          />
          <PricingCard 
            title="Pro"
            price="₹299"
            buttonText="Start Pro free trial"
            highlighted
            features={[
              "Unlimited video exports",
              "Auto-captions",
              "Beat sync",
              "Hook generator",
              "AI caption & hashtag writer",
              "HD quality export",
              "No watermark",
              "Priority support"
            ]}
          />
          <PricingCard 
            title="Creator"
            price="₹599"
            buttonText="Get Creator plan"
            features={[
              "Everything in Pro",
              "Brand kit with logo and fonts",
              "Content calendar",
              "Analytics dashboard",
              "Multi-platform export",
              "Dedicated support"
            ]}
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
