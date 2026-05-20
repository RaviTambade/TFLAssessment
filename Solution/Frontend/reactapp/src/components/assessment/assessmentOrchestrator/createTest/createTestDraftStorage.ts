/** Draft metadata from the Create Test form, carried to Question Options and sent with create API. */
export type CreateTestDraftPayload = {
  title: string;
  description: string;
  duration: number;
};

export const CREATE_TEST_DRAFT_STORAGE_KEY = "createTestDraft";

export function isCreateTestDraftPayload(value: unknown): value is CreateTestDraftPayload {
  if (!value || typeof value !== "object") {
    return false;
  }
  const o = value as Record<string, unknown>;
  const title = o.title;
  const description = o.description;
  const duration = o.duration;
  return (
    typeof title === "string" &&
    typeof description === "string" &&
    (typeof duration === "number" || typeof duration === "string")
  );
}

export function readCreateTestDraftFromSession(): CreateTestDraftPayload | null {
  const raw = sessionStorage.getItem(CREATE_TEST_DRAFT_STORAGE_KEY);
  if (!raw) {
    return null;
  }
  try {
    const parsed: unknown = JSON.parse(raw);
    return isCreateTestDraftPayload(parsed) ? parsed : null;
  } catch {
    return null;
  }
}
