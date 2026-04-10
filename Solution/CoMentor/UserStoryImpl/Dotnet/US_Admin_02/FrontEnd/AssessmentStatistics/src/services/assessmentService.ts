import type { AssessmentStatistics } from "../models/AssessmentStatistics";

const API_URL = "http://localhost:5064/api/AssessmentStatistics"; // your backend URL

export const getAssessmentStatistics = async (): Promise<AssessmentStatistics[]> => {
  const response = await fetch(API_URL); 

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return await response.json();
};