import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "../../../ui/badge";


import { Linkedin, Github, Mail, Phone } from "lucide-react"

const EmployerProfile = () => {

  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col">

      <Navbar isLoggedIn />

      <div className="flex-1 pt-24 p-6 flex justify-center">

        <Card className="w-full max-w-5xl shadow-[var(--shadow-elegant)]">
          <CardContent className="p-8">

            {/* Header */}
            <div className="flex justify-between items-center border-b pb-6">

              {/* Left Side */}
              <div className="flex items-center gap-6">

                <Avatar className="h-24 w-24">
                  <AvatarFallback>AT</AvatarFallback>
                </Avatar>

                <div>

                  <h2 className="text-3xl font-bold">
                    Arnav Tolahunase
                  </h2>

                  <Badge className="mt-2 bg-primary text-white">
                    Employer
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

              {/* Right Side */}
              <div className="text-right">

                <p className="text-muted-foreground">
                  Years of Experience
                </p>

                <p className="text-primary text-lg font-semibold">
                  25 years
                </p>

                <Button className="mt-4 bg-primary text-white hover:bg-accent">
                  Edit Profile
                </Button>

              </div>

            </div>

            {/* Details Section */}
            <div className="mt-8 space-y-4 text-lg">

              <p>
                <span className="font-semibold">Company :</span>{" "}
                <span className="text-primary">Google</span>
              </p>

              <p>
                <span className="font-semibold">Job Title :</span>{" "}
                <span className="text-primary">HR Lead</span>
              </p>

            </div>

          </CardContent>
        </Card>

      </div>

      <Footer />

    </div>
  )
}

export default EmployerProfile