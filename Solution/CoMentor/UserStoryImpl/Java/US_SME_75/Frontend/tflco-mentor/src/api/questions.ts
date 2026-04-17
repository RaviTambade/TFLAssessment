import type { Question } from "../types/question";

export type QuestionsPage = {
  content: Question[];
  totalPages: number;
  totalElements: number;
  number: number;
  size: number;
  first: boolean;
  last: boolean;
};

export async function fetchQuestionsByStatus(
  status: string,
  page = 0,
  size = 10
): Promise<QuestionsPage> {
  const res = await fetch(
    `http://localhost:8087/api/questions?status=${encodeURIComponent(
      status
    )}&page=${page}&size=${size}`
  );

  if (!res.ok) {
    throw new Error(`Failed to load questions: ${res.statusText}`);
  }

  return (await res.json()) as QuestionsPage;
}
