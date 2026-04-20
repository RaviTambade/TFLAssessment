import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

import { Linkedin, Github, Mail, Phone } from "lucide-react"

const StudentProfile = () => {

  const skills = [
    { name: "Python", color: "bg-blue-500" },
    { name: "Node JS", color: "bg-green-500" },
    { name: "JavaScript", color: "bg-yellow-500 text-black" },
    { name: "React", color: "bg-sky-500" }
  ]

  return (

    <div className="min-h-screen bg-gradient-hero flex flex-col">

      <Navbar isLoggedIn />

      <div className="flex-1 pt-24 p-6">

        <Card className="shadow-[var(--shadow-elegant)]">

          <CardContent className="p-8 space-y-8">

            {/* PROFILE HEADER */}

            <div className="flex justify-between items-center">

              <div className="flex gap-6 items-center">

                <Avatar className="h-24 w-24">
                  <AvatarFallback>CP</AvatarFallback>
                </Avatar>

                <div>

                  <h2 className="text-2xl font-bold text-black">
                    Chaitrali Patil
                  </h2>

                  <p className="text-muted-foreground">
                    MIT ADT University
                  </p>

                  <Badge className="mt-2 bg-primary text-white">
                    STUDENT
                  </Badge>

                  {/* SOCIAL LINKS */}

                  <div className="flex gap-4 mt-3 text-primary">

                    <Linkedin size={20}/>
                    <Github size={20}/>
                    <Mail size={20}/>
                    <Phone size={20}/>

                  </div>

                </div>

              </div>

              {/* RIGHT SIDE */}

              <div className="text-right">

                <p className="text-muted-foreground">
                  Level :
                </p>

                <p className="text-lg font-semibold text-primary">
                  Intermediate
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

            <hr className="border-border" />

            {/* ABOUT */}

            <div>

              <h3 className="text-xl font-semibold mb-2 text-primary">
                About
              </h3>

              <p className="text-muted-foreground">
                Passionate learner currently pursuing Computer Engineering
                at MIT ADT University. Interested in AI, Machine Learning,
                and building full stack web applications. Always exploring
                new technologies and solving real world problems.
              </p>

            </div>

            <hr className="border-border" />

            {/* SKILLS */}

            <div>

              <h3 className="text-xl font-semibold mb-4 text-primary">
                Skills
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

      <Footer />

    </div>
  )
}

export default StudentProfile