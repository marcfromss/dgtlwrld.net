"use client"

import Link from "next/link"
import { ArrowLeft, ImageIcon, Palette } from "lucide-react"

export default function GraphicDesignPage() {
  const designItems = [
    {
      id: 1,
      title: "Pixel Art Figures",
      type: "Illustration",
      description: "Retro 8-bit style illustration featuring five stylized figures in 1970s fashion",
      image: "/pixel-art-figures.png",
      tags: ["Pixel Art", "Retro", "Character Design"]
    },
    ...Array.from({ length: 7 }, (_, i) => ({
      id: i + 2,
      title: `Design Project ${i + 2}`,
      type: ["Logo", "Poster", "Illustration", "Branding"][i % 4],
      description: "Design work placeholder",
      image: null,
      tags: ["Design"]
    }))
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="px-6 py-8 md:px-12 border-b border-border">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <Link href="/" className="hover:text-accent-foreground transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <div>
            <h1 className="editorial-title text-foreground">Graphic Design</h1>
            <p className="editorial-subtitle text-muted-foreground mt-1">Design & Artwork Portfolio</p>
          </div>
        </div>
      </header>

      <main className="px-6 py-8 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {designItems.map((item) => (
              <div key={item.id} className="retro-tile rounded-2xl p-4 group hover:scale-[1.02] transition-transform">
                <div className="aspect-square bg-muted/50 rounded-xl overflow-hidden mb-3 relative border border-border">
                  {item.image ? (
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center border-2 border-dashed border-border">
                      <div className="text-center">
                        <Palette className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                        <span className="editorial-subtitle text-muted-foreground">{item.type} Placeholder</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <ImageIcon className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    <span className="editorial-subtitle text-foreground truncate text-sm font-medium">
                      {item.title}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {item.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}


