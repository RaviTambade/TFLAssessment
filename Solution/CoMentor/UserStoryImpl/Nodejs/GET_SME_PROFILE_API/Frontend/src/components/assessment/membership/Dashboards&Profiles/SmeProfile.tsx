import { useState, useEffect } from "react"
import axios from "axios"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "../../../ui/badge";

import { Linkedin, Github, Mail, Phone, Loader2 } from "lucide-react"

const SMEProfile = () => {

  const [profile, setProfile] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {

    const fetchProfile = async () => {
      try {
        setLoading(true)
        // Fetching for user_id 1 as a placeholder
        const response = await axios.get("http://localhost:3000/api/smeprofile/5")
        setProfile(response.data)
        setError(null)
      } catch (err) {
        console.error("Error fetching SME profile:", err)
        setError("Failed to load profile data.")
      } finally {
        setLoading(false)
      }
    }

    fetchProfile()

  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <span className="ml-2 text-lg">Loading Profile...</span>
      </div>
    )
  }

  if (error || !profile) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-4">
        <h2 className="text-xl font-semibold text-destructive">{error || "No Data Found"}</h2>
        <Button onClick={() => window.location.reload()}>Retry</Button>
      </div>
    )
  }

  const initials = `${profile.first_name?.[0] || ""}${profile.last_name?.[0] || ""}`.toUpperCase()

  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col">

      {/* NAVBAR */}
      <Navbar isLoggedIn />

      {/* PAGE CONTENT */}
      <div className="flex-1 flex justify-center p-6 pt-24">

        <Card className="w-full max-w-5xl shadow-[var(--shadow-elegant)] border-border">

          <CardContent className="p-8">

            {/* HEADER */}
            <div className="flex flex-col md:flex-row justify-between items-center border-b border-border pb-6 gap-6">

              {/* LEFT SECTION */}
              <div className="flex items-center gap-6">

                <Avatar className="h-24 w-24">
                  <AvatarFallback className="bg-primary/10 text-primary text-2xl font-bold">
                    {initials}
                  </AvatarFallback>
                </Avatar>

                <div>

                  <h2 className="text-3xl font-bold text-foreground">
                    {profile.first_name} {profile.last_name}
                  </h2>

                  <Badge className="mt-2 bg-primary text-white">
                    SME
                  </Badge>

                  <p className="mt-1 text-muted-foreground text-sm">
                    {profile.email}
                  </p>

                  {/* SOCIAL ICONS */}
                  <div className="flex gap-4 mt-3 text-primary">

                    <Linkedin size={20} className="cursor-pointer hover:scale-110 transition-transform" />
                    <Github size={20} className="cursor-pointer hover:scale-110 transition-transform" />
                    <Mail size={20} className="cursor-pointer hover:scale-110 transition-transform" />
                    <Phone size={20} className="cursor-pointer hover:scale-110 transition-transform" />

                  </div>

                </div>

              </div>

              {/* RIGHT SECTION */}
              <div className="text-center md:text-right">

                <p className="text-muted-foreground">
                  Years of Experience
                </p>

                <p className="text-primary text-lg font-semibold">
                  {profile.experience || "25"} years
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

                {profile.expertise && profile.expertise.length > 0 ? (
                  profile.expertise.map((runtime: string, index: number) => (
                    <span
                      key={index}
                      className="bg-primary/10 text-primary border border-primary/20 px-4 py-2 rounded-full text-sm font-semibold hover:bg-primary hover:text-white transition-colors"
                    >
                      {runtime}
                    </span>
                  ))
                ) : (
                  <p className="text-muted-foreground italic">No specific expertise listed</p>
                )}

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




import { useState, useEffect } from "react"
import axios from "axios"

// Layout Components
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

// UI Components
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "../../../ui/badge"

// Icons
import { Linkedin, Github, Mail, Phone, Loader2 } from "lucide-react"

