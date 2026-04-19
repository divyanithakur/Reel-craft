"use client"

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Upload, Cloud, FileVideo } from "lucide-react";

export default function UploadPage() {
  return (
    <main className="min-h-screen relative flex flex-col">
      <Navbar />
      
      <section className="flex-1 flex items-center justify-center section">
        <div className="container max-w-3xl text-center">
          <div className="reveal">
            <h1 className="mb-4">Upload your <span className="text-purple">raw video</span></h1>
            <p className="subtitle mb-12">Supports MP4, MOV and AVI files up to 500MB</p>
            
            <div className="upload-dropzone group">
              <div className="upload-content">
                <div className="upload-icon-wrapper">
                  <Cloud size={48} className="text-purple" />
                </div>
                <h3>Drag and drop your video here</h3>
                <p>or click to browse from your computer</p>
              </div>
              <input type="file" className="upload-input" accept="video/*" />
            </div>
            
            <div className="mt-8">
              <button className="btn btn-primary btn-lg px-12 py-4 text-lg">
                <Upload size={20} className="mr-2" />
                Select video from computer
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .upload-dropzone {
          border: 2px dashed rgba(124, 58, 237, 0.3);
          background: rgba(124, 58, 237, 0.03);
          border-radius: 24px;
          padding: 60px 40px;
          position: relative;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .upload-dropzone:hover {
          border-color: #7c3aed;
          background: rgba(124, 58, 237, 0.08);
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        .upload-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }
        .upload-icon-wrapper {
          width: 80px;
          height: 80px;
          background: rgba(124, 58, 237, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.5rem;
          transition: all 0.3s ease;
        }
        .upload-dropzone:hover .upload-icon-wrapper {
          transform: scale(1.1);
          background: rgba(124, 58, 237, 0.2);
        }
        .upload-input {
          position: absolute;
          inset: 0;
          opacity: 0;
          cursor: pointer;
        }
        h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0;
        }
        .upload-content p {
          color: var(--text-muted);
          margin: 0;
        }
      `}</style>
    </main>
  );
}
