"use client"

import Link from "next/link"
import { ArrowLeft, Globe, ExternalLink } from "lucide-react"

export default function WebDesignPage() {
  const placeholderProjects = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    title: `Web Project ${i + 1}`,
    type: ["E-commerce", "Portfolio", "Landing Page", "Web App", "Blog", "Corporate"][i % 6],
    tags: [["React", "Next.js"], ["Vue", "Nuxt"], ["HTML", "CSS"], ["React", "TypeScript"], ["WordPress"], ["Angular"]][
      i % 6
    ],
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
            <h1 className="editorial-title text-foreground">Web Design</h1>
            <p className="editorial-subtitle text-muted-foreground mt-1">Web Projects & Development</p>
          </div>
        </div>
      </header>

      <main className="px-6 py-8 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {placeholderProjects.map((project) => (
              <div
                key={project.id}
                className="retro-tile rounded-2xl p-6 group hover:scale-[1.02] transition-transform"
              >
                <div className="mb-4">
                  <div className="w-full h-32 bg-muted/50 rounded-xl border-2 border-dashed border-border flex items-center justify-center mb-4">
                    <div className="text-center">
                      <Globe className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                      <span className="editorial-subtitle text-muted-foreground text-sm">Website Preview</span>
                    </div>
                  </div>
                  <h3 className="tile-label text-foreground mb-2">{project.title}</h3>
                  <p className="editorial-subtitle text-muted-foreground text-sm leading-relaxed">
                    {project.type} project placeholder - add your description and details here.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="inline-flex items-center gap-2 text-muted-foreground editorial-subtitle">
                  <ExternalLink className="w-4 h-4" />
                  <span>Add Project Link</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
