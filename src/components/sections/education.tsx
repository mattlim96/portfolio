"use client"

import React from 'react'
import { ExternalLink } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import { education } from '@/data/portfolio'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'

export function Education() {
  // Sort education by most recent first
  const sortedEducation = [...education].sort((a, b) => {
    const yearA = parseInt(a.period.split(' - ')[1] || a.period.split(' - ')[0])
    const yearB = parseInt(b.period.split(' - ')[1] || b.period.split(' - ')[0])
    return yearB - yearA
  })

  return (
    <section id="education" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="space-y-2 mb-12">
            <h2 className="text-3xl font-bold">Education</h2>
            <div className="h-1 w-20 bg-primary rounded" />
          </div>

          {/* Education Tabs */}
          <Tabs defaultValue={sortedEducation[0].id} className="w-full">
            {/* Institution List */}
            <div className="overflow-x-auto pb-2">
              <TabsList className="flex h-auto space-x-2 bg-transparent">
                {sortedEducation.map((edu) => (
                  <TabsTrigger
                    key={edu.id}
                    value={edu.id}
                    className="min-w-[140px] max-w-[200px] truncate data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                    title={edu.institution}
                  >
                    {edu.institution}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Education Details */}
            {sortedEducation.map((edu) => (
              <TabsContent
                key={edu.id}
                value={edu.id}
                className="mt-6 focus-visible:outline-none focus-visible:ring-0"
              >
                <div className="space-y-6">
                  {/* Degree and Period */}
                  <div>
                    <h3 className="text-xl font-semibold flex items-start gap-2">
                      <span className="break-words">{edu.degree}</span>
                      <a
                        href={edu.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors shrink-0 mt-1"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span className="sr-only">Visit {edu.institution} website</span>
                      </a>
                    </h3>
                    <div className="text-sm text-muted-foreground">
                      <p>{edu.period}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground">{edu.description}</p>

                  {/* Achievements/Highlights */}
                  {edu.achievements && edu.achievements.length > 0 && (
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, index) => (
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
                  )}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
} 