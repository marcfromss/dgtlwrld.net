"use client"

import { useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Upload, X, Image as ImageIcon, Video, FileText, ArrowLeft } from "lucide-react"
import Image from "next/image"

interface UploadSectionProps {
  uploadedFiles: File[]
  setUploadedFiles: (files: File[]) => void
  onNext: () => void
  onPrev: () => void
}

export default function UploadSection({ uploadedFiles, setUploadedFiles, onNext, onPrev }: UploadSectionProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setUploadedFiles(prev => [...prev, ...acceptedFiles])
  }, [setUploadedFiles])

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index))
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif', '.webp'],
      'video/*': ['.mp4', '.webm', '.mov']
    },
    maxFiles: 50,
    maxSize: 50 * 1024 * 1024 // 50MB per file
  })

  const getFileIcon = (file: File) => {
    if (file.type.startsWith('image/')) return <ImageIcon className="w-5 h-5" />
    if (file.type.startsWith('video/')) return <Video className="w-5 h-5" />
    return <FileText className="w-5 h-5" />
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="editorial-title">Upload Your Media</h2>
        <p className="editorial-subtitle text-muted-foreground max-w-2xl mx-auto">
          Drag and drop your images and videos to create your portfolio. We support all major formats.
        </p>
      </div>

      {/* Upload Area */}
      <Card className="retro-tile">
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors duration-200 cursor-pointer ${
            isDragActive 
              ? 'border-accent bg-accent/5' 
              : 'border-muted-foreground/30 hover:border-muted-foreground/50'
          }`}
        >
          <input {...getInputProps()} />
          <div className="space-y-4">
            <motion.div
              animate={{ scale: isDragActive ? 1.1 : 1 }}
              transition={{ duration: 0.2 }}
              className="mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center"
            >
              <Upload className="w-8 h-8 text-muted-foreground" />
            </motion.div>
            
            <div>
              <p className="tile-label text-lg mb-2">
                {isDragActive ? "Drop your files here" : "Drag & drop files here"}
              </p>
              <p className="text-sm text-muted-foreground">
                or click to browse - Supports images and videos up to 50MB each
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Uploaded Files Grid */}
      {uploadedFiles.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="tile-label text-lg">Uploaded Files ({uploadedFiles.length})</h3>
            <Button variant="outline" onClick={() => setUploadedFiles([])}>
              Clear All
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {uploadedFiles.map((file, index) => (
              <motion.div
                key={`${file.name}-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="group relative"
              >
                <Card className="retro-tile overflow-hidden">
                  <div className="aspect-square bg-muted flex items-center justify-center relative">
                    <div className="absolute top-2 right-2">
                      <Button
                        size="sm"
                        variant="destructive"
                        className="w-6 h-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => removeFile(index)}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                    
                    {file.type.startsWith('image/') ? (
                      <Image
                        src={URL.createObjectURL(file)}
                        alt={file.name}
                        width={150}
                        height={150}
                        className="object-cover w-full h-full"
                      />
                    ) : file.type.startsWith('video/') ? (
                      <video
                        src={URL.createObjectURL(file)}
                        className="object-cover w-full h-full"
                        muted
                      />
                    ) : (
                      <div className="text-center">
                        {getFileIcon(file)}
                      </div>
                    )}
                  </div>
                  
                  <CardContent className="p-3">
                    <p className="text-xs font-medium truncate mb-1">{file.name}</p>
                    <p className="text-xs text-muted-foreground">{formatFileSize(file.size)}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between pt-6">
        <Button variant="outline" onClick={onPrev}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Templates
        </Button>
        <Button onClick={onNext} disabled={uploadedFiles.length === 0}>
          Next: Customize
        </Button>
      </div>
    </div>
  )
}
