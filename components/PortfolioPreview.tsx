"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Download, Share, Eye, Palette } from "lucide-react"
import Image from "next/image"

interface PortfolioPreviewProps {
  template: string | null
  files: File[]
  onEdit: () => void
}

export default function PortfolioPreview({ template, files, onEdit }: PortfolioPreviewProps) {
  const [previewDevice, setPreviewDevice] = useState<"desktop" | "tablet" | "mobile">("desktop")

  const getDeviceStyles = () => {
    switch (previewDevice) {
      case "mobile":
        return "max-w-xs mx-auto"
      case "tablet":
        return "max-w-lg mx-auto"
      default:
        return "max-w-6xl mx-auto"
    }
  }

  const renderTemplate = () => {
    if (!template) return null

    switch (template) {
      case "retro-pixel":
        return <RetroPixelTemplate files={files} />
      case "minimal-bold":
        return <MinimalBoldTemplate files={files} />
      case "neon-grid":
        return <NeonGridTemplate files={files} />
      case "organic-flow":
        return <OrganicFlowTemplate files={files} />
      case "floating-cards":
        return <FloatingCardsTemplate files={files} />
      case "morphing-geometry":
        return <MorphingGeometryTemplate files={files} />
      case "particle-matrix":
        return <ParticleMatrixTemplate files={files} />
      case "depth-layers":
        return <DepthLayersTemplate files={files} />
      default:
        return <DefaultTemplate files={files} />
    }
  }

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="editorial-title">Portfolio Preview</h2>
        <p className="editorial-subtitle text-muted-foreground">
          See how your portfolio looks across different devices
        </p>
      </div>

      <Card className="retro-tile">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Live Preview</CardTitle>
            <div className="flex gap-3">
              <Button variant="outline" onClick={onEdit}>
                <Palette className="w-4 h-4 mr-2" />
                Edit Design
              </Button>
              <Button variant="outline">
                <Share className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button>
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Device Preview Tabs */}
          <Tabs value={previewDevice} onValueChange={(value) => setPreviewDevice(value as any)} className="mb-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="desktop">Desktop</TabsTrigger>
              <TabsTrigger value="tablet">Tablet</TabsTrigger>
              <TabsTrigger value="mobile">Mobile</TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Live Preview Container */}
          <div className="bg-gray-50 p-8 rounded-lg border-2 border-dashed border-gray-200">
            <div className={`${getDeviceStyles()} bg-white shadow-xl rounded-lg overflow-hidden`}>
              {renderTemplate()}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="text-center pt-6">
        <Button variant="outline" onClick={onEdit}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Customization
        </Button>
      </div>
    </div>
  )
}

