import { useState, type FormEvent } from "react"
import { useNavigate } from "react-router-dom"

import { Button } from "../../ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card"
import { Input } from "../../ui/input"
import { Label } from "../../ui/label"
import { Separator } from "../../ui/separator"

const RegisterPage = () => {
  const navigate = useNavigate()

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [contact, setContact] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [apiError, setApiError] = useState<string | null>(null)
  const [apiSuccess, setApiSuccess] = useState<string | null>(null)

  const handleRegister = async (generatedPassword: string) => {
    const payload = {
      contact,
      firstName,
      lastName,
      email,
      password: generatedPassword,
    }

    const res = await fetch("http://localhost:4000/api/authentication/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })

    const data = await res.json()

    if (!res.ok) {
      throw new Error(data?.message || data?.error || "Registration failed")
    }

    return data
  }

  const handlePassword = async () => {
    const res = await fetch("http://localhost:5121/api/auth/send-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })

    const data = await res.json()

    if (!res.ok) {
      throw new Error(data?.message || data?.error || "Failed to generate password")
    }

    return typeof data === "string" ? data : data?.password
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setApiError(null)
    setApiSuccess(null)

    try {
      setIsSubmitting(true)

      const generatedPassword = await handlePassword()
      if (!generatedPassword) {
        throw new Error("Failed to generate password")
      }

      await handleRegister(generatedPassword)

      setApiSuccess("Registration successful")

      setTimeout(() => {
        navigate("/models/membership/Login")
      }, 1000)
    } catch (err) {
      setApiError(err instanceof Error ? err.message : "Registration failed")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-[var(--gradient-hero)] flex items-center justify-center px-4 select-none">
      <div className="w-full max-w-md">
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

        <Card className="bg-card/50 backdrop-blur-sm border border-border shadow-[var(--shadow-elegant)] select-none">
          <CardHeader>
            <CardTitle className="text-center text-xl">Register</CardTitle>
          </CardHeader>

          <CardContent className="p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              {apiError && (
                <div className="text-sm text-destructive">{apiError}</div>
              )}

              {apiSuccess && (
                <div className="text-sm text-success">{apiSuccess}</div>
              )}

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

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Registering..." : "Register"}
              </Button>
            </form>

            <div className="my-6">
              <Separator />
            </div>

            <p className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <button
                type="button"
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
