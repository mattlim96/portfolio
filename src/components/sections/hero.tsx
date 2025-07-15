"use client" // This directive is needed for client-side interactivity

import React from 'react'
import Image from 'next/image' // Next.js optimized image component
import { Github, Linkedin, Music } from 'lucide-react' // Import icons
import { Button } from '@/components/ui/button'
import { personalInfo } from '@/data/portfolio'

// Define the social icon mapping for easy maintenance
const socialIcons = {
  github: <Github className="h-5 w-5" />,
  linkedin: <Linkedin className="h-5 w-5" />,
  soundcloud: <Music className="h-5 w-5" />,
} as const

export function Hero() {
  // Destructure personal info for cleaner JSX
  const { name, tagline, bio, resumeUrl, socialLinks, profileImage } = personalInfo

  return (
    // Use semantic HTML with section tag for better accessibility
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-br from-background to-muted">
      <div className="container px-4 py-16 md:py-24 max-w-4xl mx-auto">
        {/* Grid layout for responsive design */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <div className="space-y-8">
            {/* Header Section */}
            <div className="space-y-4">
              <p className="text-lg text-primary">
                Hello, my name is
              </p>
              <h1 className="text-4xl md:text-6xl font-bold">
                {name}
              </h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground">
                {tagline}
              </h2>
            </div>
            
            {/* Bio Section */}
            <p className="text-lg text-muted-foreground max-w-prose">
              {bio}
            </p>
            
            {/* Call to Action Section */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Resume Button */}
              <Button 
                asChild // This prop allows the Button to inherit properties from its child
                size="lg"
                className="bg-primary hover:bg-primary/90"
              >
                <a 
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer" // Security best practice for external links
                >
                  View Resume
                </a>
              </Button>
              
              {/* Social Links */}
              <div className="flex gap-3">
                {/* Map through social links to create buttons */}
                {(Object.entries(socialLinks) as [keyof typeof socialIcons, string][]).map(([platform, url]) => (
                  <Button
                    key={platform}
                    variant="outline"
                    size="icon"
                    asChild
                    className="hover:bg-accent"
                  >
                    <a 
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit my ${platform} profile`} // Accessibility improvement
                    >
                      {socialIcons[platform]}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Image Column */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative gradient background */}
              <div 
                className="absolute -inset-4 bg-gradient-to-r from-primary to-primary/50 rounded-full blur-2xl opacity-20"
                aria-hidden="true" // Hide from screen readers as it's decorative
              />
              {/* Profile Image */}
              <div className="relative aspect-square w-64 md:w-80 rounded-full overflow-hidden border-4 border-background shadow-xl">
                <Image
                  src={profileImage}
                  alt={`${name} - Profile Photo`}
                  fill
                  priority // Load this image first as it's above the fold
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 