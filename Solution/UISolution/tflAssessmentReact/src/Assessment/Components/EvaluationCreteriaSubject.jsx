import { useEffect, useState } from "react";
import AssessmentService from "../Service/AssessmentService";

const EvaluationCriteriaComponent = () => {
    const [subjects, setSubjects] = useState([]);
    const [selectedSubject, setSelectedSubject] = useState(null);
    const [criteria, setCriteria] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSubjects = async () => {
            try {
                const data = await AssessmentService.getAllSubjects();
                setSubjects(data);
            } catch (error) {
                setError('Failed to fetch subjects.');
            }
        };
        fetchSubjects();
    }, []);

    const handleSubjectChange = async (event) => {
        const subjectId = event.target.value;
        setSelectedSubject(subjectId);

        try {
            const criteriaData = await AssessmentService.getEvaluationCriteriaBySubject(subjectId);
            setCriteria(criteriaData);
        } catch (error) {
            setError('Failed to fetch evaluation criteria.');
        }
    };

    return (
        <div>
            <h3>Select a Subject to View Evaluation Criteria</h3>
            {error && <p>{error}</p>}

            <div>
                <label htmlFor="subjectSelect">Subjects:</label>
                <select id="subjectSelect" onChange={handleSubjectChange} defaultValue="">
                    <option value="" disabled>Select a subject</option>
                    {subjects.map(subject => (
                        <option key={subject.id} value={subject.id}>
                            {subject.title}
                        </option>
                    ))}
                </select>
            </div>

            {selectedSubject && (
                <div>
                    <h4>Evaluation Criteria for Selected Subject:</h4>
                    <ul>
                        {criteria.map(criterion => (
                            <li key={criterion.id}>{criterion.title}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default EvaluationCriteriaComponent;
