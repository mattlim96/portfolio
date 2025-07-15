"use client"

import React from 'react'
import { ExternalLink, Github } from 'lucide-react'
import { projects } from '@/data/portfolio'
import { Button } from '@/components/ui/button'

// Get unique categories from projects
const categories = ['All', ...new Set(projects.map(project => project.category))]

export function Projects() {
  const [selectedCategory, setSelectedCategory] = React.useState('All')

  // Filter projects based on selected category
  const filteredProjects = projects.filter(project => 
    selectedCategory === 'All' || project.category === selectedCategory
  )

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="space-y-2 mb-12">
            <h2 className="text-3xl font-bold">Projects</h2>
            <div className="h-1 w-20 bg-primary rounded" />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="text-sm"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-card rounded-lg overflow-hidden border transition-all hover:border-primary flex flex-col h-full"
              >
                {/* Project Image */}
                <div className="aspect-video relative overflow-hidden bg-muted">
                  {project.image && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transition-transform group-hover:scale-105"
                    />
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-grow space-y-4">
                  <div className="flex-grow space-y-4">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>

                  {/* Technologies and Links - Bottom Section */}
                  <div className="space-y-4 mt-auto pt-4">
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-accent text-accent-foreground rounded-md text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project Links */}
                    <div className="flex gap-3">
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="gap-2"
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4" />
                          Code
                        </a>
                      </Button>
                      {project.liveUrl && (
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="gap-2"
                        >
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 