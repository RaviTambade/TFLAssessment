import { useEffect ,useState} from "react";
import { Button } from "@/components/ui/button";
import {Card,CardContent,CardHeader,CardTitle,} from "@/components/ui/card";
import { WEBAPI_JAVA_URL } from "@/lib/utils";
import { useParams } from "react-router-dom";

const ShowInterviewDetailsStudent = () => {

    const [interviewDetail,setInterviewDetail]=useState({
        title: "",
        scheduleDate: "",
        mode: "",
        interviewer: "",
        interviewId:0
    });

    const storedUser = sessionStorage.getItem("current");
    const user = storedUser ? JSON.parse(storedUser) : null;
    const {id}=useParams();

   useEffect(() => {
    console.log(user);
    if(!user) return;
    fetch(
        // `${WEBAPI_JAVA_URL}/interview/details/student/${user.userid}/interview/1`
        `${WEBAPI_JAVA_URL}/interview/details/${user.userid}/role/${user.role_id}/interview/${id}`
    )
    .then((res) => {
        console.log(res);
        if(!res.ok){
            throw new Error("Failed to fetch api");
        }
        return res.json();
    })
    .then((data) => {
        console.log("DATA RECEIVED:", data);
        setInterviewDetail(data);
    })
    .catch((err) => {
        console.error(err);
    });
    }, []);

    const handleCancel=async()=>{
      try{
         const response = await fetch(
            `${WEBAPI_JAVA_URL}/interview/${id}/cancel`,
            {
                method: "PUT",
                body: JSON.stringify({
                    status: "CANCELED"
                })
            }
        );
      }catch(error){
        console.log(error);
      }
     
    }
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
              <h4 className="text-lg font-semibold text-gray-800 mt-1">
                {interviewDetail.title}
              </h4>
            </div>

            <div className=" p-5 rounded-xl border border-orange-300 shadow-sm hover:shadow-md transition">
              <p className="text-sm text-orange-900 font-medium">
                Scheduled Date
              </p>
              <h4 className="text-lg font-semibold text-gray-800 mt-1">
                {interviewDetail.scheduleDate}
              </h4>
            </div>

            <div className=" p-5 rounded-xl border border-orange-300 shadow-sm hover:shadow-md transition">
              <p className="text-sm text-orange-900 font-medium">
                Interview Mode
              </p>
              <h4 className="text-lg font-semibold text-gray-800 mt-1">
                {interviewDetail.mode}
              </h4>
            </div>


          {user.role_id === 2 && (
            <>
            <div className="p-5 rounded-xl border border-orange-300 shadow-sm hover:shadow-md transition">
              <p className="text-sm text-orange-900 font-medium">
                Interviewer
              </p>
              <h4 className="text-lg font-semibold text-gray-800 mt-1">
                {interviewDetail.interviewer}
              </h4>
            </div>
          
            </>
           )}
           {user.role_id === 4 && (
            <>
            <div className="p-5 rounded-xl border border-orange-300 shadow-sm hover:shadow-md transition">
              <p className="text-sm text-orange-900 font-medium">
                Student
              </p>
              <h4 className="text-lg font-semibold text-gray-800 mt-1">
                {interviewDetail.interviewer}
              </h4>
            </div>
          
            </>
           )}
          </div>
          <div className="flex flex-col md:flex-row gap-4 justify-end">

    {/* Student Buttons */}
    {user.role_id === 2 && (
        <>
        <Button className="bg-orange-700 hover:bg-orange-800 text-white shadow-lg font-semibold">
            Request Cancellation
        </Button>
        </>
    )}

    {/* SME Buttons */}
    {user.role_id === 4 && (
        <>
        <Button
            className="bg-green-700 hover:bg-green-800 text-white shadow-lg font-semibold"
        >
            Accept Interview
        </Button>

        <Button
            variant="outline"
            className="border-red-700 text-red-800 hover:bg-red-100 font-semibold"
        >
            Reject Interview
        </Button>

        <Button onClick={handleCancel}
            variant="outline"
            className="border-red-700 text-red-800 hover:bg-red-100 font-semibold"
        >
            Cancel Interview
        </Button>
        </>
    )}

    </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ShowInterviewDetailsStudent;