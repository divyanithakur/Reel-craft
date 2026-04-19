"use client"


import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { LucideIcon, Scissors, Languages, Music, Sparkles, FileText, Download } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="feature-card">
      <div className="icon-box">
        <Icon size={24} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const features = [
    { icon: Scissors, title: "Auto trim and cut", description: "AI finds your best moments automatically." },
    { icon: Languages, title: "Auto-captions", description: "Speech to text synced perfectly to audio." },
    { icon: Music, title: "Beat sync", description: "Cuts match your music automatically." },
    { icon: Sparkles, title: "Hook generator", description: "AI writes your perfect first 3 seconds." },
    { icon: FileText, title: "Caption and hashtags", description: "AI writes your Instagram post for you." },
    { icon: Download, title: "One-click export", description: "Download for Reels, TikTok and Shorts." },
  ];

  return (
    <main className="min-h-screen relative">
      <Navbar />
      
      {/* Hero Section with Dotted Surface Background */}
      <header className="hero section reveal" id="home">

        <div className="container hero-content">
          <h1>Edit raw videos into <span className="text-purple">viral Reels</span> in minutes</h1>
          <p className="subtitle">No editing skills needed. Upload your raw footage and let AI do the heavy lifting.</p>
          <div className="hero-btns">
            <Link href="/upload" className="btn btn-primary">Start editing free</Link>
            <Link href="#features" className="btn btn-outline">See how it works</Link>
          </div>

          <div className="editor-preview">
            <div className="editor-header">
              <div className="dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="editor-title">ReelCraft Editor</div>
            </div>
            <div className="editor-body">
              <div className="video-container">
                <div className="play-btn">
                  <Sparkles size={32} />
                </div>
                <p className="preview-text">your video preview here</p>
              </div>
            </div>
            <div className="editor-footer">
              <div className="timeline">
                <div className="timeline-bar active" style={{ width: "35%" }}></div>
                <div className="timeline-bar" style={{ width: "20%" }}></div>
                <div className="timeline-bar active" style={{ width: "15%" }}></div>
                <div className="timeline-bar" style={{ width: "25%" }}></div>
              </div>
              <div className="time-display">0:24 / 0:58</div>
            </div>
          </div>
        </div>
      </header>

      <section className="features section reveal" id="features">
        <div className="container">
          <div className="section-tag">FEATURES</div>
          <h2 className="section-title">Everything a creator needs</h2>
          <p className="section-subtitle">All tools in one place — no app switching</p>
          
          <div className="features-grid">
            {features.map((f, i) => (
              <FeatureCard key={i} icon={f.icon} title={f.title} description={f.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="how-it-works section reveal">
        <div className="container">
          <div className="section-tag">HOW IT WORKS</div>
          <h2 className="section-title">3 simple steps</h2>
          <p className="section-subtitle">From raw video to published Reel in under 10 minutes</p>
          
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Upload your video</h3>
              <p>Any format, any length.</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>AI edits it for you</h3>
              <p>Captions, cuts, music.</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Export and post</h3>
              <p>Ready for Instagram.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
