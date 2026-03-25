import { useState } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "../../../ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { updateUserProfile } from "@/services/userProfileService"

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
  const [isEditing, setIsEditing] = useState(false)
  const [loading, setLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  // Form state
  const [formData, setFormData] = useState({
    user_id: "1", // Get from auth/context
    email: "ravi.tambade@example.com",
    name: "Ravi Tambade",
    company: "Transflower Pvt Ltd",
    yearsOfExperience: 25,
    bio: "Ravi Tambade is a passionate educator and mentor dedicated to helping students and professionals grow in technology. With more than 25 years of experience in software engineering, teaching and entrepreneurship, he has mentored hundreds of learners and built multiple learning initiatives.",
    linkedinUrl: "",
    githubUrl: "",
    phone: "",
    role: "MENTOR"
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'yearsOfExperience' ? parseInt(value) : value
    }))
  }

  const handleSaveProfile = async () => {
    // ✅ Validate required fields
    if (!formData.name || formData.name.trim() === '') {
      setErrorMessage('Name is required')
      return
    }

    if (!formData.email || formData.email.trim() === '') {
      setErrorMessage('Email is required')
      return
    }

    if (!formData.user_id) {
      setErrorMessage('User ID is missing')
      return
    }

    setLoading(true)
    setErrorMessage("")
    setSuccessMessage("")

    try {
      const response = await updateUserProfile(formData)
      setSuccessMessage("Profile updated successfully!")
      setIsEditing(false)
      
      // Clear success message after 3 seconds
      setTimeout(() => setSuccessMessage(""), 3000)
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : 'Failed to update profile'
      setErrorMessage(errorMsg)
      console.error('Profile update error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col">
      <Navbar isLoggedIn />

      <div className="flex-1 pt-24 p-6">
        <Card className="shadow-[var(--shadow-elegant)]">
          <CardContent className="p-8 space-y-8">

            {/* SUCCESS MESSAGE */}
            {successMessage && (
              <div className="p-4 bg-green-100 text-green-700 rounded-lg">
                {successMessage}
              </div>
            )}

            {/* ERROR MESSAGE */}
            {errorMessage && (
              <div className="p-4 bg-red-100 text-red-700 rounded-lg">
                {errorMessage}
              </div>
            )}

            {!isEditing ? (
              <>
                {/* PROFILE HEADER - VIEW MODE */}
                <div className="flex justify-between items-center">
                  <div className="flex gap-6 items-center">
                    <Avatar className="h-24 w-24">
                      <AvatarFallback>RT</AvatarFallback>
                    </Avatar>

                    <div>
                      <h2 className="text-2xl font-bold text-primary">
                        {formData.name}
                      </h2>
                      <p className="text-muted-foreground">
                        Founder : {formData.company}
                      </p>
                      <Badge className="mt-2 bg-primary text-white">
                        {formData.role}
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
                      {formData.yearsOfExperience} years
                    </p>
                    <Button 
                      className="mt-3 bg-primary text-white"
                      onClick={() => setIsEditing(true)}
                    >
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
                    {formData.bio}
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
              </>
            ) : (
              <>
                {/* EDIT FORM */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-primary">Edit Profile</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Your email"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Company</label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Company name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Phone number"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Years of Experience</label>
                      <Input
                        name="yearsOfExperience"
                        type="number"
                        value={formData.yearsOfExperience}
                        onChange={handleInputChange}
                        placeholder="Years of experience"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">LinkedIn URL</label>
                      <Input
                        name="linkedinUrl"
                        value={formData.linkedinUrl}
                        onChange={handleInputChange}
                        placeholder="LinkedIn profile URL"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">GitHub URL</label>
                      <Input
                        name="githubUrl"
                        value={formData.githubUrl}
                        onChange={handleInputChange}
                        placeholder="GitHub profile URL"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Bio</label>
                    <Textarea
                      name="bio"
                      value={formData.bio}
                      onChange={handleInputChange}
                      placeholder="Tell us about yourself"
                      rows={6}
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 justify-end">
                    <Button
                      variant="outline"
                      onClick={() => setIsEditing(false)}
                      disabled={loading}
                    >
                      Cancel
                    </Button>
                    <Button
                      className="bg-primary text-white"
                      onClick={handleSaveProfile}
                      disabled={loading}
                    >
                      {loading ? "Saving..." : "Save Profile"}
                    </Button>
                  </div>
                </div>
              </>
            )}

          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  )
}

export default MentorProfile