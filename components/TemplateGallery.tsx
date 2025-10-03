"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Sparkles } from "lucide-react"
import Image from "next/image"

interface Template {
  id: string
  name: string
  description: string
  preview: string
  category: string
}

interface TemplateGalleryProps {
  templates: Template[]
  selectedTemplate: string | null
  onTemplateSelect: (templateId: string) => void
  onNext: () => void
}

export default function TemplateGallery({ templates, selectedTemplate, onTemplateSelect, onNext }: TemplateGalleryProps) {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="editorial-title text-2xl">Choose Your Template</h2>
        <p className="editorial-subtitle text-muted-foreground max-w-2xl mx-auto">
          Select from our innovative collection of portfolio templates. Each template is designed to showcase your work uniquely.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template, index) => (
          <motion.div
            key={template.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`group cursor-pointer transition-all duration-200 hover:scale-102 ${selectedTemplate === template.id ? 'ring-2 ring-accent shadow-lg' : ''}`}
            onClick={() => {
              onTemplateSelect(template.id)
              // Add haptic feedback on mobile
              if (navigator.vibrate) {
                navigator.vibrate(50)
              }
            }}
          >
            <Card className={`retro-tile h-full transition-all duration-300 border-2 ${
              selectedTemplate === template.id 
                ? 'border-accent scale-105 shadow-xl bg-accent/5' 
                : 'border-transparent hover:border-border hover:scale-[1.02]'
            }`}>
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 rounded-t-lg overflow-hidden relative">
                  {template.id === "retro-pixel" && <RetroPixelPreview />}
                  {template.id === "minimal-bold" && <MinimalBoldPreview />}
                  {template.id === "neon-grid" && <NeonGridPreview />}
                  {template.id === "organic-flow" && <OrganicFlowPreview />}
                </div>
                {selectedTemplate === template.id && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-3 right-3"
                  >
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-accent-foreground" />
                    </div>
                  </motion.div>
                )}
              </div>
              
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="tile-label text-lg">{template.name}</CardTitle>
                  <Badge variant="secondary" className="text-xs">
                    {template.category}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{template.description}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Responsive Design</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Custom Animations</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Unique Layout</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="text-center pt-6">
        <Button 
          onClick={onNext}
          disabled={!selectedTemplate}
          size="lg"
          className={`retro-tile transition-all duration-300 ${
            selectedTemplate 
              ? 'bg-accent hover:bg-accent/90 text-accent-foreground scale-105 shadow-lg' 
              : 'opacity-50'
          }`}
        >
          {selectedTemplate ? (
            <>
              ✓ Continue with {templates.find(t => t.id === selectedTemplate)?.name}
              <Sparkles className="w-4 h-4 ml-2" />
            </>
          ) : (
            'Select a Template to Continue'
          )}
        </Button>
      </div>
    </div>
  )
}

// Template Preview Components
function RetroPixelPreview() {
  return (
    <div className="w-full h-full bg-gray-900 relative p-2">
      {/* Subway lines */}
      <div className="absolute top-1/3 left-0 right-0 h-px bg-cyan-400 opacity-60"></div>
      <div className="absolute top-2/3 left-0 right-0 h-px bg-cyan-400 opacity-60"></div>
      <div className="absolute left-1/3 top-0 bottom-0 w-px bg-cyan-400 opacity-60"></div>
      <div className="absolute left-2/3 top-0 bottom-0 w-px bg-cyan-400 opacity-60"></div>
      
      {/* Pixel dots */}
      <div className="absolute top-1/3 left-1/3 w-1 h-1 bg-cyan-400 transform -translate-x-1/2 -translate-y-1/2 rounded-sm"></div>
      <div className="absolute top-1/3 left-2/3 w-1 h-1 bg-cyan-400 transform -translate-x-1/2 -translate-y-1/2 rounded-sm"></div>
      <div className="absolute top-2/3 left-1/3 w-1 h-1 bg-cyan-400 transform -translate-x-1/2 -translate-y-1/2 rounded-sm"></div>
      <div className="absolute top-2/3 left-2/3 w-1 h-1 bg-cyan-400 transform -translate-x-1/2 -translate-y-1/2 rounded-sm"></div>
      
      {/* Content */}
      <h3 className="text-white text-xs font-mono absolute bottom-2 left-2">PORTFOLIO</h3>
    </div>
  )
}

function MinimalBoldPreview() {
  return (
    <div className="w-full h-full bg-white relative p-2">
      <div className="text-center pt-4">
        <div className="w-8 h-1 bg-black mx-auto mb-2"></div>
        <h3 className="text-black text-lg font-black">PORTFOLIO</h3>
        <div className="w-8 h-1 bg-black mx-auto mt-1"></div>
      </div>
      
      {/* Sample content */}
      <div className="absolute bottom-2 left-2 right-2 space-y-1">
        <div className="h-1 bg-gray-300"></div>
        <div className="h-1 bg-gray-200"></div>
        <div className="h-1 bg-gray-400"></div>
      </div>
    </div>
  )
}

function NeonGridPreview() {
  return (
    <div className="w-full h-full bg-black relative p-2">
      {/* Grid lines */}
      <div className="grid grid-cols-3 grid-rows-3 gap-px h-full">
        {/* Fill grid cells */}
        <div className="bg-cyan-400/10 border border-cyan-400/30"></div>
        <div className="bg-cyan-400/20 border border-cyan-400/50"></div>
        <div className="bg-cyan-400/10 border border-cyan-400/30"></div>
        <div className="bg-cyan-400/20 border border-cyan-400/50"></div>
        <div className="bg-cyan-400/30 border border-cyan-400 flex items-center justify-center">
          <span className="text-cyan-400 text-xs font-mono">GRID</span>
        </div>
        <div className="bg-cyan-400/20 border border-cyan-400/50"></div>
        <div className="bg-cyan-400/10 border border-cyan-400/30"></div>
        <div className="bg-cyan-400/20 border border-cyan-400/50"></div>
        <div className="bg-cyan-400/10 border border-cyan-400/30"></div>
      </div>
    </div>
  )
}

function OrganicFlowPreview() {
  return (
    <div className="w-full h-full bg-gray-50 relative overflow-hidden">
      {/* Flowing curves */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 150">
        <path
          d="M20 30 Q60 10 100 30 T180 30"
          stroke="#e5e7eb"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M0 60 Q80 40 160 60 T200 60"
          stroke="#d1d5db"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M20 90 Q100 70 180 90 T220 90"
          stroke="#9ca3af"
          strokeWidth="2"
          fill="none"
        />
      </svg>
      
      {/* Floating elements */}
      <div className="absolute top-4 left-6 w-3 h-3 bg-purple-300 rounded-full opacity-60"></div>
      <div className="absolute top-8 right-8 w-2 h-2 bg-pink-300 rounded-full opacity-60"></div>
      <div className="absolute bottom-6 left-8 w-4 h-4 bg-blue-300 rounded-xl opacity-40"></div>
      <div className="absolute bottom-4 right-4 w-2 h-2 bg-green-300 rounded-full opacity-60"></div>
      
      {/* Text */}
      <h3 className="absolute bottom-2 left-2 text-gray-600 text-xs font-light">ORGANIC</h3>
    </div>
  )
}
