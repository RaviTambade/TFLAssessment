import { useState } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const AddJobDescription = () => {

  const [jobTitle, setJobTitle] = useState("")
  const [techStack, setTechStack] = useState("")
  const [description, setDescription] = useState("")

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()

    const job = {
      jobTitle,
      techStack,
      description
    }

    console.log("Saved Job:", job)
  }

  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col">

      {/* NAVBAR */}
      <Navbar isLoggedIn />

      <div className="flex-1 flex justify-center p-6 pt-24">

        <Card className="w-full max-w-5xl shadow-[var(--shadow-elegant)] border-border">

          <CardContent className="p-8">

            {/* TITLE */}
            <h1 className="text-3xl font-bold text-primary mb-10">
              Add Job Description
            </h1>

            <form
              onSubmit={handleSave}
              className="space-y-6"
            >

              {/* JOB TITLE */}
              <div>

                <label className="block text-sm font-semibold text-foreground mb-2 uppercase tracking-wide">
                  Job Title
                </label>

                <input
                  type="text"
                  placeholder="Enter job title"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  className="
                    w-full
                    h-11
                    px-4
                    rounded-lg
                    border
                    border-border
                    bg-background/60
                    text-foreground
                    placeholder:text-muted-foreground
                    text-sm
                    focus:outline-none
                    focus:ring-2
                    focus:ring-primary/40
                    focus:border-primary
                    transition-all
                    duration-200
                  "
                />

              </div>

              {/* TECH STACK */}
              <div>

                <label className="block text-sm font-semibold text-foreground mb-2 uppercase tracking-wide">
                  Tech Stack
                </label>

                <input
                  type="text"
                  placeholder="Example: Java, React, Node"
                  value={techStack}
                  onChange={(e) => setTechStack(e.target.value)}
                  className="
                    w-full
                    h-11
                    px-4
                    rounded-lg
                    border
                    border-border
                    bg-background/60
                    text-foreground
                    placeholder:text-muted-foreground
                    text-sm
                    focus:outline-none
                    focus:ring-2
                    focus:ring-primary/40
                    focus:border-primary
                    transition-all
                    duration-200
                  "
                />

              </div>

              {/* JOB DESCRIPTION */}
              <div>

                <label className="block text-sm font-semibold text-foreground mb-2 uppercase tracking-wide">
                  Job Description
                </label>

                <textarea
                  rows={6}
                  placeholder="Write job description..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="
                    w-full
                    px-4
                    py-3
                    rounded-lg
                    border
                    border-border
                    bg-background/60
                    text-foreground
                    placeholder:text-muted-foreground
                    text-sm
                    focus:outline-none
                    focus:ring-2
                    focus:ring-primary/40
                    focus:border-primary
                    transition-all
                    duration-200
                  "
                />

              </div>

              {/* SAVE BUTTON */}
              <div className="pt-4">

                <Button
                  variant="hero"
                  size="lg"
                  type="submit"
                >
                  Save
                </Button>

              </div>

            </form>

          </CardContent>

        </Card>

      </div>

      {/* FOOTER */}
      <Footer />

    </div>
  )
}

export default AddJobDescription