import { useNavigate } from "react-router-dom"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Card, CardContent } from "@/components/ui/card"

type CardProps = {
  title: string
  route?: string
}

const DashboardCard = ({ title, route }: CardProps) => {

  const navigate = useNavigate()

  return (

    <Card
      onClick={() => route && navigate(route)}
      className="cursor-pointer bg-gradient-primary text-white
      shadow-[var(--shadow-elegant)]
      hover:shadow-[var(--shadow-glow)]
      transition-all hover:scale-105 h-36
      flex items-center justify-center rounded-xl"
    >

      <CardContent className="text-center text-lg font-semibold">
        {title}
      </CardContent>

    </Card>

  )
}

const MentorDashboard = () => {

  return (

    <div className="min-h-screen bg-gradient-hero flex flex-col">

      <Navbar isLoggedIn />

      <div className="flex-1 pt-20 p-6 pb-20">

        {/* Title */}

        <h1 className="text-3xl font-bold text-primary mb-8 text-center select-none">
          Mentor Dashboard
        </h1>

        
        {/* Dashboard Grid */}

        <div className="grid
          grid-cols-1
          md:grid-cols-2
          gap-6
          max-w-4xl
          mx-auto">

          <DashboardCard
            title="Subject Management"
            route="/subject-management"
          />

          <DashboardCard
            title="Concept Management"
            route="/concept-management"
          />

          <DashboardCard
            title="Question Bank Management"
            route="/question-bank"
          />

          <DashboardCard
            title="Questions Classification"
            route="/question-classification"
          />

        </div>

      </div>

      <Footer />

    </div>
  )
}

export default MentorDashboard