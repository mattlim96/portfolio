"use client"

import React from 'react'
import { ExternalLink } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import { experiences } from '@/data/portfolio'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'

export function Experience() {
  // Sort experiences by current status and date (current jobs first)
  const sortedExperiences = [...experiences].sort((a, b) => {
    if (a.current && !b.current) return -1
    if (!a.current && b.current) return 1
    return 0
  })

  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="space-y-2 mb-12">
            <h2 className="text-3xl font-bold">Experience</h2>
            <div className="h-1 w-20 bg-primary rounded" />
          </div>

          {/* Experience Tabs */}
          <Tabs defaultValue={sortedExperiences[0].id} className="w-full">
            {/* Company List */}
            <div className="overflow-x-auto pb-2">
              <TabsList className="flex h-auto space-x-2 bg-transparent">
                {sortedExperiences.map((exp) => (
                  <TabsTrigger
                    key={exp.id}
                    value={exp.id}
                    className="min-w-[120px] whitespace-nowrap data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    {exp.company}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Experience Details */}
            {sortedExperiences.map((exp) => (
              <TabsContent
                key={exp.id}
                value={exp.id}
                className="mt-6 focus-visible:outline-none focus-visible:ring-0"
              >
                <div className="space-y-6">
                  {/* Position and Duration */}
                  <div>
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      {exp.position}
                      <a
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span className="sr-only">Visit {exp.company} website</span>
                      </a>
                    </h3>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>{exp.period}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>

                  {/* Company Description */}
                  <p className="text-muted-foreground">{exp.description}</p>

                  {/* Achievements */}
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, index) => (
                      <li key={index} className="text-muted-foreground flex">
                        <span className="text-primary mr-2">•</span>
                        <ReactMarkdown
                          components={{
                            a: ({ node, ...props }) => (
                              <a {...props} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline" />
                            )
                          }}
                        >
                          {achievement}
                        </ReactMarkdown>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
} 