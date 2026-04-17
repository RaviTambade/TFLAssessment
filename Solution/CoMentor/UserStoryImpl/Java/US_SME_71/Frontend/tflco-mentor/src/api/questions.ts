import { getJson } from "./client";
import type { Question } from "../types/question";

export async function fetchQuestionsByStatus(status: string): Promise<Question[]> {
  return getJson<Question[]>(
    `/api/questions?status=${encodeURIComponent(status)}`
  );
}
