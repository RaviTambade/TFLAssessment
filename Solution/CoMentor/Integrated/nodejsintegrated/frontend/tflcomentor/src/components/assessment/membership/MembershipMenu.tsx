import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const MembershipMenu = () => {
    const { ref, isVisible } = useScrollAnimation();
    const navigate = useNavigate();
    const [userId, setUserId] = useState<string>("");

    return (
        <section className="py-16 sm:py-20 bg-background">
            <div className="container mx-auto px-4">

                {/* Heading */}
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                        Manage User Logs
                      
                    </h2>

                </div>

                {/* Card */}
                <div className="max-w-6xl mx-auto">
                    <Card
                        ref={ref}
                        className={`border-0 shadow-elegant overflow-hidden transition-all duration-1000 ${isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                            }`}
                    >
                        <div className="bg-gradient-hero p-6 sm:p-8">
                            <CardContent>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                    <div className="flex flex-col gap-4">
                                        <Input
                                            type="number"
                                            placeholder="Enter User ID"
                                            value={userId}
                                            onChange={(e) => setUserId(e.target.value)}
                                            className="w-full"
                                        />
                                        <Button 
                                            onClick={() => userId && navigate(`/models/membership/UserLogDetail/${userId}`)} 
                                            variant="hero" 
                                            size="lg" 
                                            className="group"
                                            disabled={!userId}
                                        >
                                           Get User Logs Details
                                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </div>
{/* 
                                    <Button variant="hero" size="lg" className="group"
                                        onClick={() => navigate("/models/membership/AdminProfile")}>
                                        Add Role
                                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </Button>

                                    <Button onClick={() => navigate("/models/membership/StudentDashboard")} variant="hero" size="lg" className="group">
                                        Update Role
                                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </Button>

                                     <Button onClick={() => navigate("/models/membership/StudentDashboard")} variant="hero" size="lg" className="group">
                                        Delete Role
                                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </Button>

                                     <Button onClick={() => navigate("/models/membership/StudentDashboard")} variant="hero" size="lg" className="group">
                                       Get Specific Role
                                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </Button> */}


                                </div>

                            </CardContent>
                        </div>
                    </Card>
                </div>

            </div>
        </section>
    );
};

export default MembershipMenu;