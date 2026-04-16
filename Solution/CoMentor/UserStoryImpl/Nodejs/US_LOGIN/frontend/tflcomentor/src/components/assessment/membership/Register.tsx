import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { Button } from "../../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { Separator } from "../../ui/separator";

const RegisterPage = () => {

  const navigate = useNavigate()

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [contact, setContact] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()

    console.log({
      firstName,
      lastName,
      email,
      contact,
      password,
      confirmPassword
    })

        navigate("/login")
  }

  return (
    <div className="min-h-screen bg-[var(--gradient-hero)] flex items-center justify-center px-4 select-none">

      <div className="w-full max-w-md">

        {/* Heading */}
        <div className="text-center mb-8 select-none">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Create{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Account
            </span>
          </h1>

          <p className="text-muted-foreground text-base sm:text-lg">
            Register to start your learning journey
          </p>
        </div>

        {/* Card */}
        <Card className="bg-card/50 backdrop-blur-sm border border-border shadow-[var(--shadow-elegant)] select-none">

          <CardHeader>
            <CardTitle className="text-center text-xl">
              Register
            </CardTitle>
          </CardHeader>

          <CardContent className="p-6 sm:p-8">

            <form onSubmit={handleRegister} className="space-y-4">

              {/* First Name */}
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>

                <Input
                  id="firstName"
                  type="text"
                  placeholder="Enter your first name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>

              {/* Last Name */}
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>

                <Input
                  id="lastName"
                  type="text"
                  placeholder="Enter your last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>

                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Contact */}
              <div className="space-y-2">
                <Label htmlFor="contact">Contact</Label>

                <Input
                  id="contact"
                  type="tel"
                  placeholder="Enter your contact number"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  required
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>

                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {/* Confirm Password */}
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>

                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>

              {/* Register Button */}
              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
              >
                Register
              </Button>

            </form>

            {/* Divider */}
            <div className="my-6">
              <Separator />
            </div>

            {/* Already have account */}
            <p className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <button
                onClick={() => navigate("/models/membership/Login")}
                className="font-bold text-primary hover:text-accent transition-smooth"
              >
                Sign in
              </button>
            </p>

          </CardContent>
        </Card>

      </div>
    </div>
  )
}

export default RegisterPage