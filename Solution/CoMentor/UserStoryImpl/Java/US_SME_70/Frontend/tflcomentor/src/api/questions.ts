import { getJson } from "./client";
import type { Question } from "../types/question";

export async function fetchQuestionsByType(type: string): Promise<Question[]> {
  return getJson<Question[]>(
    `/api/questions?type=${encodeURIComponent(type)}`
  );
}
