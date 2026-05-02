import { useState, FormEvent } from "react"
import { Card, CardContent } from "../../ui/card";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { Eye, EyeOff } from "lucide-react"


import {  WEBAPI_DOTNET_URL, WEBAPI_NODE_URL ,WEBAPI_JAVA_URL} from "@/lib/utils";

const ChangePassword = () => {
  
  const [userId, setUserId] = useState("")
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showCurrent, setShowCurrent] = useState(false)
  const [showNew, setShowNew] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError(null)
    setMessage(null)

    // FULL VALIDATION
    if (
      !userId.trim() ||
      !currentPassword.trim() ||
      !newPassword.trim() ||
      !confirmPassword.trim()
    ) {
      setError("All fields are required.")
      return
    }

    if (newPassword !== confirmPassword) {
      setError("New password and confirm password do not match.")
      return
    }

    setLoading(true)

    try {
      console.log({
        userId,
        currentPassword,
        newPassword,
      })
       const response = await fetch(`${WEBAPI_NODE_URL}/api/auth/changepassword`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: userId,
          oldPassword: currentPassword,
          newPassword: newPassword,
        }),
      });

      let data: any = null
      const contentType = response.headers.get("content-type") || ""

      if (contentType.includes("application/json")) {
        data = await response.json().catch(() => null)
      }

      if (!response.ok) {
        const text = !contentType.includes("application/json")
          ? await response.text().catch(() => null)
          : null

        const errorMessage =
          data?.message ||
          data?.error ||
          text ||
          `${response.status} ${response.statusText}`

        throw new Error(errorMessage)
      }

      // ✅ SUCCESS
      setMessage("Password changed successfully.")
      setUserId("")
      setCurrentPassword("")
      setNewPassword("")
      setConfirmPassword("")

    } catch (error: any) {
      setError(error?.message || "Something went wrong.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col">
      <div className="flex-1 flex justify-center items-center pt-24 p-6">
        <Card className="w-full max-w-md shadow-lg">
          <CardContent className="p-8 space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">

              <h1 className="text-3xl font-bold text-center">
                Change Password
              </h1>

              {/* User ID */}
              <div>
                <label className="text-sm font-semibold">User ID *</label>
                <Input
                  type="text"
                  placeholder="Enter user ID"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                />
              </div>

              {/* Current Password */}
              <div>
                <label className="text-sm font-semibold">Current Password *</label>
                <div className="relative">
                  <Input
                    type={showCurrent ? "text" : "password"}
                    placeholder="Enter current password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => setShowCurrent(!showCurrent)}
                    className="absolute right-3 top-2.5"
                  >
                    {showCurrent ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* New Password */}
              <div>
                <label className="text-sm font-semibold">New Password *</label>
                <div className="relative">
                  <Input
                    type={showNew ? "text" : "password"}
                    placeholder="Enter new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => setShowNew(!showNew)}
                    className="absolute right-3 top-2.5"
                  >
                    {showNew ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="text-sm font-semibold">Confirm Password *</label>
                <div className="relative">
                  <Input
                    type={showConfirm ? "text" : "password"}
                    placeholder="Confirm new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="absolute right-3 top-2.5"
                  >
                    {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Error */}
              {error && (
                <div className="bg-red-100 text-red-700 p-2 rounded">
                  {error}
                </div>
              )}

              {/* Success */}
              {message && (
                <div className="bg-green-100 text-green-700 p-2 rounded">
                  {message}
                </div>
              )}

              {/* Submit */}
              <Button
                type="submit"
                className="w-full"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </Button>

            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default ChangePassword