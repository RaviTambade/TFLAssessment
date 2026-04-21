import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import { Button } from "../../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { Checkbox } from "../../ui/checkbox";
import { Separator } from "../../ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../ui/select";
import { Eye, EyeOff, Lock, User } from "lucide-react"
import getAllRoles, { Role } from "@/services/RolesManagement/GetRoles";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [roles, setRoles] = useState<Role[]>([]);
   const [loading, setLoading] = useState<boolean>(true);
  const [role, setRole] = useState("")
    const [error, setError] = useState<string>("");

  const navigate = useNavigate()

    useEffect(() => {
    const fetchRoles = async () => {
      try {
        setLoading(true);

        const data = await getAllRoles();
        console.log("API DATA:", data); // ✅ Debug

        setRoles(data);
        setError("");
      } catch (err) {
        console.error(err);
        setError("Failed to fetch roles");
      } finally {
        setLoading(false);
      }
    };

    fetchRoles();
  }, []);


    const handleLogin = async () => {
  try {
    const res = await fetch("http://localhost:4000/api/authentication/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        role,
      }),
    });

    if (!res.ok) {
      throw new Error("Login failed");
    }

    const data = await res.json();
    console.log(data);

    localStorage.setItem("user", JSON.stringify(data));
    // redirect after login
    // navigate("/models/evaluationcontent/components");

  } catch (error) {
    console.error(error);
  }
};


    const handleUserLogLogin = async (userid:number) => {
  try {
    const res = await fetch(`http://localhost:4000/api/userlog/login/${userid}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error("user log failed");
    }

    const data = await res.json();
    console.log(data);

  } catch (error) {
    console.error(error);
  }
};
  const handleSubmit =async (e: React.FormEvent) => {
      e.preventDefault()

      if (!username.trim()) {
        alert("Username is required")
        return
      }

      if (!password.trim()) {
        alert("Password is required")
        return
      }

      if (!role) {
        alert("Please select a role")
        return
      }

      console.log("Login →", { username, role, rememberMe })

     try {
await handleLogin();   // wait for login complete

    const user = JSON.parse(localStorage.getItem("user") || "{}");

    if (user?.userid) {
      await handleUserLogLogin(user.userid);
      window.location.href="/"
    }


  } catch (error) {
    console.error("Submit Error:", error);
  }
    
    }

  return (
    <div className="min-h-screen bg-[var(--gradient-hero)] flex items-center justify-center px-4 select-none">
      <div className="w-full max-w-md">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight pb-2 bg-gradient-accent bg-clip-text text-transparent">
            Login
          </h1>

          <p className="text-muted-foreground text-base sm:text-lg mt-2">
            Sign in to continue your learning journey
          </p>
        </div>

        {/* Card */}
        <Card className="bg-card/50 backdrop-blur-sm border border-border shadow-[var(--shadow-elegant)]">
          
          <CardHeader>
            <CardTitle className="text-center text-xl">
              Welcome Back
            </CardTitle>
          </CardHeader>

          <CardContent className="p-6 sm:p-8">

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Username */}
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>

                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />

                  <Input
                    id="username"
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    autoComplete="username"
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              {/* Role Selection */}
              <div className="space-y-2">
                <Label htmlFor="role">Select Role</Label>

                <Select value={role} onValueChange={setRole} required>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>

                  <SelectContent>
                    {
                      roles.map((r) => (
                        <SelectItem key={r.role_id} value={r.role_name}>
                          {r.role_name}
                        </SelectItem>
                      ))
                    }

                  </SelectContent>
                </Select>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>

                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />

                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                    className="pl-10 pr-10"
                    required
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((p) => !p)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>
              

              {/* Remember + Forgot */}
              <div className="flex items-center justify-between">

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    checked={rememberMe}
                    onCheckedChange={(checked) =>
                      setRememberMe(Boolean(checked))
                    }
                  />
                  <Label htmlFor="remember" className="text-sm text-muted-foreground">
                    Remember me
                  </Label>
                </div>

                <button
                  type="button"
                  className="text-sm font-semibold text-primary hover:text-accent transition-smooth"
                >
                  Forgot Password?
                </button>
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                Login
              </Button>

            </form>

            {/* Divider */}
            <div className="my-6">
              <Separator />
            </div>

            {/* Google Button */}
            <div className="flex justify-center mb-6">
              <button
                type="button"
                className="
                flex items-center gap-3 px-5 py-3 rounded-full
                bg-primary/10 text-primary
                hover:bg-primary/20 transition-smooth
                "
              >
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path
                    fill="#EA4335"
                    d="M12 10.2v3.9h5.5c-.2 1.3-1.5 3.8-5.5 3.8-3.3 0-6-2.7-6-6s2.7-6 6-6c1.9 0 3.2.8 4 1.5l2.7-2.6C17.1 2.9 14.8 2 12 2 6.9 2 2.8 6.1 2.8 11.2S6.9 20.4 12 20.4c6.9 0 9.6-4.8 9.6-7.3 0-.5 0-.9-.1-1.3H12z"
                  />
                </svg>

                <span className="text-sm font-semibold">
                  Sign in with Google
                </span>
              </button>
            </div>

            {/* Register */}
            <p className="text-center text-sm text-muted-foreground">
              Not a member?{" "}
              <button
                type="button"
                onClick={() => navigate("/models/membership/Register")}
                className="font-bold text-primary hover:text-accent transition-smooth"
              >
                Register Now
              </button>
            </p>

          </CardContent>
        </Card>

      </div>
    </div>
  )
}

export default LoginPage