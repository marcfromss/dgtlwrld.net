"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Upload, Palette, Eye } from "lucide-react"
import Link from "next/link"
import TemplateGallery from "@/components/TemplateGallery"
import UploadSection from "@/components/UploadSection"
import PortfolioPreview from "@/components/PortfolioPreview"

const builderTemplates = [
  {
    id: "retro-pixel",
    name: "Retro Pixel",
    description: "Classic pixel art inspired design",
    preview: "/api/placeholder/600/400",
    category: "Creative"
  },
  {
    id: "minimal-bold",
    name: "Minimal Bold",
    description: "Clean and bold typography focused",
    preview: "/api/placeholder/600/400",
    category: "Professional"
  },
  {
    id: "neon-grid",
    name: "Neon Grid",
    description: "Futuristic grid-based layout",
    preview: "/api/placeholder/600/400",
    category: "Creative"
  },
  {
    id: "organic-flow",
    name: "Organic Flow",
    description: "Fluid and dynamic layout system",
    preview: "/api/placeholder/600/400",
    category: "Creative"
  },
  {
    id: "floating-cards",
    name: "Floating Cards",
    description: "3D floating card animations with depth",
    preview: "/api/placeholder/600/400",
    category: "Interactive"
  },
  {
    id: "morphing-geometry",
    name: "Morphing Geometry",
    description: "Animated geometric shapes with depth layers",
    preview: "/api/placeholder/600/400",
    category: "Interactive"
  },
  {
    id: "particle-matrix",
    name: "Particle Matrix",
    description: "Animated particle system with depth",
    preview: "/api/placeholder/600/400",
    category: "Interactive"
  },
  {
    id: "depth-layers",
    name: "Depth Layers",
    description: "Multi-layered design with parallax effects",
    preview: "/api/placeholder/600/400",
    category: "Interactive"
  }
]

export default function PortfolioBuilder() {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null)
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  const [currentStep, setCurrentStep] = useState<"templates" | "upload" | "customize" | "preview">("templates")

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="subway-line absolute top-1/3 left-0 right-0"></div>
        <div className="subway-line absolute top-2/3 left-0 right-0"></div>
        <div className="subway-line-vertical absolute left-1/3 top-0 bottom-0"></div>
        <div className="subway-line-vertical absolute left-2/3 top-0 bottom-0"></div>
      </div>

      {/* Header */}
      <header className="px-6 py-8 md:px-12 md:py-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4">
                <ArrowLeft className="w-4 h-4" />
                Back to Portfolio
              </Link>
              <h1 className="editorial-title text-foreground text-balance">Portfolio Builder</h1>
              <p className="editorial-subtitle text-muted-foreground mt-2">Create stunning portfolios with innovative templates</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 md:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          <Tabs value={currentStep} onValueChange={(value) => setCurrentStep(value as any)} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="templates" className="flex items-center gap-2">
                <Palette className="w-4 h-4" />
                Templates
              </TabsTrigger>
              <TabsTrigger value="upload" className="flex items-center gap-2">
                <Upload className="w-4 h-4" />
                Upload Media
              </TabsTrigger>
              <TabsTrigger value="customize" className="flex items-center gap-2">
                <Palette className="w-4 h-4" />
                Customize
              </TabsTrigger>
              <TabsTrigger value="preview" className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                Preview
              </TabsTrigger>
            </TabsList>

            <TabsContent value="templates">
              <TemplateGallery 
                templates={builderTemplates}
                selectedTemplate={selectedTemplate}
                onTemplateSelect={setSelectedTemplate}
                onNext={() => setCurrentStep("upload")}
              />
            </TabsContent>

            <TabsContent value="upload">
              <UploadSection 
                uploadedFiles={uploadedFiles}
                setUploadedFiles={setUploadedFiles}
                onNext={() => setCurrentStep("customize")}
                onPrev={() => setCurrentStep("templates")}
              />
            </TabsContent>

            <TabsContent value="customize">
              <div className="space-y-6">
                <Card className="retro-tile">
                  <CardHeader>
                    <CardTitle>Customize Your Portfolio</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Selected template: <span className="font-medium">{selectedTemplate}</span>
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Uploaded files: <span className="font-medium">{uploadedFiles.length}</span>
                    </p>
                    <div className="flex gap-3">
                      <Button onClick={() => setCurrentStep("upload")} variant="outline">
                        Upload More Media
                      </Button>
                      <Button onClick={() => setCurrentStep("preview")}>
                        Preview Portfolio
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="preview">
              <PortfolioPreview 
                template={selectedTemplate}
                files={uploadedFiles}
                onEdit={() => setCurrentStep("customize")}
              />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
