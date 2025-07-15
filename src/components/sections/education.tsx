"use client"

import React from 'react'
import { ExternalLink } from 'lucide-react'
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
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="space-y-2 mb-12">
            <h2 className="text-3xl font-bold">Education</h2>
            <div className="h-1 w-20 bg-primary rounded" />
          </div>

          {/* Education Tabs */}
          <Tabs defaultValue={sortedEducation[0].id} className="w-full">
            {/* Institution List */}
            <TabsList className="flex flex-col space-y-2 w-full md:w-auto md:flex-row md:space-y-0 md:space-x-2 bg-transparent">
              {sortedEducation.map((edu) => (
                <TabsTrigger
                  key={edu.id}
                  value={edu.id}
                  className="w-full md:w-auto data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {edu.institution}
                </TabsTrigger>
              ))}
            </TabsList>

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
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      {edu.degree}
                      <a
                        href={edu.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
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
                    <ul className="space-y-2 list-disc list-inside marker:text-primary">
                      {edu.achievements.map((achievement, index) => (
                        <li key={index} className="text-muted-foreground">
                          {achievement}
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