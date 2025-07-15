"use client"

import React from 'react'
import { personalInfo } from '@/data/portfolio'

// Helper function to group skills into categories
const skillCategories: Record<string, readonly string[]> = {
  "Coding Languages": ["Python", "R", "SQL", "JavaScript", "TypeScript", "React", "Next.js"],
  "Data Science": ["AI Agents", "LLMs", "NLP", "Object Detection", "Machine Learning", "Statistical Analysis"],
} as const

export function About() {
  const { bio, skills } = personalInfo

  // Function to check which category a skill belongs to
  const getSkillCategory = (skill: string) => {
    for (const [category, categorySkills] of Object.entries(skillCategories)) {
      if (categorySkills.includes(skill)) {
        return category
      }
    }
    return "Other"
  }

  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    const category = getSkillCategory(skill)
    return {
      ...acc,
      [category]: [...(acc[category] || []), skill],
    }
  }, {} as Record<string, string[]>)

  return (
    <section id="about" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="space-y-2 mb-12">
            <h2 className="text-3xl font-bold">About Me</h2>
            <div className="h-1 w-20 bg-primary rounded" />
          </div>

          {/* Bio */}
          <div className="prose dark:prose-invert mb-12">
            <p>{bio}</p>
            <p>
              I'm passionate about leveraging data and technology to solve complex business problems.
              My background in statistics and experience in data science allows me to bring a unique
              perspective to software development.
            </p>
          </div>

          {/* Skills Section */}
          <div className="space-y-8">
            <h3 className="text-xl font-semibold">Skills & Technologies</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> {/*  lg:grid-cols-3 */}
              {Object.entries(groupedSkills).map(([category, categorySkills]) => (
                <div key={category} className="space-y-4">
                  <h4 className="text-lg font-medium text-primary">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 