import axios from "axios";
import type { Assessment } from "../types/assessment";

const API_URL = "http://localhost:5259/api/StudentAssessment";

export const getAssessments = async (): Promise<Assessment[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};