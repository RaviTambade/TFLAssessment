import { useState } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "../../../ui/badge";


import { Linkedin, Github, Mail, Phone } from "lucide-react"

type Mentee = {
  name: string
  since: string
}

const mentees: Mentee[] = [
  { name: "Samruddhi Rasal", since: "Apr 2024" },
  { name: "Arnav Tolahunase", since: "Nov 2023" },
  { name: "Sai Jagdale", since: "Dec 2023" }
]

const MentorProfile = () => {

  const [showMentees, setShowMentees] = useState(false)

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
                  <AvatarFallback>RT</AvatarFallback>
                </Avatar>

                <div>

                  <h2 className="text-2xl font-bold text-primary">
                    Ravi Tambade
                  </h2>

                  <p className="text-muted-foreground">
                    Founder : Transflower Pvt Ltd
                  </p>

                  <Badge className="mt-2 bg-primary text-white">
                    Mentor
                  </Badge>

                  {/* Social Icons */}

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
                  Years Of Experience :
                </p>

                <p className="text-primary font-semibold">
                  25 years
                </p>

                <Button className="mt-3 bg-primary text-white">
                  Edit Profile
                </Button>

              </div>

            </div>

            <hr />

            {/* ABOUT */}

            <div>

              <h3 className="text-xl font-semibold mb-2 text-primary">
                About
              </h3>

              <p className="text-muted-foreground">
                Ravi Tambade is a passionate educator and mentor dedicated
                to helping students and professionals grow in technology.
                With more than 25 years of experience in software engineering,
                teaching and entrepreneurship, he has mentored hundreds
                of learners and built multiple learning initiatives.
              </p>

            </div>

            {/* VIEW MENTEES BUTTON */}

            <Button
              variant="hero"
              onClick={() => setShowMentees(!showMentees)}
            >
              View Mentees
            </Button>

            {/* MENTEES LIST */}

            {showMentees && (

              <div className="space-y-3">

                {mentees.map((mentee, index) => (

                  <div
                    key={index}
                    className="flex justify-between items-center
                    bg-muted p-4 rounded-lg"
                  >

                    <div className="flex items-center gap-3">

                      <Avatar>
                        <AvatarFallback>
                          {mentee.name[0]}
                        </AvatarFallback>
                      </Avatar>

                      <span className="font-medium">
                        {mentee.name}
                      </span>

                    </div>

                    <span className="text-sm text-muted-foreground">
                      with you since {mentee.since}
                    </span>

                  </div>

                ))}

              </div>

            )}

          </CardContent>

        </Card>

      </div>

      <Footer />

    </div>

  )
}

export default MentorProfile