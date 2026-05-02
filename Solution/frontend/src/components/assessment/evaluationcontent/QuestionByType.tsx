// //working...

// import { useEffect, useMemo, useState } from "react";
// import {  WEBAPI_DOTNET_URL, WEBAPI_NODE_URL ,WEBAPI_JAVA_URL} from "@/lib/utils";


// type Question = {
//   questionId: number;
//   description: string;
//   questionType: string;
//   difficultyLevel: string;
//   status: string;
// };

// const fetchQuestionsByType = async (type: string) => {
//   const res = await fetch(`${WEBAPI_JAVA_URL}/questions?type=${type}`);
//   if (!res.ok) throw new Error('Failed to fetch');
//   return res.json();
// };

// const QUESTION_TYPES = [
//   "MCQ",
//   "PROBLEM_STATEMENT"
// ];

// const QuestionByType = () => {
//   const [selectedType, setSelectedType] = useState(QUESTION_TYPES[0]);
//   const [questions, setQuestions] = useState<Question[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const isEmpty = useMemo(
//     () => !loading && questions.length === 0,
//     [loading, questions]
//   );

//   useEffect(() => {
//     let isMounted = true;

//     const load = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const data = await fetchQuestionsByType(selectedType);
//         if (isMounted) {
//           setQuestions(data);
//         }
//       } catch (err) {
//         if (isMounted) {
//           setError(
//             err instanceof Error ? err.message : "Failed to load questions"
//           );
//           setQuestions([]);
//         }
//       } finally {
//         if (isMounted) {
//           setLoading(false);
//         }
//       }
//     };

//     load();
//     return () => {
//       isMounted = false;
//     };
//   }, [selectedType]);

//   return (
//     <section className="py-12 bg-gradient-to-b from-orange-50/40 to-background">
//       <div className="container mx-auto px-4 max-w-5xl">
        
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
//             View Questions By Type
//           </h1>
//           <p className="text-sm sm:text-base text-muted-foreground mt-2">
//             Select a category to load questions.
//           </p>
//         </div>

//         {/* Radio Buttons */}
//         <div className="mb-8">
//           <label className="text-sm font-semibold text-foreground mb-3 block">
//             Question Type
//           </label>

//           <div className="flex flex-wrap gap-4">
//             {QUESTION_TYPES.map((type) => (
//               <label
//                 key={type}
//                 className={`flex items-center gap-2 px-4 py-2 rounded-lg border cursor-pointer transition
//                   ${
//                     selectedType === type
//                       ? "border-orange-400 bg-orange-100 text-orange-600"
//                       : "border-border hover:border-orange-300"
//                   }`}
//               >
//                 <input
//                   type="radio"
//                   name="questionType"
//                   value={type}
//                   checked={selectedType === type}
//                   onChange={() => setSelectedType(type)}
//                   className="accent-orange-500"
//                 />
//                 <span className="text-sm font-medium">{type}</span>
//               </label>
//             ))}
//           </div>
//         </div>

//         {/* States */}
//         {loading && (
//           <div className="rounded-lg border border-border bg-card p-4 text-sm text-muted-foreground animate-pulse shadow-sm">
//             Loading questions...
//           </div>
//         )}

//         {error && (
//           <div className="rounded-lg border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive shadow-sm">
//             {error}
//           </div>
//         )}

//         {isEmpty && !error && (
//           <div className="rounded-lg border border-border bg-card p-4 text-sm text-muted-foreground shadow-sm">
//             No questions found.
//           </div>
//         )}

//         {/* Questions */}
//         {questions.length > 0 && (
//           <div className="group rounded-xl border border-border bg-card p-5 shadow-sm">
//             <h2 className="text-lg font-semibold text-foreground mb-4">
//               {selectedType.replaceAll("_", " ")} Questions
//             </h2>

//             <ul className="space-y-3">
//               {questions.map((question) => (
//                 <li
//                   key={question.questionId}
//                   className="rounded-lg border border-border bg-background p-3"
//                 >
//                   <p className="text-sm sm:text-base text-foreground leading-relaxed">
//                     {question.description}
//                   </p>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default QuestionByType;