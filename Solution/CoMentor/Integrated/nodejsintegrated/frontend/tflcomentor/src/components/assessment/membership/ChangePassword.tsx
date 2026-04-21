import { useState } from "react"
import { Card, CardContent } from "../../ui/card";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";

import { Eye, EyeOff } from "lucide-react"
import { useNavigate } from "react-router"

const ChangePassword = () => {
    const navigate = useNavigate()
  const [showCurrent, setShowCurrent] = useState(false)
  const [showNew, setShowNew] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col">
      <div className="flex-1 flex justify-center items-center pt-24 p-6">
        <Card className="w-full max-w-md shadow-[var(--shadow-elegant)]">
          <CardContent className="p-8 space-y-6">

            {/* Title */}
            <h1 className="text-3xl font-bold text-primary text-center">
              Change Password
            </h1>

            {/* Current Password */}
            <div className="space-y-2">
              <label className="text-sm font-semibold">
                Current Password *
              </label>
              <div className="relative">
                <Input
                  type={showCurrent ? "text" : "password"}
                  placeholder="Enter current password"/>
                <button
                  type="button"
                  onClick={() => setShowCurrent(!showCurrent)}
                  className="absolute right-3 top-2.5 text-muted-foreground">
                  {showCurrent ? <EyeOff size={18}/> : <Eye size={18}/>}
                </button>
              </div>
            </div>

            {/* New Password */}

            <div className="space-y-2">

              <label className="text-sm font-semibold">
                New Password *
              </label>

              <div className="relative">

                <Input
                  type={showNew ? "text" : "password"}
                  placeholder="Enter new password"
                />

                <button
                  type="button"
                  onClick={() => setShowNew(!showNew)}
                  className="absolute right-3 top-2.5 text-muted-foreground"
                >

                  {showNew ? <EyeOff size={18}/> : <Eye size={18}/>}

                </button>

              </div>

            </div>

            {/* Confirm Password */}

            <div className="space-y-2">

              <label className="text-sm font-semibold">
                Confirm New Password *
              </label>

              <div className="relative">

                <Input
                  type={showConfirm ? "text" : "password"}
                  placeholder="Confirm new password"
                />

                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-3 top-2.5 text-muted-foreground"
                >

                  {showConfirm ? <EyeOff size={18}/> : <Eye size={18}/>}

                </button>

              </div>

            </div>

            {/* Submit Button */}
            <Button className="w-full bg-primary text-white hover:bg-accent" size="lg">
              Submit
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default ChangePassword