import Link from "next/link"
import { Video, Palette, Globe, Settings } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {/* Horizontal subway lines */}
        <div className="subway-line absolute top-1/3 left-0 right-0"></div>
        <div className="subway-line absolute top-2/3 left-0 right-0"></div>

        {/* Vertical subway lines */}
        <div className="subway-line-vertical absolute left-1/3 top-0 bottom-0"></div>
        <div className="subway-line-vertical absolute left-2/3 top-0 bottom-0"></div>

        {/* Pixel dots at intersections */}
        <div className="pixel-dot absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="pixel-dot absolute top-1/3 left-2/3 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="pixel-dot absolute top-2/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="pixel-dot absolute top-2/3 left-2/3 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Header */}
      <header className="px-6 py-8 md:px-12 md:py-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="editorial-title text-foreground text-balance">dgtlwrld.net</h1>
          <p className="editorial-subtitle text-muted-foreground mt-2">Portfolio</p>
        </div>
      </header>

      {/* Bento Grid */}
      <main className="px-6 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Videography Tile */}
            <Link
              href="/videography"
              className="group retro-tile rounded-3xl p-8 md:p-12 h-64 md:h-80 flex flex-col justify-end"
            >
              <div className="pixel-corner top-4 right-4"></div>
              <div className="absolute top-8 md:top-12 left-8 md:left-12">
                <Video className="w-8 h-8 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
              </div>
              <h2 className="tile-label text-foreground group-hover:text-accent-foreground transition-colors duration-300">
                Videography
              </h2>
            </Link>

            {/* Graphic Design Tile */}
            <Link
              href="/design"
              className="group retro-tile rounded-3xl p-8 md:p-12 h-64 md:h-80 flex flex-col justify-end"
            >
              <div className="pixel-corner top-4 left-4"></div>
              <div className="absolute top-8 md:top-12 left-8 md:left-12">
                <Palette className="w-8 h-8 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
              </div>
              <h2 className="tile-label text-foreground group-hover:text-accent-foreground transition-colors duration-300">
                Graphic Design
              </h2>
            </Link>

            {/* Web Design Tile */}
            <Link
              href="/web"
              className="group retro-tile rounded-3xl p-8 md:p-12 h-64 md:h-80 flex flex-col justify-end"
            >
              <div className="pixel-corner bottom-4 right-4"></div>
              <div className="absolute top-8 md:top-12 left-8 md:left-12">
                <Globe className="w-8 h-8 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
              </div>
              <h2 className="tile-label text-foreground group-hover:text-accent-foreground transition-colors duration-300">
                Web Design
              </h2>
            </Link>

            {/* Portfolio Builder Tile */}
            <Link
              href="/builder"
              className="group retro-tile rounded-3xl p-8 md:p-12 h-64 md:h-80 flex flex-col justify-end"
            >
              <div className="pixel-corner bottom-4 left-4"></div>
              <div className="absolute top-8 md:top-12 left-8 md:left-12">
                <Settings className="w-8 h-8 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
              </div>
              <h2 className="tile-label text-foreground group-hover:text-accent-foreground transition-colors duration-300">
                Portfolio Builder
              </h2>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 py-8 md:px-12 md:py-12 mt-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-4 editorial-subtitle text-muted-foreground">
            <Link href="mailto:support@dgtlwrld.net" className="hover:text-foreground transition-colors">
              Email
            </Link>
            <span className="text-border">|</span>
            <Link href="https://instagram.com/dgtlwrld.nett" className="hover:text-foreground transition-colors">
              Instagram
            </Link>
            <span className="text-border">|</span>
            <Link href="https://tiktok.com/@a.digital.world" className="hover:text-foreground transition-colors">
              TikTok
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
