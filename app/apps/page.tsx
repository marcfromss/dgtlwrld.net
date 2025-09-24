"use client"

import Link from "next/link"
import { ArrowLeft, Settings, ExternalLink, Smartphone, Monitor } from "lucide-react"

export default function AppsPage() {
  const apps = [
    {
      id: 1,
      title: "DGTL Overlay",
      platform: "web" as const,
      status: "live" as const,
      type: "CCTV Style Overlay Tool",
      description: "AI-powered object detection with customizable CCTV-style overlays. Upload images and get professional surveillance-style annotations with colored boxes, labels, and timestamps.",
      tags: ["Next.js", "TensorFlow.js", "AI/ML", "Canvas API"],
      url: "https://dgtl-overlay.vercel.app"
    },
    {
      id: 2,
      title: "Cyber Pixelator",
      platform: "web" as const,
      status: "live" as const,
      type: "Image Pixelation Tool",
      description: "Advanced image pixelation and privacy protection tool. Transform images with customizable pixel effects while maintaining visual appeal.",
      tags: ["React", "Canvas API", "Image Processing"],
      url: "https://cyber-pixelator.vercel.app"
    }
  ]

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "mobile":
        return <Smartphone className="w-5 h-5" />
      case "desktop":
        return <Monitor className="w-5 h-5" />
      default:
        return <Settings className="w-5 h-5" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "live":
        return "bg-green-500/10 text-green-500"
      case "beta":
        return "bg-yellow-500/10 text-yellow-500"
      case "development":
        return "bg-blue-500/10 text-blue-500"
      default:
        return "bg-accent/10 text-accent"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="px-6 py-8 md:px-12 border-b border-border">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <Link href="/" className="hover:text-accent-foreground transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <div>
            <h1 className="editorial-title text-foreground">Apps</h1>
            <p className="editorial-subtitle text-muted-foreground mt-1">Applications & Tools Portfolio</p>
          </div>
        </div>
      </header>

      <main className="px-6 py-8 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Apps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {apps.map((app) => (
              <div key={app.id} className="retro-tile rounded-2xl p-6 group hover:scale-[1.02] transition-transform">
                <div className="mb-4">
                  <div className="w-full h-32 bg-muted/50 rounded-xl border-2 border-dashed border-border flex items-center justify-center mb-4">
                    <div className="text-center">
                      {getPlatformIcon(app.platform)}
                      <span className="editorial-subtitle text-muted-foreground text-sm block mt-2">Live App</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    {getPlatformIcon(app.platform)}
                    <span className={`px-2 py-1 text-xs rounded-md ${getStatusColor(app.status)}`}>{app.status}</span>
                  </div>
                  <h3 className="tile-label text-foreground mb-2">{app.title}</h3>
                  <p className="editorial-subtitle text-muted-foreground text-sm leading-relaxed mb-3">
                    {app.description}
                  </p>
                  <p className="text-xs text-muted-foreground mb-4">{app.type}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {app.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                <a 
                  href={app.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 editorial-subtitle transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Visit App</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
