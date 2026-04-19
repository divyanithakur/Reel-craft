"use client"

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Video, Download, Clock, Film, Play, Upload, Layout, Music } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const stats = [
    { icon: Video, label: "Total Reels made", value: "12" },
    { icon: Download, label: "Exports this month", value: "2 of 5" },
    { icon: Clock, label: "Hours saved", value: "8 hrs" },
    { icon: Film, label: "Avg video length", value: "28 sec" },
  ];

  const projects = [
    { title: "Morning routine Reel", date: "Edited 2 days ago", size: "12MB", duration: "0:15" },
    { title: "Product review video", date: "Edited 5 days ago", size: "45MB", duration: "0:45" },
    { title: "Dance transition Reel", date: "Edited 1 week ago", size: "28MB", duration: "0:30" },
  ];

  const actions = [
    { icon: Upload, title: "Upload new video", desc: "Start a new Reel from scratch" },
    { icon: Layout, title: "Browse templates", desc: "Pick a trending Reel format" },
    { icon: Music, title: "Trending audio", desc: "Pick from 30 free sounds" },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="dashboard-content">
        <section className="welcome-section section reveal py-12">
          <div className="container">
            <div className="welcome-left text-left">
              <h1 className="text-4xl font-extrabold mb-4">Welcome back, Creator!</h1>
              <div className="export-status mb-8">
                <p className="text-zinc-400 mb-2">You have 3 exports remaining this month</p>
                <div className="progress-container w-64 h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="progress-bar h-full bg-[#7c3aed]" style={{ width: "40%" }}></div>
                </div>
              </div>
              <button className="btn btn-primary">Create new Reel</button>
            </div>
          </div>
        </section>

        <section className="stats-section section reveal" style={{ paddingTop: 0 }}>
          <div className="container stats-grid">
            {stats.map((s, i) => (
              <div key={i} className="stat-card">
                <div className="stat-icon-wrapper">
                  <s.icon size={24} />
                </div>
                <div className="stat-info">
                  <span className="stat-label" style={{ color: "#7a7890", fontSize: "0.85rem" }}>{s.label}</span>
                  <span className="stat-value">{s.value}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="projects-section section reveal">
          <div className="container">
            <div className="section-header-flex">
              <h2 className="section-title-left">My recent projects</h2>
              <div className="project-filters">
                <button className="filter-btn active">Recent</button>
                <button className="filter-btn">Drafts</button>
                <button className="filter-btn">Published</button>
              </div>
            </div>
            <div className="projects-grid">
              {projects.map((p, i) => (
                <div key={i} className="project-card">
                  <div className="thumbnail">
                    <span className="duration-badge">{p.duration}</span>
                    <div className="play-icon">
                      <Play size={20} />
                    </div>
                  </div>
                  <div className="project-info">
                    <h3>{p.title}</h3>
                    <div className="project-meta" style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "0.85rem", color: "#7a7890" }}>
                      <span>{p.date}</span>
                      <span className="dot-separator" style={{ width: "4px", height: "4px", background: "#252531", borderRadius: "50%" }}></span>
                      <span>{p.size}</span>
                    </div>
                    <div className="project-actions" style={{ display: "flex", gap: "12px", marginTop: "1rem" }}>
                      <button className="btn btn-outline btn-sm" style={{ flex: 1 }}>Edit</button>
                      <button className="btn btn-primary btn-sm" style={{ flex: 1 }}>Download</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="quick-actions section reveal">
          <div className="container">
            <h2 className="section-title-left">Quick actions</h2>
            <div className="actions-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
              {actions.map((a, i) => (
                <div key={i} className="action-card">
                  <div className="stat-icon-wrapper" style={{ minWidth: "48px" }}>
                    <a.icon size={24} />
                  </div>
                  <div className="action-text">
                    <h3>{a.title}</h3>
                    <span className="muted" style={{ color: "#7a7890", fontSize: "0.9rem" }}>{a.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />

      <style jsx>{`
        .action-card {
            background: #16161e;
            border: 1px solid #252531;
            padding: 24px;
            border-radius: 20px;
            display: flex;
            align-items: center;
            gap: 20px;
            cursor: pointer;
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .action-card:hover { border-color: #7c3aed; background: rgba(124, 58, 237, 0.05); }
        .thumbnail { aspect-ratio: 16/9; background: #09090c; display: flex; align-items: center; justify-content: center; position: relative; }
        .duration-badge { position: absolute; bottom: 12px; right: 12px; background: rgba(0,0,0,0.8); color: white; padding: 4px 8px; border-radius: 4px; font-size: 0.75rem; font-weight: 600; }
        .project-card:hover { transform: translateY(-8px); border-color: #7c3aed; }
        .project-card { background: #16161e; border: 1px solid #252531; border-radius: 20px; overflow: hidden; transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
        .filter-btn { background: transparent; border: none; color: #7a7890; padding: 8px 16px; font-size: 0.85rem; font-weight: 500; cursor: pointer; border-radius: 100px; }
        .filter-btn.active { background: #7c3aed; color: white; }
        .project-filters { display: flex; background: #16161d; padding: 4px; border-radius: 100px; }
      `}</style>
    </main>
  );
}
