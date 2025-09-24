"use client"

import Link from "next/link"
import { ArrowLeft, Video, ImageIcon } from "lucide-react"

export default function VideographyPage() {
  const placeholderItems = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    type: i % 3 === 0 ? "video" : ("image" as "video" | "image"),
  }))

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="px-6 py-8 md:px-12 border-b border-border">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <Link href="/" className="hover:text-accent-foreground transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <div>
            <h1 className="editorial-title text-foreground">Videography</h1>
            <p className="editorial-subtitle text-muted-foreground mt-1">Video & Photo Portfolio</p>
          </div>
        </div>
      </header>

      <main className="px-6 py-8 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {placeholderItems.map((item) => (
              <div key={item.id} className="retro-tile rounded-2xl p-4 group hover:scale-[1.02] transition-transform">
                <div className="aspect-video bg-muted/50 rounded-xl overflow-hidden mb-3 relative border-2 border-dashed border-border flex items-center justify-center">
                  {item.type === "video" ? (
                    <div className="text-center">
                      <Video className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                      <span className="editorial-subtitle text-muted-foreground">Video Placeholder</span>
                    </div>
                  ) : (
                    <div className="text-center">
                      <ImageIcon className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                      <span className="editorial-subtitle text-muted-foreground">Photo Placeholder</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  {item.type === "video" ? (
                    <Video className="w-4 h-4 text-muted-foreground" />
                  ) : (
                    <ImageIcon className="w-4 h-4 text-muted-foreground" />
                  )}
                  <span className="editorial-subtitle text-foreground">
                    {item.type === "video" ? "Video Project" : "Photo Project"} {item.id}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
