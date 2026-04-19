import Navbar from "../../../Navbar";
import Footer from "../../../Footer";
import { Avatar, AvatarImage, AvatarFallback } from "../../../ui/avatar";
import { Card, CardContent } from "../../../ui/card";
import { Badge } from "../../../ui/badge";
import { Button } from "../../../ui/button";


const Profile = () => {

  return (

    <div className="min-h-screen bg-gradient-hero flex flex-col">

      <Navbar isLoggedIn />

      <div className="flex-1 pt-24 p-6">

        <Card className="shadow-[var(--shadow-elegant)]">

          <CardContent className="p-8">

            {/* Header */}

            <div className="flex justify-between items-center mb-8">

              <div className="flex gap-6 items-center">

                <Avatar className="h-20 w-20">
                    <AvatarImage src="public/lovable-uploads/bc1b22a1-548e-47b8-a0d2-1f43d49543b8.png" alt="Ravi Tambade" />
                        <AvatarFallback>RT</AvatarFallback>
                </Avatar>

                <div>

                  <h2 className="text-2xl font-bold">
                    Ravi Tambade
                  </h2>

                  <p className="text-muted-foreground">
                    Founder of Transflower Learning Pvt. Ltd
                  </p>

                  <Badge className="mt-2 bg-primary text-white">
                    Admin
                  </Badge>

                </div>

              </div>

              <div className="text-right">


                <Button className="mt-4 bg-primary text-white">
                  Edit Profile
                </Button>

              </div>

            </div>

            {/* About */}

            <div className="mb-8">

              <h3 className="text-xl font-semibold mb-2">
                About
              </h3>

              <p className="text-muted-foreground">
                Passionate learner interested in AI, ML and Web Development.
                Currently building full stack applications and exploring
                intelligent systems.
              </p>

            </div>

          </CardContent>

        </Card>

      </div>

      <Footer />

    </div>
  )
}

export default Profile