const SMEProfile = () => {

  // -----------------------------
  // State Variables
  // -----------------------------

  const [profile, setProfile] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // -----------------------------
  // Fetch SME Profile from API
  // -----------------------------

  useEffect(() => {

    const fetchProfile = async () => {

      try {

        setLoading(true)

        // Fetch SME profile for user_id = 5
        const response = await axios.get("http://localhost:3000/api/smeprofile/5")

        // Store API response in state
        setProfile(response.data)

        // Clear any previous error
        setError(null)

      } catch (err) {

        console.error("Error fetching SME profile:", err)

        // Set error message
        setError("Failed to load profile data.")

      } finally {

        // Stop loading spinner
        setLoading(false)

      }

    }

    // Call API
    fetchProfile()

  }, [])

  // -----------------------------
  // Loading Screen
  // -----------------------------

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">

        <Loader2 className="h-8 w-8 animate-spin text-primary" />

        <span className="ml-2 text-lg">
          Loading Profile...
        </span>

      </div>
    )
  }

  // -----------------------------
  // Error or No Data Screen
  // -----------------------------

  if (error || !profile) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-4">

        <h2 className="text-xl font-semibold text-destructive">
          {error || "No Data Found"}
        </h2>

        <Button onClick={() => window.location.reload()}>
          Retry
        </Button>

      </div>
    )
  }

  // -----------------------------
  // Generate User Initials
  // Example: John Doe → JD
  // -----------------------------

  const initials =
    `${profile.first_name?.[0] || ""}${profile.last_name?.[0] || ""}`
      .toUpperCase()

  return (

    <div className="min-h-screen bg-gradient-hero flex flex-col">

      {/* -----------------------------
          NAVBAR
      ----------------------------- */}
      <Navbar isLoggedIn />

      {/* -----------------------------
          MAIN PAGE CONTENT
      ----------------------------- */}
      <div className="flex-1 flex justify-center p-6 pt-24">

        <Card className="w-full max-w-5xl shadow-[var(--shadow-elegant)] border-border">

          <CardContent className="p-8">

            {/* -----------------------------
                PROFILE HEADER SECTION
            ----------------------------- */}

            <div className="flex flex-col md:flex-row justify-between items-center border-b border-border pb-6 gap-6">

              {/* LEFT SIDE : Avatar + Basic Info */}

              <div className="flex items-center gap-6">

                {/* User Avatar */}
                <Avatar className="h-24 w-24">

                  <AvatarFallback className="bg-primary/10 text-primary text-2xl font-bold">
                    {initials}
                  </AvatarFallback>

                </Avatar>

                {/* User Info */}

                <div>

                  <h2 className="text-3xl font-bold text-foreground">
                    {profile.first_name} {profile.last_name}
                  </h2>

                  <Badge className="mt-2 bg-primary text-white">
                    SME
                  </Badge>

                  <p className="mt-1 text-muted-foreground text-sm">
                    {profile.email}
                  </p>

                  {/* Social Icons */}

                  <div className="flex gap-4 mt-3 text-primary">

                    <Linkedin
                      size={20}
                      className="cursor-pointer hover:scale-110 transition-transform"
                    />

                    <Github
                      size={20}
                      className="cursor-pointer hover:scale-110 transition-transform"
                    />

                    <Mail
                      size={20}
                      className="cursor-pointer hover:scale-110 transition-transform"
                    />

                    <Phone
                      size={20}
                      className="cursor-pointer hover:scale-110 transition-transform"
                    />

                  </div>

                </div>

              </div>

              {/* RIGHT SIDE : Experience + Edit Button */}

              <div className="text-center md:text-right">

                <p className="text-muted-foreground">
                  Years of Experience
                </p>

                <p className="text-primary text-lg font-semibold">
                  {profile.experience || "25"} years
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

            {/* SUBJECT EXPERTISE SECTION */}

            <div className="mt-8">

              <h3 className="text-lg font-semibold mb-4">
                Subject Expertise
              </h3>

              <div className="flex gap-4 flex-wrap">

                {profile.expertise && profile.expertise.length > 0 ? (

                  profile.expertise.map((runtime: string, index: number) => (

                    <span
                      key={index}
                      className="bg-primary/10 text-primary border border-primary/20 px-4 py-2 rounded-full text-sm font-semibold hover:bg-primary hover:text-white transition-colors"
                    >
                      {runtime}
                    </span>

                  ))

                ) : (

                  <p className="text-muted-foreground italic">
                    No specific expertise listed
                  </p>

                )}

              </div>

            </div>

          </CardContent>

        </Card>

      </div>

      {/* -----------------------------
          FOOTER
      ----------------------------- */}

      <Footer />

    </div>

  )
}

export default SMEProfile
