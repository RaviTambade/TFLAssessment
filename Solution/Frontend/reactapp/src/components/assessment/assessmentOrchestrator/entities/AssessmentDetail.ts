import Difficulty from "./Difficulty";
interface AssessmentDetail {
  id: number;
  title: string;
  description: string;
  duration: number;
  difficulty: Difficulty;
  createdAt: string;
}
export default AssessmentDetail;