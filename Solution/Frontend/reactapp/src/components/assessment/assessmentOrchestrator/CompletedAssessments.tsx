import { useEffect, useState } from "react";
import { WEBAPI_DOTNET_URL } from "@/lib/utils";
import { Card,CardContent } from "@/components/ui/card";
import { Award, CalendarCheck, ChartNoAxesColumnIncreasing } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import AssessmentResult from "./entities/AssessmentResult";


const CompletedAssessments = () => {

    const [results, setResults] = useState<AssessmentResult[]>([]);
    const { ref, isVisible } = useScrollAnimation();

    useEffect(() => {
        const currentUser = sessionStorage.getItem("current");
        if (currentUser) {
            const user = JSON.parse(currentUser);
            fetch(
                `${WEBAPI_DOTNET_URL}/Assessment/completed-assessments/${user.userid}`
            )
                .then(res => res.json())
                .then(data => {
                    setResults(data);
                })
                .catch(err => console.log(err));
        }

    }, []);

    return (
        <section className="py-16 sm:py-20 bg-background">
            <div className="container mx-auto px-4">
                {/* Header */}

                <div className="text-center mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                        Completed 
                        <span className="bg-gradient-primary bg-clip-text text-transparent">
                            {" "}Assessments
                        </span>
                    </h1>
                </div>

                {/* Cards */}
                <div 
                ref={ref}
                className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000
                ${
                    isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-100 translate-y-10"
                }`}
                >
                {
                    results.length > 0 ?
                    results.map((item,index)=>(
                    <Card
                    key={index}
                    className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300 overflow-hidden"
                    >
                        <div className="bg-gradient-hero p-5">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Award className="text-primary h-6 w-6"/>
                                </div>
                                <h2 className="font-bold text-xl">
                                    {item.assessmentName}
                                </h2>
                            </div>
                            <CardContent className="p-0 space-y-4">
                                {/* Score */}

                                <div className="flex justify-between items-center">

                                    <span className="text-muted-foreground">
                                        Score
                                    </span>

                                    <span className="font-bold text-lg">
                                        {item.score}{item.totalScore}
                                    </span>

                                </div>
                                {/* Percentage */}
                                <div>
                                    <div className="flex justify-between mb-2">

                                        <span className="flex items-center gap-2 text-muted-foreground">

                                            <ChartNoAxesColumnIncreasing size={18}/>
                                            Percentage

                                        </span>
                                        <span className="font-bold text-primary">
                                            {item.percentage}%
                                        </span>
                                    </div>
                                    <div className="w-full bg-muted rounded-full h-3">
                                        <div
                                        className="bg-primary h-3 rounded-full transition-all"
                                        style={{
                                            width:`${item.percentage}%`
                                        }}
                                        >
                                        </div>
                                    </div>
                                </div>
                                {/* Date */}
                                <div className="flex items-center gap-2 text-muted-foreground pt-3">

                                    <CalendarCheck size={18}/>

                                    <span>
                                        {new Date(item.completedDate)
                                        .toLocaleDateString()}
                                    </span>

                                </div>



                            </CardContent>


                        </div>


                    </Card>


                    ))

                    :

                    <div className="col-span-full text-center text-muted-foreground">

                        No completed assessments found.

                    </div>


                }


                </div>

            </div>


        </section>

    )

}


export default CompletedAssessments;