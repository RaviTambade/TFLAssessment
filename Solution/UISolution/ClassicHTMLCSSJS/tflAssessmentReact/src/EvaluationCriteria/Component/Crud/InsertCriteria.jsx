import { useState,useEffect} from "react";
//import { useNavigate } from "react-router-dom";

import EvaluationCriteriaService from "../../Services/EvaluationCriteriaServiceFetch"

const InsertCriteria = () => {

    //var navigator = useNavigate();

    let crite = { id: "", title: '', subjectid: '' };
    const [subjects, setSubjects] = useState([]);
    const [selectedSubject, setSelectedSubject] = useState(null);
    const [criteria, setCriteria] = useState(crite);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSubjects = async () => {
            try {
                const data = await EvaluationCriteriaService.getAllSubjectTitles();
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
            //const criteriaData = await AssessmentService.getEvaluationCriteriaBySubject(subjectId);
            setCriteria(criteria.subjectid);
        } catch (error) {
            setError('Failed to fetch evaluation criteria.');
        }
    };
    const handleChange = (e) => {

        const { name, value } = e.target;
        setCriteria(prvCriteria => ({
            ...prvCriteria,
            [name]: value
        }));
        console.log("Criteria : " + JSON.stringify(criteria));
    }



    const handleSubmit = (e) => {
        e.preventDefault();

        EvaluationCriteriaService.createCriteria(criteria);
        console.log("Criteria added Suceesfully.......");
        //navigator("/customers");

    }

    return (
        <>

            <div>
                <h2>Insert New Criteria</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Id : </label>
                        <input type="text" id="id" name="id" value={criteria.id} onChange={handleChange} placeholder="Criteria Id" />
                    </div>
                    <div>
                        <label>Title : </label>
                        <input type="text" id="title" name="title" value={criteria.title} onChange={handleChange} placeholder="Criteria Title" />
                    </div>



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

                    <button type="submit">Add Criteria</button>
                </form>
            </div>

        </>
    )
};

export default InsertCriteria;

/*<div>
                        <label>SubjectId : </label>
                        <input type="text" id="subjectid" name="subjectid" value={criteria.subjectid} onChange={handleChange} placeholder="Subject ID"/>
                    </div>
                    */