import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "../../../ui/badge";


import { Linkedin, Github, Mail, Phone } from "lucide-react"

const SMEProfile = () => {

  const skills = [
        { name: "Python", color: "bg-blue-500" },
        { name: "JavaScript", color: "bg-yellow-500 text-black" }
  ]

  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col">

      {/* NAVBAR */}
      <Navbar isLoggedIn />

      {/* PAGE CONTENT */}
      <div className="flex-1 flex justify-center p-6 pt-24">

        <Card className="w-full max-w-5xl shadow-[var(--shadow-elegant)] border-border">

          <CardContent className="p-8">

            {/* HEADER */}
            <div className="flex justify-between items-center border-b border-border pb-6">

              {/* LEFT SECTION */}
              <div className="flex items-center gap-6">

                <Avatar className="h-24 w-24">
                  <AvatarFallback>AR</AvatarFallback>
                </Avatar>

                <div>

                  <h2 className="text-3xl font-bold text-foreground">
                    Abhay Rathod
                  </h2>

                  <Badge className="mt-2 bg-primary text-white">
                    SME
                  </Badge>

                  {/* SOCIAL ICONS */}
                  <div className="flex gap-4 mt-3 text-primary">

                    <Linkedin size={20}/>
                    <Github size={20}/>
                    <Mail size={20}/>
                    <Phone size={20}/>

                  </div>

                </div>

              </div>

              {/* RIGHT SECTION */}
              <div className="text-right">

                <p className="text-muted-foreground">
                  Years of Experience
                </p>

                <p className="text-primary text-lg font-semibold">
                  25 years
                </p>

                <Button
                  variant="hero"
                  size="lg"
                  className="mt-4"
                >
                  Edit Profile
                </Button>

              </div>

            </div>

            {/* SUBJECT EXPERTISE */}
            <div className="mt-8">

              <h3 className="text-lg font-semibold mb-4">
                Subject Expertise
              </h3>

              <div className="flex gap-4 flex-wrap">

                {skills.map((skill, index) => (

                  <span
                    key={index}
                    className={`${skill.color} text-white px-4 py-2 rounded-full text-sm font-semibold`}
                  >
                    {skill.name}
                  </span>

                ))}

              </div>

            </div>

          </CardContent>

        </Card>

      </div>

      {/* FOOTER */}
      <Footer />

    </div>
  )
}

export default SMEProfile