// Template Components
function RetroPixelTemplate({ files }: { files: File[] }) {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Subway Line Background */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/3 left-0 right-0 h-px bg-cyan-400"></div>
        <div className="absolute top-2/3 left-0 right-0 h-px bg-cyan-400"></div>
      </div>
      
      <div className="relative z-10 p-8">
        <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: 'monospace' }}>
          Your Portfolio
        </h1>
        <div className="grid grid-cols-2 gap-4">
          {files.slice(0, 6).map((file, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="aspect-square border-2 border-cyan-400 bg-gray-800"
            >
                      {file.type.startsWith('image/') ? (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                          Image Preview
                        </div>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="text-xs text-gray-400">Video</span>
                        </div>
                      )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

function MinimalBoldTemplate({ files }: { files: File[] }) {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="p-12">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-black mb-4">PORTFOLIO</h1>
          <div className="w-16 h-1 bg-black mx-auto"></div>
        </div>
        
        <div className="space-y-12">
          {files.slice(0, 3).map((file, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="aspect-video bg-gray-100 mb-4">
                {file.type.startsWith('image/') ? (
                  <Image
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                    width={600}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-gray-400">Video Content</span>
                  </div>
                )}
              </div>
              <h3 className="text-2xl font-bold">Project {index + 1}</h3>
              <p className="text-gray-600">Description goes here</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function NeonGridTemplate({ files }: { files: File[] }) {
  return (
    <div className="min-h-screen bg-black text-cyan-400">
      <div className="p-8">
        <div className="grid grid-cols-3 gap-1 mb-8">
          <div className="h-16 bg-cyan-400/20 border border-cyan-400"></div>
          <div className="h-16 bg-cyan-400/20 border border-cyan-400 flex items-center justify-center">
            <span className="font-mono font-bold">GRID</span>
          </div>
          <div className="h-16 bg-cyan-400/20 border border-cyan-400"></div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {files.slice(0, 8).map((file, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="aspect-square border border-cyan-400 bg-black/50 overflow-hidden"
            >
              {file.type.startsWith('image/') ? (
                <Image
                  src={URL.createObjectURL(file)}
                  alt={file.name}
                  width={200}
                  height={200}
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center border-2 border-dashed border-cyan-400">
                  <span className="text-sm">VIDEO</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

function OrganicFlowTemplate({ files }: { files: File[] }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-light mb-4">Organic</h1>
          <p className="text-gray-600">Flowing creativity</p>
        </div>
        
        <div className="space-y-8">
          {files.map((file, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`${index % 2 === 0 ? 'ml-0' : 'ml-12'}`}
            >
              <div className={`aspect-video bg-white rounded-3xl shadow-lg ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                {file.type.startsWith('image/') ? (
                  <Image
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                    width={400}
                    height={225}
                    className="object-cover w-full h-full rounded-3xl"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center rounded-3xl bg-gray-100">
                    <span className="text-gray-400">Video</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

function FloatingCardsTemplate({ files }: { files: File[] }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Portfolio</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {files.slice(0, 6).map((file, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="aspect-square bg-white/20 rounded-lg mb-3 flex items-center justify-center">
                  {file.type.startsWith('image/') ? (
                    <Image
                      src={URL.createObjectURL(file)}
                      alt={file.name}
                      width={150}
                      height={150}
                      className="object-cover w-full h-full rounded-lg"
                    />
                  ) : (
                    <span className="text-sm">Video</span>
                  )}
                </div>
                <h3 className="text-sm font-medium">Project {index + 1}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

function MorphingGeometryTemplate({ files }: { files: File[] }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="p-8">
        <div className="flex items-center justify-center mb-8">
          <div className="w-16 h-1 bg-blue-500 transform rotate-45 animate-spin" style={{animationDuration: '3s'}}></div>
          <h1 className="text-4xl font-bold mx-4">PORTFOLIO</h1>
          <div className="w-16 h-1 bg-green-500 transform -rotate-45 animate-pulse"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {files.slice(0, 4).map((file, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className={`absolute top-0 left-0 w-full h-full ${
                index % 2 === 0 ? 'bg-blue-500/20' : 'bg-green-500/20'
              } rounded-lg transform rotate-3`}></div>
              <div className="relative bg-gray-900 rounded-lg p-6 border border-white/20">
                <div className="aspect-video bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                  {file.type.startsWith('image/') ? (
                    <Image
                      src={URL.createObjectURL(file)}
                      alt={file.name}
                      width={300}
                      height={200}
                      className="object-cover w-full h-full rounded-lg"
                    />
                  ) : (
                    <span className="text-gray-400">Video Content</span>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2">Project {index + 1}</h3>
                <p className="text-gray-400">Description goes here</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ParticleMatrixTemplate({ files }: { files: File[] }) {
  return (
    <div className="min-h-screen bg-black text-green-400">
      <div className="p-8">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-mono font-bold mb-4">PORTFOLIO.MATRIX</h1>
          <div className="flex justify-center space-x-2">
            {Array.from({length: 10}).map((_, i) => (
              <div key={i} className="w-1 h-1 bg-green-400 animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4">
          {files.slice(0, 9).map((file, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="aspect-square bg-green-900/20 border border-green-400/30 rounded-lg p-2"
            >
              <div className="w-full h-full bg-black/50 rounded flex items-center justify-center">
                {file.type.startsWith('image/') ? (
                  <Image
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                    width={100}
                    height={100}
                    className="object-cover w-full h-full rounded"
                  />
                ) : (
                  <span className="text-xs text-green-400">VIDEO</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

function DepthLayersTemplate({ files }: { files: File[] }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-900 text-white">
      <div className="p-8 relative">
        {/* Background layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
        
        {/* Content layer */}
        <div className="relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-light mb-4">PORTFOLIO</h1>
            <div className="w-20 h-px bg-white/30 mx-auto"></div>
          </div>
          
          <div className="space-y-8">
            {files.map((file, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`relative ${index % 2 === 0 ? 'ml-0' : 'ml-12'}`}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="aspect-video bg-white/5 rounded-xl mb-4 flex items-center justify-center">
                    {file.type.startsWith('image/') ? (
                      <Image
                        src={URL.createObjectURL(file)}
                        alt={file.name}
                        width={400}
                        height={225}
                        className="object-cover w-full h-full rounded-xl"
                      />
                    ) : (
                      <span className="text-white/60">Video Content</span>
                    )}
                  </div>
                  <h3 className="text-xl font-medium mb-2">Project {index + 1}</h3>
                  <p className="text-white/70">Description goes here</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function DefaultTemplate({ files }: { files: File[] }) {
  return (
    <div>No template selected</div>
  )
}
