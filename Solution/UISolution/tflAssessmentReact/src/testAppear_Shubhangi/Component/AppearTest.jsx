 import { useEffect, useState } from "react";
 import GetQuestionBankServiceFetch from "../Services/GetQuestionBankServiceFetch";

 const QuestionBankList=()=>{

    const [questions, setQuestions] = useState([]);
    const[testId,setTestId]=useState();
    const [error, setError] = useState(null);

    const handleInputChange = (event) => {
        setTestId(event.target.value);
    };

     useEffect(()=>{
         const fetchQuestions = async () => {
             try {
                const data = await GetQuestionBankServiceFetch.getAllQuestions(2);
                console.log(data);
                setQuestions(data);
             } catch (err) {
                 setError('Failed to fetch QuestionBank');
            }
        };

        fetchQuestions();
         },[]);

     if (error) return <p>{error}</p>;
    return(
        <>
             <h1>Question Bank</h1>
             <label>Enter Test Id : </label>
             <input type="number" id="testid" name="testid" value={testId} placeholder="Enter test id" onChange={handleInputChange}/>
        <ul>
            {
                questions.map(question => (
                <li key={question.id}> | {question.title}</li>
            ))}
        </ul>
        </>
    );
 }

 export default QuestionBankList;