import { useEffect ,useState} from "react";
import { Button } from "@/components/ui/button";
import {Card,CardContent,CardHeader,CardTitle,} from "@/components/ui/card";
import { WEBAPI_JAVA_URL } from "@/lib/utils";

const ShowInterviewDetailsStudent = () => {

    const [interviewDetail,setInterviewDetail]=useState();

    useEffect(()=>{
        fetch(`${WEBAPI_JAVA_URL}/interview`)
        .then((res)=>{
            if(!res.ok){
                throw new Error("Failed to fetch api");
            }
            return res.json();
        })
       .then((data)=>{
         setInterviewDetail(data);
       })
       .catch((err)=>{
        console.error(err);
       })
    },[]);
    
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br  p-6">
      <Card className="w-full max-w-2xl border border-orange-400 shadow-2xl rounded-2xl overflow-hidden">
        
        {/* Header */}
        <CardHeader className="bg-orange-700 text-white">
          <CardTitle className="text-3xl font-bold tracking-wide">
            Interview Details
          </CardTitle>
        </CardHeader>

        {/* Content */}
        <CardContent className="p-8 space-y-8 bg-orange-50">
          
          {/* Interview Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="p-5 rounded-xl border border-orange-300 shadow-sm hover:shadow-md transition">
              <p className="text-sm text-orange-900 font-medium">
                Interview On
              </p>
              <h3 className="text-lg font-bold text-gray-800 mt-1">
                Java Full Stack Developer
              </h3>
            </div>

            <div className=" p-5 rounded-xl border border-orange-300 shadow-sm hover:shadow-md transition">
              <p className="text-sm text-orange-900 font-medium">
                Scheduled Date
              </p>
              <h3 className="text-lg font-bold text-gray-800 mt-1">
                18 May 2026, 10:30 AM
              </h3>
            </div>

            <div className=" p-5 rounded-xl border border-orange-300 shadow-sm hover:shadow-md transition">
              <p className="text-sm text-orange-900 font-medium">
                Interview Mode
              </p>
              <h3 className="text-lg font-bold text-gray-800 mt-1">
                Online (Google Meet)
              </h3>
            </div>

            <div className="p-5 rounded-xl border border-orange-300 shadow-sm hover:shadow-md transition">
              <p className="text-sm text-orange-900 font-medium">
                Interviewer
              </p>
              <h3 className="text-lg font-bold text-gray-800 mt-1">
                John Smith
              </h3>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-end">

            <Button
              variant="outline"
              className="border-orange-700 text-orange-800 hover:bg-orange-200 font-semibold"
            >
              Reschedule
            </Button>

            <Button className="bg-orange-700 hover:bg-orange-800 text-white shadow-lg font-semibold">
              Request Cancellation
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ShowInterviewDetailsStudent;