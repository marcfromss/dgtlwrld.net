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
            className={`group cursor-pointer ${selectedTemplate === template.id ? 'ring-2 ring-accent' : ''}`}
            onClick={() => onTemplateSelect(template.id)}
          >
            <Card className={`retro-tile h-full transition-all duration-300 hover:shadow-lg ${selectedTemplate === template.id ? 'scale-105 border-accent' : 'hover:scale-102'}`}>
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 rounded-t-lg flex items-center justify-center">
                  <Sparkles className="w-12 h-12 text-muted-foreground/50" />
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
          className="retro-tile"
        >
          Continue with Selected Template
        </Button>
      </div>
    </div>
  )
}
