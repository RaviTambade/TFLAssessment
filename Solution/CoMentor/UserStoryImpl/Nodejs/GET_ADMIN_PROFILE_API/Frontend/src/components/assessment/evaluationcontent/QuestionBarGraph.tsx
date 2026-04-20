const QuestionBarGraph=()=>{
    return(
        <div className="space-y-6 max-w-md mx-auto">
  
        <div>
            <p className="mb-2 font-semibold">MCQ: 50%</p>
            <div className="w-full bg-gray-200 rounded-full h-4">
            <div className="bg-red-500 h-4 rounded-full w-[50%]"></div>
            </div>
        </div>

        
        <div>
            <p className="mb-2 font-semibold">Code Review: 35%</p>
            <div className="w-full bg-gray-200 rounded-full h-4">
            <div className="bg-red-500 h-4 rounded-full w-[35%]"></div>
            </div>
        </div>

        
        <div>
            <p className="mb-2 font-semibold">Problem Statement: 80%</p>
            <div className="w-full bg-gray-200 rounded-full h-4">
            <div className="bg-red-500 h-4 rounded-full w-[80%]"></div>
            </div>
        </div>


        <div>
            <p className="mb-2 font-semibold">Mini Projects: 20%</p>
            <div className="w-full bg-gray-200 rounded-full h-4">
            <div className="bg-red-500 h-4 rounded-full w-[20%]"></div>
            </div>
        </div>


        <div>
            <p className="mb-2 font-semibold">Mock Questions: 70%</p>
            <div className="w-full bg-gray-200 rounded-full h-4">
            <div className="bg-red-500 h-4 rounded-full w-[70%]"></div>
            </div>
        </div>
        </div>
    );
}
export default QuestionBarGraph;